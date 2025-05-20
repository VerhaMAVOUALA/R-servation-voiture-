
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Services data
  const services = [
    {
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.772 10.155l-1.368-4.104A2.995 2.995 0 0016.559 4H7.442a2.995 2.995 0 00-2.845 2.051l-1.368 4.104A2 2 0 002 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 001 1h1a1 1 0 001-1v-2h12v2a1 1 0 001 1h1a1 1 0 001-1v-2.277A1.99 1.99 0 0022 17v-5a2 2 0 00-1.228-1.845zM7.442 6h9.117c.357 0 .678.212.824.534l1.074 3.222a4.993 4.993 0 00-1.524-.434 6.447 6.447 0 00-1.032-.11c-1.336-.129-2.686.105-3.382.246-.881.182-2.476.197-3.911.14-1.318-.053-2.746-.212-2.746-.212-.861.044-1.544.208-2.167.46L5.794 6.534A.831.831 0 016.618 6h.824zM5.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm13 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/></svg>',
      title: 'Transport aéroport',
      description: 'Nos chauffeurs vous attendent à la sortie avec une pancarte à votre nom, vous aidant avec vos bagages pour un transfert sans stress.',
    },
    {
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
      title: 'Longue distance',
      description: 'Voyagez confortablement sur de longues distances avec un chauffeur expérimenté qui connaît les meilleurs itinéraires et arrêts.',
    },
    {
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>',
      title: 'Évènementiel',
      description: 'Service premium pour vos événements importants : mariages, galas, soirées d\'entreprise. Une expérience inoubliable pour vos invités.',
    },
    {
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>',
      title: 'Mise à disposition',
      description: 'Réservez une voiture avec chauffeur pour une durée définie. Idéal pour les visites touristiques ou les journées d\'affaires.',
    }
  ];

  // Featured cars data
  const featuredCars = [
    {
      id: 1,
      name: 'Mercedes-Benz Classe S',
      image: 'https://images.unsplash.com/photo-1706001161333-b1c0a4a05c9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      category: 'Berline de luxe',
      pricePerHour: 90,
      passengers: 4,
      luggage: 3
    },
    {
      id: 2,
      name: 'BMW X7',
      image: 'https://images.unsplash.com/photo-1566936746966-5a58ffa4885b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      category: 'SUV Premium',
      pricePerHour: 110,
      passengers: 6,
      luggage: 4
    },
    {
      id: 3,
      name: 'Tesla Model S',
      image: 'https://images.unsplash.com/photo-1523828341555-9947d81312d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      category: 'Électrique',
      pricePerHour: 95,
      passengers: 4,
      luggage: 2
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sophie Dubois',
      position: 'Directrice Marketing',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: 'Service impeccable ! Le chauffeur était ponctuel et très professionnel. La voiture était luxueuse et parfaitement entretenue. Je recommande vivement pour les déplacements d\'affaires.'
    },
    {
      name: 'Thomas Laurent',
      position: 'Entrepreneur',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      text: 'J\'utilise régulièrement LuxDrive pour mes déplacements professionnels. Le service est toujours irréprochable et les chauffeurs sont d\'une grande courtoisie.'
    },
    {
      name: 'Marie Lefevre',
      position: 'Avocate',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 4,
      text: 'Excellente expérience pour notre mariage ! Le chauffeur était élégant et la voiture magnifique. Tous nos invités étaient impressionnés.'
    }
  ];

  return (
    <div className="home-page">
      <HeroSection />
      
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Nos Services</h2>
            <p>Découvrez nos services de transport premium adaptés à tous vos besoins</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Cars Section */}
      <section className="featured-cars-section">
        <div className="container">
          <div className="section-header">
            <h2>Notre Flotte Premium</h2>
            <p>Sélection de véhicules de luxe avec chauffeurs expérimentés</p>
          </div>
          
          <div className="featured-cars-grid">
            {featuredCars.map(car => (
              <div key={car.id} className="featured-car">
                <img src={car.image} alt={car.name} />
                <div className="car-overlay">
                  <h3>{car.name}</h3>
                  <p className="car-category">{car.category}</p>
                  <div className="car-price">
                    <span>{car.pricePerHour}€</span> / heure
                  </div>
                  <Link to={`/voiture/${car.id}`} className="btn btn-primary">Découvrir</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="view-all-cars">
  <Link
    to="/voitures"
    className="btn btn-secondary"
    style={{
      backgroundColor: "#007BFF",
      
    }}
  >
    Voir toutes nos voitures
  </Link>
</div>

        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>Comment ça marche</h2>
            <p>Réserver votre chauffeur privé en 3 étapes simples</p>
          </div>
          
          <div className="steps">
            <div className="step">
              <div className="step-number"style={{backgroundColor: "#007BFF", }}>1</div>
              <h3>Réservez en ligne</h3>
              <p>Choisissez votre véhicule et remplissez le formulaire de réservation</p>
            </div>
            
            <div className="step">
              <div className="step-number"style={{
      backgroundColor: "#007BFF",
      
    }}>2</div>
              <h3>Confirmation</h3>
              <p>Recevez une confirmation immédiate et les détails de votre chauffeur</p>
            </div>
            
            <div className="step">
              <div className="step-number"style={{
      backgroundColor: "#007BFF",
      
    }}>3</div>
              <h3>Profitez du trajet</h3>
              <p>Votre chauffeur arrive à l'heure prévue, détendez-vous et profitez</p>
            </div>
          </div>
          
          <div className="cta-booking">
            <Link to="/reservation" className="btn btn-primary">Réserver maintenant</Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Ce que disent nos clients</h2>
            <p>Découvrez les expériences de nos clients satisfaits</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à réserver votre chauffeur privé ?</h2>
            <p>Expérience de conduite luxueuse avec des chauffeurs professionnels</p>
            <Link to="/reservation" className="btn btn-primary">Réserver maintenant</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
