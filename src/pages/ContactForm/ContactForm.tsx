import React from "react";

const ContactForm: React.FC = () => {
  const styles = {
    contactForm: {
      width: "100vw",
      padding: "4em 2em 2em 2em",
      display: "flex",
      flexDirection: "column" as const,
      gap: "4em",
      backgroundColor: "var(--base-450)",
      color: "var(--base-100)",
      fontFamily: '"Manrope", sans-serif',
    },
    title: {
      fontFamily: '"Rader", sans-serif',
      fontSize: "4vw",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: "3.4vw",
      textTransform: "uppercase" as const,
      color: "var(--base-100)",
      marginBottom: "1em",
    },
    paragraph: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
      color: "var(--base-250)",
      lineHeight: 1.6,
      WebkitFontSmoothing: "antialiased",
    },
    smallText: {
      fontFamily: '"Messina Sans Mono", monospace',
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
      fontFamily: '"Manrope", sans-serif',
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
      fontFamily: '"Messina Sans", sans-serif',
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
      fontFamily: '"Messina Sans Mono", monospace',
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
          <form>
            <div style={styles.formItem}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formItem}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formItem}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formItem}>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
                style={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
