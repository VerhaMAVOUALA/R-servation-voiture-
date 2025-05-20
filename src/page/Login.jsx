import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'L\'adresse email est requise';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Login form submitted:', formData);
        alert('Connexion réussie! Redirection vers le tableau de bord...');
      } catch (error) {
        console.error('Login error:', error);
        setErrors({ submit: 'Une erreur est survenue lors de la connexion' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-banner">
          <div className="banner-content">
            <h2>Bienvenue</h2>
            <p>Connectez-vous pour accéder à votre compte et gérer vos réservations</p>
            <div className="banner-illustration">
              <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                <path d="M100,200 Q250,50 400,200 T100,200" fill="#4f46e5" opacity="0.1"/>
                <path d="M80,220 Q250,70 420,220 T80,220" fill="#4f46e5" opacity="0.05"/>
                <circle cx="250" cy="180" r="80" fill="#4f46e5" opacity="0.1"/>
                <path d="M150,150 Q250,250 350,150" fill="none" stroke="#4f46e5" strokeWidth="2" opacity="0.5"/>
                <circle cx="250" cy="150" r="30" fill="#4f46e5" opacity="0.8"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <div className="auth-form-header">
              <h2>Connexion</h2>
              <p>Entrez vos identifiants pour continuer</p>
            </div>
            
            <form className="auth-form" onSubmit={handleSubmit}>
              {errors.submit && (
                <div className="form-error-message">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  <span>{errors.submit}</span>
                </div>
              )}
              
              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email">Adresse email</label>
                <div className="input-with-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemple@email.com"
                  />
                </div>
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              
              <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
                <label htmlFor="password">Mot de passe</label>
                <div className="input-with-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>
              
              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="rememberMe">Se souvenir de moi</label>
                </div>
                <Link to="/forgot-password" className="forgot-password">Mot de passe oublié ?</Link>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary auth-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="spinner" viewBox="0 0 50 50">
                      <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                    </svg>
                    <span>Connexion...</span>
                  </>
                ) : 'Se connecter'}
              </button>
              
              <div className="auth-divider">
                <span>ou</span>
              </div>
              
              <div className="social-auth">
                <button type="button" className="btn-social btn-google">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814C17.503 2.988 15.139 2 12.545 2 7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" fill="#FFF"/>
                  </svg>
                  <span>Continuer avec Google</span>
                </button>
                
                <button type="button" className="btn-social btn-facebook">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" fill="#FFF"/>
                  </svg>
                  <span>Continuer avec Facebook</span>
                </button>
              </div>
            </form>
            
            <div className="auth-footer">
              <p>Vous n'avez pas de compte ? <Link to="/register" className="auth-link">S'inscrire</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;