const Locations = () => {
  return (
    <section id="location" className="section-padding location-section">
      <div className="container">
        <div className="grid-layout">
          <div className="text-content">
            <h3 className="section-subtitle">Nuestra Ubicación</h3>
            <h2 className="section-title">Dónde Estamos</h2>
            <p>
              Situados en el corazón de Los Santos, ofrecemos un oasis de tranquilidad y lujo en medio del caos de la ciudad.
              Ven a visitarnos y disfruta de las mejores vistas y el mejor ambiente.
            </p>
            <ul className="info-list">
              <li>
                <strong>Dirección:</strong> 1234 Prosperity Street, Los Santos
              </li>
            </ul>
          </div>
          <div className="map-container">
            <img src="/map.png" alt="Mapa de ubicación" className="map-image" />
            <div className="map-glow"></div>
          </div>
        </div>
      </div>

      <style>{`
          .location-section {
            background-color: var(--color-surface);
            position: relative;
            overflow: hidden;
          }
          
          .location-section .grid-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          
          .map-container {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            border: 1px solid rgba(255,255,255,0.1);
          }
          
          .map-image {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
          }
          
          .map-container:hover .map-image {
            transform: scale(1.03);
          }
          
          .info-list {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .info-list li {
            padding-left: 1.5rem;
            border-left: 3px solid var(--color-accent);
          }
          
          @media (max-width: 900px) {
            .location-section .grid-layout {
                grid-template-columns: 1fr;
            }
          }
        `}</style>
    </section>
  );
};

export default Locations;
