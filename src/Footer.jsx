import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #FFF2DF 0%, #3E2522 50%)',
      color: 'white',
      padding: '3rem 0 1rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        {/* Section principale */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1rem'
            }}>
              <img 
                src="./src/logo.png" 
                alt="Logo" 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid white'
                }}
              />
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>
                MD
              </h3>
            </div>
            <p style={{
              opacity: 0.9,
              lineHeight: '1.6',
              fontSize: '14px'
            }}>
              Votre partenaire de confiance pour des solutions innovantes et créatives.
            </p>
          </div>

          <div>
            <h4 style={{
              marginBottom: '1rem',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Liens Rapides
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/" 
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    fontSize: '14px',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.opacity = '1';
                    e.target.style.paddingLeft = '5px';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.opacity = '0.9';
                    e.target.style.paddingLeft = '0';
                  }}
                >
                  → Accueil
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/contact" 
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    fontSize: '14px',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.opacity = '1';
                    e.target.style.paddingLeft = '5px';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.opacity = '0.9';
                    e.target.style.paddingLeft = '0';
                  }}
                >
                  → Contact
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/dashboard" 
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    fontSize: '14px',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.opacity = '1';
                    e.target.style.paddingLeft = '5px';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.opacity = '0.9';
                    e.target.style.paddingLeft = '0';
                  }}
                >
                  → Dashboard
                </Link>
              </li>
            </ul>
          </div>

      
          <div>
            <h4 style={{
              marginBottom: '1rem',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Contact
            </h4>
            <div style={{
              fontSize: '14px',
              opacity: 0.9,
              lineHeight: '1.8'
            }}>
              <p style={{ margin: '0.5rem 0' }}>
                📧 contact@dounia.com
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                📱 +212 6XX XXX XXX
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                📍 Marrakech, Maroc
              </p>
            </div>
          </div>

          <div>
            <h4 style={{
              marginBottom: '1rem',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Suivez-nous
            </h4>
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
             
            
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '1.5rem',
          marginTop: '2rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <p style={{
              margin: 0,
              fontSize: '14px',
              opacity: 0.8
            }}>
              © 2024 DOUNIA. Tous droits réservés.
            </p>
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              fontSize: '14px'
            }}>
              
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;