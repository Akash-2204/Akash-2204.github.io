"use client";

import { contact } from "../../portfolio";
import "./contact.css";

const Contact: React.FC = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <a
        href={`mailto:${contact.email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="btn btn--outline">Email me</span>
      </a>
    </section>
  );
};

export default Contact;
