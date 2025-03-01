import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

