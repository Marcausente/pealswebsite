import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo-container">
          <img src="/logo.png" alt="Pearls Logo" className="nav-logo" />
        </a>

        <div className="nav-links">
          <a href="#hero">Inicio</a>
          <a href="#about">Sobre Nosotros</a>
          <a href="#menu">Menú</a>
          <a href="#location">Dónde Estamos</a>
        </div>

        <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Reservar Ahora
        </a>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.4s ease;
          background: linear-gradient(to bottom, rgba(4, 74, 135, 0.4), transparent);
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(4, 74, 135, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          height: 60px;
          transition: height 0.3s;
        }
        
        .navbar.scrolled .nav-logo {
            height: 50px;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .nav-links a {
          color: #fff;
          font-weight: 500;
          position: relative;
          font-size: 1.1rem;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--color-accent);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }
        
        /* Mobile handling would go here with a hamburger menu if requested, keeping it simple for desktop-first premium feel as per quick turn around */
        @media (max-width: 768px) {
            .nav-links { display: none; } 
            /* To do: Implement hamburger for mobile if needed later */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
