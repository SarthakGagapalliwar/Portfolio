import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
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
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  const styles = {
    contactForm: {
      width: "100vw",
      padding: "4em 2em 2em 2em",
      display: "flex",
      flexDirection: "column" as const,
      gap: "4em",
      backgroundColor: "var(--base-500)",
      color: "var(--base-100)",
      fontFamily: 'var(--font-manrope), "Manrope", system-ui, sans-serif',
    },
    title: {
      fontFamily: '"Rader", var(--font-manrope), system-ui, sans-serif',
      fontSize: "4vw",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: "3.4vw",
      textTransform: "uppercase" as const,
      color: "var(--base-100)",
      marginBottom: "1em",
    },
    paragraph: {
      fontFamily: 'var(--font-manrope), "Manrope", system-ui, sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
      color: "var(--base-250)",
      lineHeight: 1.6,
      WebkitFontSmoothing: "antialiased",
    },
    smallText: {
      fontFamily: 'var(--font-dm-mono), "DM Mono", "JetBrains Mono", monospace',
      fontSize: "0.8rem",
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase" as const,
      color: "var(--base-300)",
      WebkitFontSmoothing: "antialiased",
    },
    row: {
      display: "flex",
      gap: "4em",
    },
    topRow: {
      width: "100%",
      display: "flex",
      gap: "1em",
    },
    copyItem: {
      flex: 1,
    },
    copyItemCenter: {
      flex: 1,
      textAlign: "center" as const,
    },
    copyItemRight: {
      flex: 1,
      textAlign: "right" as const,
    },
    col: {
      flex: 1,
    },
    leftCol: {
      flex: 1,
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "space-between",
      gap: "4em",
    },
    header: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "1.5em",
    },
    headerParagraph: {
      fontFamily: 'var(--font-manrope), "Manrope", system-ui, sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
      color: "var(--base-250)",
      lineHeight: 1.6,
      WebkitFontSmoothing: "antialiased",
      marginBottom: "0.5em",
      width: "75%",
    },
    availability: {
      width: "75%",
      display: "flex",
      justifyContent: "space-between",
      gap: "1em",
      borderTop: "1px dashed var(--base-300)",
      padding: "0.5em 0",
    },
    rightCol: {
      flex: 1,
      display: "flex",
      flexDirection: "column" as const,
      gap: "0.75em",
    },
    formItem: {
      marginBottom: "1em",
    },
    input: {
      backgroundColor: "transparent",
      border: "1px dashed var(--base-300)",
      color: "var(--base-100)",
      padding: "1em",
      borderRadius: "0.4em",
      fontFamily: '"Manrope", sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
      width: "100%",
      transition: "border-color 0.3s ease",
      WebkitFontSmoothing: "antialiased",
    },
    textarea: {
      backgroundColor: "transparent",
      border: "1px dashed var(--base-300)",
      color: "var(--base-100)",
      padding: "1em",
      borderRadius: "0.4em",
      fontFamily: 'var(--font-manrope), "Manrope", system-ui, sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
      width: "100%",
      transition: "border-color 0.3s ease",
      WebkitFontSmoothing: "antialiased",
      resize: "vertical" as const,
      minHeight: "120px",
    },
    button: {
      backgroundColor: "var(--base-100)",
      color: "var(--base-500)",
      border: "none",
      padding: "1em 2em",
      borderRadius: "0.4em",
      fontFamily: 'var(--font-dm-mono), "DM Mono", "JetBrains Mono", monospace',
      fontSize: "0.8rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      textTransform: "uppercase" as const,
      letterSpacing: "0.04em",
      textDecoration: "none",
      display: "block",
      width: "100%",
      WebkitFontSmoothing: "antialiased",
    },
  };

  return (
    <div style={styles.contactForm} id="connect">
      <div style={styles.topRow}>
        <div style={styles.copyItem}>
          <p style={styles.smallText}>Contact</p>
        </div>
        <div style={styles.copyItemCenter}>
          <p style={styles.smallText}>Let's talk</p>
        </div>
        <div style={styles.copyItemRight}>
          <p style={styles.smallText}>Get in touch</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.leftCol}>
          <div style={styles.header}>
            <h3 style={styles.title}>Let's start a project together</h3>
            <p style={styles.headerParagraph}>
              I'm always excited to take on new challenges and collaborate on
              innovative projects. Whether you have a clear vision or just a
              spark of an idea, let's discuss how we can bring it to life
              together.
            </p>
          </div>
          <div style={styles.availability}>
            <p style={styles.smallText}>Currently available</p>
            <p style={styles.smallText}>For new projects</p>
          </div>
        </div>
        <div style={styles.rightCol}>
          <form onSubmit={handleSubmit}>
            <div style={styles.formItem}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formItem}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formItem}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formItem}>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={handleInputChange}
                style={styles.textarea}
              ></textarea>
            </div>
            {submitStatus === "success" && (
              <div
                style={{
                  color: "var(--base-100)",
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  border: "1px dashed rgba(34, 197, 94, 0.3)",
                  padding: "1em",
                  borderRadius: "0.4em",
                  marginBottom: "1em",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div
                style={{
                  color: "var(--base-100)",
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                  border: "1px dashed rgba(239, 68, 68, 0.3)",
                  padding: "1em",
                  borderRadius: "0.4em",
                  marginBottom: "1em",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                Failed to send message. Please try again or email me directly.
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                ...styles.button,
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
