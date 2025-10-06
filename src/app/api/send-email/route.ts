import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Sanitize and validate the Gmail app password (should be 16 chars alphanumeric)
    const sanitizedAppPassword = process.env.GMAIL_APP_PASSWORD.replace(
      /[^a-zA-Z0-9]/g,
      ""
    );

    if (sanitizedAppPassword.length !== 16) {
      return NextResponse.json(
        {
          error:
            "Email service misconfigured. Please verify your 16-character Gmail app password.",
        },
        { status: 500 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: sanitizedAppPassword,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "sarthakgagapalliwar07@gmail.com", // Your receiving email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">From:</h3>
            <p style="margin: 0; padding: 10px; background: #f9f9f9; border-radius: 5px;">
              <strong>Name:</strong> ${name}<br>
              <strong>Email:</strong> ${email}
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">Subject:</h3>
            <p style="margin: 0; padding: 10px; background: #f9f9f9; border-radius: 5px;">
              ${subject}
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
            <div style="margin: 0; padding: 15px; background: #f9f9f9; border-radius: 5px; white-space: pre-line;">
              ${message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #e7f3ff; border-radius: 5px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This email was sent from your portfolio contact form.<br>
              Reply directly to this email to respond to ${name} at ${email}
            </p>
          </div>
        </div>
      `,
      replyTo: email, // Allow direct reply to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as { code?: string }).code === "EAUTH"
    ) {
      return NextResponse.json(
        {
          error:
            "Email service rejected the credentials. Double-check the Gmail address and app password.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
