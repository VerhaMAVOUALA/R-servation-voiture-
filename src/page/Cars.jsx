import { useState } from 'react';
import CarCard from '../components/CarCard';
import './Cars.css';

const Cars = () => {
  const [filter, setFilter] = useState('all');
  
 // Car data
  const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz Classe S',
      image: 'https://images.unsplash.com/photo-1706001161333-b1c0a4a05c9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      category: 'berline',
      pricePerHour: 90,
      passengers: 4,
      luggage: 3
    },
    {
      id: 2,
      name: 'BMW X7',
      image: 'https://images.unsplash.com/photo-1566936746966-5a58ffa4885b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      category: 'suv',
      pricePerHour: 110,
      passengers: 6,
      luggage: 4
    },
    {
      id: 3,
      name: 'Tesla Model S',
      image: 'https://images.unsplash.com/photo-1523828341555-9947d81312d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      category: 'berline',
      pricePerHour: 95,
      passengers: 4,
      luggage: 2
    },
    {
      id: 4,
      name: 'Audi A8',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1675&q=80',
      category: 'berline',
      pricePerHour: 85,
      passengers: 4,
      luggage: 3
    },
    {
      id: 5,
      name: 'Mercedes-Benz V-Class',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
      category: 'van',
      pricePerHour: 120,
      passengers: 7,
      luggage: 6
    },
    {
      id: 6,
      name: 'Range Rover',
      image: 'https://images.unsplash.com/photo-1604055833848-5c0935494ae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1675&q=80',
      category: 'suv',
      pricePerHour: 105,
      passengers: 5,
      luggage: 4
    },
    {
      id: 7,
      name: 'Cadillac Escalade',
      image: 'https://images.unsplash.com/photo-1616422285623-13ff4104d8cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
      category: 'suv',
      pricePerHour: 115,
      passengers: 6,
      luggage: 5
    },
    {
      id: 8,
      name: 'Mercedes-Benz Sprinter',
      image: 'https://images.unsplash.com/photo-1631511377273-a1902f8e5de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      category: 'van',
      pricePerHour: 130,
      passengers: 10,
      luggage: 8
    }
  ];

  const filteredCars = filter === 'all' 
    ? cars 
    : cars.filter(car => car.category === filter);

  return (
    <div className="cars-page">
      <div className="page-banner">
        <div className="banner-content">
          <h1>Notre flotte premium</h1>
          <p>Découvrez l'excellence automobile pour chaque occasion</p>
          <div className="banner-scroll-indicator"></div>
        </div>
      </div>
      
      <section className="cars-section">
        <div className="container">
          <div className="section-header">
            <h2>Choisissez votre véhicule</h2>
            <p>Sélectionnez parmi notre collection exclusive de véhicules haut de gamme</p>
          </div>
          
          <div className="filter-options">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <span className="filter-icon">🚗</span> Tous
            </button>
            <button
              className={`filter-btn ${filter === 'berline' ? 'active' : ''}`}
              onClick={() => setFilter('berline')}
            >
              <span className="filter-icon">🏎️</span> Berlines
            </button>
            <button
              className={`filter-btn ${filter === 'suv' ? 'active' : ''}`}
              onClick={() => setFilter('suv')}
            >
              <span className="filter-icon">🚙</span> SUV
            </button>
            <button
              className={`filter-btn ${filter === 'van' ? 'active' : ''}`}
              onClick={() => setFilter('van')}
            >
              <span className="filter-icon">🚐</span> Vans
            </button>
          </div>
          
          <div className="cars-grid">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cars;