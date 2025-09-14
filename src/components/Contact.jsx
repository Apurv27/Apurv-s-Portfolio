import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_vktbjuc", // ✅ Your Service ID (Outlook linked)
        "template_9yhj34t", // ✅ Your Template ID
        form.current,
        "ZoOmAQ9j99nEfQ1RS" // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-5 shadow rounded bg-light"
        style={{ width: "100%", maxWidth: "600px", marginBottom: "200px" }}
      >
        <h2 className="text-center mb-4">Contact Me</h2>

        <div className="mb-3">
          <label className="form-label fw-bold text-dark">Your Name</label>
          <input
            type="text"
            name="fromname"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-dark">Your Email</label>
          <input type="email" name="email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-dark">Subject</label>
          <input type="text" name="title" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-dark">Your Message</label>
          <textarea
            name="message"
            rows="5"
            className="form-control"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Status Message */}
        {status && <p className="text-center mt-3 fw-bold">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
