import { useState } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-card-inner">
        <div className="service-icon-container">
          <div className="service-icon-backdrop"></div>
          <div 
            className="service-icon"
            dangerouslySetInnerHTML={{ __html: icon }}
          ></div>
        </div>
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <div className="service-hover-effect"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
