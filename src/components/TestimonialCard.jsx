import { useState } from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const { name, position, image, rating, text } = testimonial;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`testimonial-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="testimonial-quote">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
      </div>
      
      <p className="testimonial-text">{text}</p>
      
      <div className="testimonial-rating">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`star ${index < rating ? 'filled' : ''}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      
      <div className="testimonial-author">
        <div className="author-image">
          <img src={image} alt={name} />
          <div className="image-border"></div>
        </div>
        <div className="author-info">
          <h4>{name}</h4>
          <p>{position}</p>
        </div>
      </div>
      
      <div className="testimonial-decoration"></div>
    </div>
  );
};

export default TestimonialCard;