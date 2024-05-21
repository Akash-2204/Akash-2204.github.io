"use client";

import { about } from '../portfolio';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <a
      href="https://github.com/rajshekhar26/cleanfolio"
      className="link footer__link"
    >
      {about.createdBy}
    </a>
  </footer>
);

export default Footer;