import { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    vehicle: '',
    passengers: '',
    luggage: '',
    duration: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };
  
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', bookingData);
    setStep(4);
    window.scrollTo(0, 0);
  };

  return (
    <div className="luxury-reservation">
      {/* Hero Section */}
      <div className="reservation-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Réservation Premium</h1>
          <p>Voyagez avec élégance en quelques étapes simples</p>
        </div>
      </div>

      {/* Reservation Process */}
      <section className="reservation-process">
        <div className="container">
          {/* Progress Steps */}
          <div className="luxury-progress">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-bubble">
                <div className="step-number">1</div>
              </div>
              <span className="step-label">Itinéraire</span>
            </div>
            
            <div className="progress-connector"></div>
            
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-bubble">
                <div className="step-number">2</div>
              </div>
              <span className="step-label">Véhicule</span>
            </div>
            
            <div className="progress-connector"></div>
            
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-bubble">
                <div className="step-number">3</div>
              </div>
              <span className="step-label">Détails</span>
            </div>
            
            <div className="progress-connector"></div>
            
            <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>
              <div className="step-bubble">
                <div className="step-number">4</div>
              </div>
              <span className="step-label">Confirmation</span>
            </div>
          </div>

          {/* Form Container */}
          <div className="reservation-form-container">
            {step === 1 && (
              <div className="reservation-step">
                <h2><span className="step-icon">📍</span> Détails de l'itinéraire</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="pickup">Lieu de prise en charge</label>
                    <input
                      type="text"
                      id="pickup"
                      name="pickup"
                      placeholder="Adresse de départ"
                      value={bookingData.pickup}
                      onChange={handleChange}
                      required
                      className="luxury-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="destination">Destination</label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      placeholder="Adresse d'arrivée"
                      value={bookingData.destination}
                      onChange={handleChange}
                      required
                      className="luxury-input"
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleChange}
                        required
                        className="luxury-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="time">Heure</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={bookingData.time}
                        onChange={handleChange}
                        required
                        className="luxury-input"
                      />
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" className="luxury-btn primary" onClick={nextStep}>
                      Suivant <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 2 && (
              <div className="reservation-step">
                <h2><span className="step-icon">🚘</span> Sélection du véhicule</h2>
                <div className="vehicles-showcase">
                  <div 
                    className={`vehicle-card ${bookingData.vehicle === 'sedan' ? 'selected' : ''}`} 
                    onClick={() => setBookingData(prev => ({ ...prev, vehicle: 'sedan' }))}
                  >
                    <div className="vehicle-image">
                      <img src="https://images.unsplash.com/photo-1706001161333-b1c0a4a05c9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="Berline" />
                      <div className="vehicle-overlay"></div>
                    </div>
                    <div className="vehicle-info">
                      <h3>Berline de luxe</h3>
                      <p>Idéale pour 1-3 passagers</p>
                      <div className="vehicle-price">
                        <span className="price">90€</span>
                        <span className="per-hour">/ heure</span>
                      </div>
                      <div className="vehicle-features">
                        <span>🚗 4 portes</span>
                        <span>💺 3-4 places</span>
                        <span>🧳 2-3 bagages</span>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className={`vehicle-card ${bookingData.vehicle === 'suv' ? 'selected' : ''}`} 
                    onClick={() => setBookingData(prev => ({ ...prev, vehicle: 'suv' }))}
                  >
                    <div className="vehicle-image">
                      <img src="https://images.unsplash.com/photo-1566936746966-5a58ffa4885b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="SUV" />
                      <div className="vehicle-overlay"></div>
                    </div>
                    <div className="vehicle-info">
                      <h3>SUV Premium</h3>
                      <p>Idéal pour 1-5 passagers</p>
                      <div className="vehicle-price">
                        <span className="price">110€</span>
                        <span className="per-hour">/ heure</span>
                      </div>
                      <div className="vehicle-features">
                        <span>🚙 5 portes</span>
                        <span>💺 5-6 places</span>
                        <span>🧳 4-5 bagages</span>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className={`vehicle-card ${bookingData.vehicle === 'van' ? 'selected' : ''}`} 
                    onClick={() => setBookingData(prev => ({ ...prev, vehicle: 'van' }))}
                  >
                    <div className="vehicle-image">
                      <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" alt="Van" />
                      <div className="vehicle-overlay"></div>
                    </div>
                    <div className="vehicle-info">
                      <h3>Van Executive</h3>
                      <p>Idéal pour 1-7 passagers</p>
                      <div className="vehicle-price">
                        <span className="price">120€</span>
                        <span className="per-hour">/ heure</span>
                      </div>
                      <div className="vehicle-features">
                        <span>🚐 3-5 portes</span>
                        <span>💺 7-8 places</span>
                        <span>🧳 6-8 bagages</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="passengers">Nombre de passagers</label>
                      <select
                        id="passengers"
                        name="passengers"
                        value={bookingData.passengers}
                        onChange={handleChange}
                        required
                        className="luxury-select"
                      >
                        <option value="">Sélectionner</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7+</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="luggage">Bagages</label>
                      <select
                        id="luggage"
                        name="luggage"
                        value={bookingData.luggage}
                        onChange={handleChange}
                        required
                        className="luxury-select"
                      >
                        <option value="">Sélectionner</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="duration">Durée estimée (heures)</label>
                    <input
                      type="number"
                      id="duration"
                      name="duration"
                      min="1"
                      step="0.5"
                      placeholder="Ex: 3.5"
                      value={bookingData.duration}
                      onChange={handleChange}
                      required
                      className="luxury-input"
                    />
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" className="luxury-btn secondary" onClick={prevStep}>
                      <span className="btn-arrow">←</span> Précédent
                    </button>
                    <button type="button" className="luxury-btn primary" onClick={nextStep}>
                      Suivant <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 3 && (
              <div className="reservation-step">
                <h2><span className="step-icon">👤</span> Informations personnelles</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">Prénom</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={bookingData.firstName}
                        onChange={handleChange}
                        required
                        className="luxury-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="lastName">Nom</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={bookingData.lastName}
                        onChange={handleChange}
                        required
                        className="luxury-input"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Adresse email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleChange}
                        required
                        className="luxury-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleChange}
                        required
                        className="luxury-input"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="specialRequests">Demandes spéciales (optionnel)</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows="4"
                      placeholder="Ex: besoin d'un siège enfant, assistance particulière, etc."
                      value={bookingData.specialRequests}
                      onChange={handleChange}
                      className="luxury-textarea"
                    ></textarea>
                  </div>
                  
                  <div className="booking-summary">
                    <h3>Récapitulatif de la réservation</h3>
                    <div className="summary-grid">
                      <div className="summary-item">
                        <span className="summary-label">Départ:</span>
                        <span className="summary-value">{bookingData.pickup || 'Non spécifié'}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Destination:</span>
                        <span className="summary-value">{bookingData.destination || 'Non spécifié'}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Date:</span>
                        <span className="summary-value">{bookingData.date || 'Non spécifiée'}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Heure:</span>
                        <span className="summary-value">{bookingData.time || 'Non spécifiée'}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Véhicule:</span>
                        <span className="summary-value">
                          {bookingData.vehicle === 'sedan' && 'Berline de luxe'}
                          {bookingData.vehicle === 'suv' && 'SUV Premium'}
                          {bookingData.vehicle === 'van' && 'Van Executive'}
                          {!bookingData.vehicle && 'Non sélectionné'}
                        </span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Passagers:</span>
                        <span className="summary-value">{bookingData.passengers || 'Non spécifié'}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Durée:</span>
                        <span className="summary-value">{bookingData.duration ? `${bookingData.duration} heures` : 'Non spécifiée'}</span>
                      </div>
                      <div className="summary-item summary-total">
                        <span className="summary-label">Total estimé:</span>
                        <span className="summary-value">
                          {bookingData.vehicle && bookingData.duration ? (
                            <>
                              {bookingData.vehicle === 'sedan' && (90 * parseFloat(bookingData.duration)).toFixed(2)}€
                              {bookingData.vehicle === 'suv' && (110 * parseFloat(bookingData.duration)).toFixed(2)}€
                              {bookingData.vehicle === 'van' && (120 * parseFloat(bookingData.duration)).toFixed(2)}€
                            </>
                          ) : '-- €'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" className="luxury-btn secondary" onClick={prevStep}>
                      <span className="btn-arrow">←</span> Précédent
                    </button>
                    <button type="submit" className="luxury-btn primary">
                      Confirmer la réservation
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 4 && (
              <div className="confirmation-screen">
                <div className="confirmation-badge">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#4CAF50"/>
                  </svg>
                </div>
                <h2>Réservation confirmée!</h2>
                <p className="confirmation-message">
                  Merci pour votre réservation, {bookingData.firstName || 'cher client'}. Un email de confirmation a été envoyé à {bookingData.email}.
                </p>
                
                <div className="confirmation-details">
                  <p><strong>Numéro de réservation:</strong> RE-{Math.floor(100000 + Math.random() * 900000)}</p>
                  <p><strong>Date:</strong> {bookingData.date}</p>
                  <p><strong>Heure:</strong> {bookingData.time}</p>
                  <p><strong>Véhicule:</strong> 
                    {bookingData.vehicle === 'sedan' && ' Berline de luxe'}
                    {bookingData.vehicle === 'suv' && ' SUV Premium'}
                    {bookingData.vehicle === 'van' && ' Van Executive'}
                  </p>
                  <p><strong>Total:</strong> 
                    {bookingData.vehicle && bookingData.duration ? (
                      <>
                        {bookingData.vehicle === 'sedan' && (90 * parseFloat(bookingData.duration)).toFixed(2)}€
                        {bookingData.vehicle === 'suv' && (110 * parseFloat(bookingData.duration)).toFixed(2)}€
                        {bookingData.vehicle === 'van' && (120 * parseFloat(bookingData.duration)).toFixed(2)}€
                      </>
                    ) : '-- €'}
                  </p>
                </div>
                
                <p className="contact-note">
                  Un de nos conseillers vous contactera dans les 24 heures pour confirmer les détails de votre réservation.
                  Pour toute question, contactez-nous au <strong>01 23 45 67 89</strong>.
                </p>
                
                <div className="confirmation-actions">
                  <a href="/" className="luxury-btn secondary">
                    Retour à l'accueil
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;