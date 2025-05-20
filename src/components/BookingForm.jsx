import { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ isHorizontalLayout = false }) => {
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    vehicle: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Votre demande de réservation a été reçue. Nous vous contacterons sous peu pour la confirmer.');
  };

  return (
    <div className={`reservation-containers ${isHorizontalLayout ? 'reservation-horizontal' : ''}`}>
      <div className="reservation-header">
        <h3 className="reservation-title">RÉSERVER UNE VOITURE</h3>
        <p className="reservation-subtitle">Commencez votre expérience de luxe</p>
      </div>
      
      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="reservation-input-group">
          <label htmlFor="pickup" className="reservation-label">Lieu de prise en charge</label>
          <input
            type="text"
            id="pickup"
            name="pickup"
            placeholder="Adresse de départ"
            value={formData.pickup}
            onChange={handleChange}
            className="reservation-input"
            required
          />
        </div>
        
        <div className="reservation-input-group">
          <label htmlFor="destination" className="reservation-label">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Adresse d'arrivée"
            value={formData.destination}
            onChange={handleChange}
            className="reservation-input"
            required
          />
        </div>
        
        <div className="reservation-row">
          <div className="reservation-input-group">
            <label htmlFor="date" className="reservation-label">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="reservation-input"
              required
            />
          </div>
          
          <div className="reservation-input-group">
            <label htmlFor="time" className="reservation-label">Heure</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="reservation-input"
              required
            />
          </div>
        </div>
        
        <div className="reservation-input-group">
          <label htmlFor="vehicle" className="reservation-label">Type de véhicule</label>
          <select
            id="vehicle"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            className="reservation-select"
            required
          >
            <option value="">Sélectionner un véhicule</option>
            <option value="sedan">Berline de luxe</option>
            <option value="suv">SUV Premium</option>
            <option value="van">Van Executive</option>
            <option value="limousine">Limousine</option>
          </select>
        </div>
        
        <button type="submit" className="reservation-submit-btn">
          Réserver maintenant
          <span className="reservation-btn-icon">→</span>
        </button>
      </form>
    </div>
  );
};

export default BookingForm;