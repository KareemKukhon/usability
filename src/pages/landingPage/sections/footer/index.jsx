import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactInfo from '../../../../components/contantInfo';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column contact-info">
          <h1 className="footer-title">Usability</h1>
          <ContactInfo title="info@usability.com" Icon={MailOutlineIcon} />
          <ContactInfo title="123 Main St" Icon={HomeIcon} />
          <ContactInfo title="123-456-7890" Icon={PhoneIcon} />
        </div>

        <div className="footer-column links-section">
          <nav className="footer-links">
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Services</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="social-media-links">
            <a href="https://facebook.com" aria-label="Facebook">
              <FacebookIcon className="icon" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <TwitterIcon className="icon" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <InstagramIcon className="icon" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <LinkedInIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copy">© 2024 Resilio. All rights reserved.</p>
    </footer>
  );
}
