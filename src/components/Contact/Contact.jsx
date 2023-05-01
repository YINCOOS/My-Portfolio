import React from "react";
import "./Contact.css";
import { MdMarkEmailRead } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0yg7u5e",
      "template_2vp61y4",
      form.current,
      "HcfLk_PBmgE5ypKC1"
    );
    e.target.reset();
  };
  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailRead className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ogunsemoyinade@gmail.com</h5>
            <a
              href="mailto:ogunsemoyinade@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2347032248112</h5>
            <a href="wa.me/+2347032248112" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>+2347032248112</h5>
            <a
              href="mailto:ogunsemoyinade@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
