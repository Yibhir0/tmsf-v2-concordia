
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

import { useTranslation } from 'react-i18next';
const ContactCard = ({ address, phone, email, socialLinks }) => {

  const { t } = useTranslation();
  return (
    <div className="contact-card">
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt icon" />
          <div>
            <h2 className="contact-title">{t('officeAddress')}</h2>
            <p className="contact-detail">{address.line1}</p>
            <p className="contact-detail">{address.line2}</p>
            <p className="contact-detail">{address.line3}</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="fas fa-phone-alt icon" />
          <div>
            <h2 className="contact-title">{t('callUs')}</h2>
            <p className="contact-detail">Tel: {phone}</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="fas fa-envelope icon" />
          <div>
            <h2 className="contact-title">{t('sendEmail')}</h2>
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
        {socialLinks.twitter && (
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
            <FaXTwitter />
          </a>
        )}
        {socialLinks.youtube && (
          <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="social-icon">
            <FaYoutube />
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
