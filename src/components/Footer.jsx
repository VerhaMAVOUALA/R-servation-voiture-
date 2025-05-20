import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>LuxDrive</h3>
          <p>Service de chauffeur privé haut de gamme pour vos déplacements professionnels et personnels.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="social-icon facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="social-icon twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="social-icon instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="social-icon linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Liens rapides</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/voitures">Nos voitures</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Transport aéroport</Link></li>
            <li><Link to="/services">Longue distance</Link></li>
            <li><Link to="/services">Évènementiel</Link></li>
            <li><Link to="/services">Mise à disposition</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <address>
            <p>123 Avenue des Champs-Élysées</p>
            <p>75008 Paris, France</p>
            <p>Email: contact@luxdrive.com</p>
            <p>Tél: +33 1 23 45 67 89</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} LuxDrive. Tous droits réservés.</p>
          <div className="footer-links">
            <Link to="/privacy">Politique de confidentialité</Link>
            <Link to="/terms">Conditions d'utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
