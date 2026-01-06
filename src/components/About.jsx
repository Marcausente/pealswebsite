const About = () => {
    return (
        <section id="about" className="section-padding about-section">
            <div className="container">
                <div className="about-content text-center">
                    <h3 className="text-accent">Nuestra Historia</h3>
                    <h2>Sobre Nosotros</h2>
                    <div className="divider"></div>
                    <p className="lead">
                        Fundado con la pasión por la excelencia, somos más que un restaurante; somos un destino.
                        En cada plato y en cada copa, buscamos capturar la esencia de la alta cocina con un toque moderno y atrevido.
                    </p>
                    <p>
                        Nuestro equipo de chefs expertos utiliza solo los ingredientes más frescos para crear obras maestras culinarias que deleitan tanto a la vista como al paladar.
                        Ya sea para una cena romántica, una reunión de negocios o una celebración especial, garantizamos una experiencia inolvidable.
                    </p>
                </div>
            </div>

            <style>{`
          .about-section {
            background-color: var(--color-bg);
          }
  
          .about-content {
            max-width: 800px;
            margin: 0 auto;
          }
  
          .divider {
            width: 80px;
            height: 3px;
            background-color: var(--color-accent);
            margin: 1.5rem auto;
          }
  
          .lead {
            font-size: 1.25rem;
            color: #fff;
            margin-bottom: 1.5rem;
          }
        `}</style>
        </section>
    );
};

export default About;
