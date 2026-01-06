const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    <span className="block text-accent">Sabores de Lujo</span>
                    en Los Santos
                </h1>
                <p className="hero-subtitle">
                    Una experiencia culinaria exclusiva donde la elegancia se encuentra con el sabor.
                </p>
                <div className="hero-actions">
                    <a href="#menu" className="btn btn-primary">Ver Menú</a>
                </div>
            </div>

            <style>{`
          .hero-section {
            height: 100vh;
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            /* Using a placeholder background or one of the provided images darkened heavily */
            background: url('/img2.png') center/cover no-repeat fixed; 
            /* img4 looks like it might be a good background based on size, if not we will swap */
          }
  
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(4, 74, 135, 0.85), rgba(0, 0, 0, 0.7));
          }
  
          .hero-content {
            position: relative;
            z-index: 2;
            text-align: left;
            padding-top: 80px; /* Offset for navbar */
          }
  
          .hero-title {
            font-size: 5rem;
            margin-bottom: 1.5rem;
            line-height: 1.1;
            text-transform: uppercase;
            letter-spacing: -2px;
          }
           
          .hero-title .block {
             display: block;
             font-size: 0.6em;
             letter-spacing: 4px;
             font-weight: 400;
             margin-bottom: 10px;
          }
  
          .hero-subtitle {
            font-size: 1.4rem;
            color: var(--color-text-muted);
            max-width: 600px;
            margin-bottom: 2.5rem;
          }
          
          @media (max-width: 768px) {
            .hero-title { font-size: 3rem; }
          }
        `}</style>
        </section>
    );
};

export default Hero;
