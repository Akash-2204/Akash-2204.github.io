"use client";

import { about } from '../portfolio';
import './footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <a
      href="https://github.com/Akash-2204/Akash-2204.github.io"
      className="link footer__link"
    >
      {about.createdBy}
    </a>
  </footer>
);

export default Footer;