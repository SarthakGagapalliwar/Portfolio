import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactFormEmailJS: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Initialize EmailJS (you'll need to replace these with your actual IDs)
  const SERVICE_ID = "your_service_id"; // From EmailJS dashboard
  const TEMPLATE_ID = "your_template_id"; // From EmailJS dashboard
  const USER_ID = "your_user_id"; // From EmailJS dashboard

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "sarthakgagapalliwar07@gmail.com", // Your email
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... rest of the component with same styles and JSX as the original ContactForm
  // This is just the EmailJS-specific logic

  return (
    <div>
      {/* Use the same JSX structure as ContactForm.tsx but with the EmailJS submit handler */}
      <p>
        This is the EmailJS version - refer to the main ContactForm.tsx for the
        complete UI
      </p>
    </div>
  );
};

export default ContactFormEmailJS;
