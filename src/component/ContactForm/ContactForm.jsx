import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // send email
    const mailtoLink = `mailto:zehadsarkar22@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0AMessage:%20${message}`;

    //redirect email link
    window.location.href = mailtoLink;

    // reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <SectionTitle title="Contact" />
      <form className="w-3/4 mx-auto">
        <fieldset className="p-3 border-2">
          <legend className="text-4xl font-bold">Contact me</legend>
          <div className="form-control">
            <label htmlFor="name">Your Full Name</label>
            <input
              type="text"
              className="p-2 border-2 rounded-md"
              placeholder="full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Your Email Address</label>
            <input
              type="email"
              className="p-2 border-2 rounded-md"
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="message">Your Message</label>
            <textarea
              rows={5}
              className="p-2 border-2 rounded-md"
              placeholder="your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-2 btn btn-primary"
            disabled={!name || !email || !message}
          >
            Send Message
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default ContactForm;
