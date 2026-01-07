const Menu = () => {
  const dishes = [
    { id: 1, name: "Tartar de atún rojo", img: "/tartar.jpg", price: "$450" },
    { id: 2, name: "Langosta al Horno", img: "/langosta-al-horno.webp", price: "$520" },
    { id: 3, name: "Ostras Frescas", img: "/ostras.png", price: "$380" },
    { id: 4, name: "Salmón a la plancha", img: "/salmon.webp", price: "$320" },
    { id: 5, name: "Carpaccio de Gambas", img: "/Carpaccio.jpg", price: "$410" },
    { id: 6, name: "Sorbete de Limón", img: "/sorbete.jpg", price: "$200" },
  ];

  const drinks = [
    { id: 1, name: "eCola", price: "$120", desc: "Bebida refrescante" },
    { id: 2, name: "Agua", price: "$150", desc: "Agua mineral fresca" },
    { id: 3, name: "Vino Tinto Reserva", price: "$200", desc: "Bourgeoix 2018" },
  ];

  return (
    <section id="menu" className="section-padding menu-section">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-accent">Delicias Culinarias</h3>
          <h2>Nuestro Menú</h2>
        </div>

        <div className="menu-grid">
          {dishes.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="card-image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="card-content">
                <h4>{item.name}</h4>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="drinks-section mt-5">
          <h3 className="text-center mb-4 text-accent">Bebidas Exclusivas</h3>
          <div className="drinks-grid">
            {drinks.map((drink) => (
              <div key={drink.id} className="drink-card">
                <div className="drink-info">
                  <h4>{drink.name}</h4>
                  <p>{drink.desc}</p>
                </div>
                <span className="drink-price">{drink.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
          .mb-5 { margin-bottom: 3rem; }
          .mb-4 { margin-bottom: 2rem; }
          .mt-5 { margin-top: 5rem; }
  
          .menu-section {
            background-color: var(--color-surface);
          }
  
          .menu-grid {
             display: grid;
             grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
             gap: 2rem;
          }
  
          .menu-card {
            background: var(--color-bg);
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            border: 1px solid rgba(255,255,255,0.05);
          }
  
          .menu-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
            border-color: var(--color-accent);
          }
  
          .card-image {
            height: 250px;
            overflow: hidden;
          }
  
          .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
  
          .menu-card:hover .card-image img {
            transform: scale(1.1);
          }
  
          .card-content {
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
  
          .card-content h4 {
            font-size: 1.25rem;
            margin: 0;
            font-weight: 600;
          }
  
          .price {
            color: var(--color-accent);
            font-weight: 700;
            font-size: 1.2rem;
          }
  
          /* Drinks */
          .drinks-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            max-width: 1000px;
            margin: 0 auto;
          }
  
          .drink-card {
             display: flex;
             justify-content: space-between;
             align-items: center;
             padding: 1.5rem;
             background: rgba(255,255,255,0.03);
             border-radius: 10px;
             border-left: 2px solid var(--color-primary);
             transition: all 0.3s;
          }
  
          .drink-card:hover {
             background: rgba(255,255,255,0.06);
             border-left-color: var(--color-accent);
          }
  
          .drink-info h4 { margin: 0 0 0.25rem 0; font-size: 1.1rem; }
          .drink-info p { margin: 0; font-size: 0.9rem; color: var(--color-text-muted); }
          .drink-price { font-weight: 700; color: var(--color-accent); }
  
        `}</style>
    </section>
  );
};

export default Menu;
