
import { Link } from 'react-router-dom';
import './HeroSection.css';
import BookingForm from './BookingForm';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="containers hero-content">
        <div className="hero-texts">
          <h1>Voyagez avec Élégance et Confort</h1>
          <p>Service de chauffeur privé haut de gamme pour tous vos déplacements. Notre flotte de véhicules premium et nos chauffeurs expérimentés sont à votre disposition 24/7.</p>
          <div className="hero-buttons">
            <Link to="/voitures" className="btn btn-primary">Découvrir nos voitures</Link>
            <Link to="/about" className="btn btn-secondary">En savoir plus</Link>
          </div>
        </div>
        <div className="hero-booking">
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
