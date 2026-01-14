import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav style={{
      background: 'linear-gradient(135deg, #FFF2DF 0%, #3E2522 50%)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '1rem 0',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1000
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo avec image et nom de société */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            gap: '15px'
          }}>
            <img 
              src="./logo.png" 
              alt="Logo" 
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '3px solid white',
                objectFit: 'cover',
                transition: 'transform 0.3s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.1) rotate(5deg)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                color: 'white',
                fontSize: '22px',
                fontWeight: 'bold',
                letterSpacing: '0.5px',
                lineHeight: '1.2'
              }}>
                DouniaShop
              </span>
              <span style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '12px',
                fontWeight: '400'
              }}>
                
              </span>
            </div>
          </Link>

          {/* Menu de navigation */}
          <div>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: '5px',
              alignItems: 'center'
            }}>
              <li>
                <Link 
                  to="/" 
                  className="nav-link"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    fontWeight: '500',
                    fontSize: '16px',
                    display: 'inline-block'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/produits" 
                  className="nav-link"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    fontWeight: '500',
                    fontSize: '16px',
                    display: 'inline-block'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Produits
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="nav-link"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    fontWeight: '500',
                    fontSize: '16px',
                    display: 'inline-block'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard" 
                  style={{
                    color: '#D3A376',
                    backgroundColor: 'white',
                    textDecoration: 'none',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    fontWeight: '600',
                    fontSize: '16px',
                    display: 'inline-block',
                    marginLeft: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.25)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                  }}
                >
                  Connexion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Espaceur pour éviter que le contenu passe sous le header fixe */}
      <style>{`
        body {
          padding-top: 80px;
        }
        
        @media (max-width: 768px) {
          nav ul {
            flex-direction: column;
            gap: 10px !important;
          }
          
          body {
            padding-top: 100px;
          }
        }
      `}</style>
    </nav>
  );
}

export default Menu;