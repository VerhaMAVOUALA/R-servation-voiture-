import { Link } from 'react-router-dom';
import './CarCard.css';

const CarCard = ({ car }) => {
  const { id, name, image, category, pricePerHour, passengers, luggage } = car;

  return (
    <div className="car-card">
      <div className="car-image">
        <img src={image} alt={name} />
        <div className="car-category">{category}</div>
      </div>
      <div className="car-details">
        <h3>{name}</h3>
        <div className="car-specs">
          <div className="spec">
            <span className="spec-icon passengers"></span>
            <span>{passengers} passagers</span>
          </div>
          <div className="spec">
            <span className="spec-icon luggage"></span>
            <span>{luggage} bagages</span>
          </div>
        </div>
        <div className="car-price">
          <span className="price">{pricePerHour}€</span>
          <span className="price-period">/ heure</span>
        </div>
        <div className="car-actions">
          <Link to={`/reservation/${id}`} className="btn btn-primary">Réserver</Link>
          <Link to={`/voiture/${id}`} className="btn btn-secondary">Détails</Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
