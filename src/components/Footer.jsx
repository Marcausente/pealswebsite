const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
                        <p>© 2026 Pearl's. Todos los derechos reservados.</p>
                    </div>
                    <div className="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>
            </div>
            <style>{`
          .footer-section {
            padding: 3rem 0;
            background-color: #030508;
            border-top: 1px solid rgba(255,255,255,0.05);
            color: var(--color-text-muted);
            font-size: 0.9rem;
          }
          .footer-content {
             display: flex;
             justify-content: space-between;
             align-items: center;
          }
          .footer-logo {
             display: flex;
             align-items: center;
             gap: 1rem;
          }
          .social-links {
             display: flex;
             gap: 1.5rem;
          }
          .social-links a:hover {
             color: var(--color-accent);
          }
          
          @media(max-width: 600px) {
            .footer-content {
               flex-direction: column;
               gap: 1.5rem;
               text-align: center;
            }
          }
        `}</style>
        </footer>
    );
};

export default Footer;
