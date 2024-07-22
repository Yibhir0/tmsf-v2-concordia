// ContactCard.js
import React from 'react';

import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const ContactCard = ({ companyName, address, phone, email, socialLinks }) => {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt icon" />
          <div>
            <h2 className="contact-title">Office Address</h2>
            <p className="contact-detail">{address.line1}</p>
            <p className="contact-detail">{address.line2}</p>
            <p className="contact-detail">{address.line3}</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="fas fa-phone-alt icon" />
          <div>
            <h2 className="contact-title">Call Us</h2>
            <p className="contact-detail">Tel: {phone}</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="fas fa-envelope icon" />
          <div>
            <h2 className="contact-title">Send an E-mail</h2>
            <p ><a href={`mailto:${email}`} className="contact-detail">{email}</a></p>
          </div>
        </div>
      </div>

      <div className="social-icons">
        {socialLinks.facebook && (
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
            <FaFacebookF />
          </a>
        )}
        {socialLinks.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
            <FaLinkedinIn />
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
