// App.js
import React, { useState } from 'react';
import './App.css';

const aiData = [
  {
    title: 'Runway',
    icon: 'fas fa-video',
    tags: ['Video', 'Generativo'],
    features: [
      { icon: 'fas fa-cogs', name: 'Función', value: 'Creación de videos' },
      { icon: 'fas fa-coins', name: 'Tokens', value: '80 permanentes' },
      { icon: 'fas fa-calculator', name: 'Tokens por video', value: '40' },
      { icon: 'fas fa-magic', name: 'Coherencia', value: '★★★★☆' },
      { icon: 'fas fa-clock', name: 'Tiempo', value: '~2 minutos' },
    ],
    rating: 4,
    link: 'https://app.runwayml.com'
  },
  {
    title: 'Hailuo AI',
    icon: 'fas fa-video',
    tags: ['Video', 'Tokens Diarios'],
    features: [
      { icon: 'fas fa-cogs', name: 'Función', value: 'Creación de videos' },
      { icon: 'fas fa-coins', name: 'Tokens diarios', value: '100' },
      { icon: 'fas fa-calculator', name: 'Tokens por video', value: '30' },
      { icon: 'fas fa-magic', name: 'Coherencia', value: '★★★★☆' },
      { icon: 'fas fa-clock', name: 'Tiempo', value: '~10 minutos' },
    ],
    rating: 4,
    link: 'https://hailuoai.video/create'
  },
  {
    title: 'Grok',
    icon: 'fas fa-robot',
    tags: ['Chat', 'Imágenes', 'Popular'],
    features: [
      { icon: 'fas fa-cogs', name: 'Función', value: 'Chat & Imágenes' },
      { icon: 'fas fa-comment-dots', name: 'Mensajes', value: '1,440/día' },
      { icon: 'fas fa-hourglass-half', name: 'Espera', value: '30 minutos' },
      { icon: 'fas fa-magic', name: 'Coherencia', value: '★★★★★' },
      { icon: 'fas fa-bolt', name: 'Velocidad', value: 'Rápida' },
    ],
    rating: 5,
    link: 'https://x.ai'
  },
  {
    title: 'Llama 3.1',
    icon: 'fas fa-brain',
    tags: ['Chat', 'NVIDIA'],
    features: [
      { icon: 'fas fa-cogs', name: 'Función', value: 'Chat' },
      { icon: 'fas fa-magic', name: 'Coherencia', value: '★★★☆☆' },
      { icon: 'fas fa-comment-alt', name: 'Naturalidad', value: '★★★★★' },
      { icon: 'fas fa-eye', name: 'Realismo', value: '★★★★☆' },
    ],
    rating: 4,
    link: 'https://build.nvidia.com/nvidia/llama-3_1-nemotron-70b-instruct'
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <i className="fas fa-robot"></i>
              <span>AI Rank</span>
            </div>
            <nav>
              <button 
                className="hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <i className="fas fa-bars"></i>
              </button>
              <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="#"><i className="fas fa-home"></i> Inicio</a>
                <a href="#"><i className="fas fa-chart-bar"></i> Comparativas</a>
                <a href="#"><i className="fas fa-newspaper"></i> Noticias</a>
                <a href="#"><i className="fas fa-info-circle"></i> Acerca de</a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container">
        <div className="page-title">
          <h1>AI's Disponibles</h1>
          <p>Comparativa de las IAs más populares con análisis detallado</p>
        </div>

        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Buscar AI por nombre o característica..." />
        </div>

        <div className="filters">
          <button className="filter-btn active">
            <i className="fas fa-border-all"></i> Todos
          </button>
          <button className="filter-btn">
            <i className="fas fa-video"></i> Videos
          </button>
          <button className="filter-btn">
            <i className="fas fa-comment-alt"></i> Chat
          </button>
          <button className="filter-btn">
            <i className="fas fa-image"></i> Imágenes
          </button>
          <button className="filter-btn">
            <i className="fas fa-star"></i> Top Rated
          </button>
        </div>

        <div className="card-grid">
          {aiData.map((ai, index) => (
            <div key={index} className="card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-header">
                <h2>
                  <i className={ai.icon}></i> {ai.title}
                </h2>
              </div>
              <div className="card-body">
                <div className="tags">
                  {ai.tags.map((tag, idx) => (
                    <span key={idx} className="badge">{tag}</span>
                  ))}
                </div>
                {ai.features.map((feature, idx) => (
                  <div key={idx} className="card-feature">
                    <span className="feature-icon">
                      <i className={feature.icon}></i>
                    </span>
                    <div className="feature-content">
                      <div className="feature-name">{feature.name}</div>
                      <div>{feature.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="divider"></div>
              <div className="card-footer">
                <div>
                  <span className="rating-label">Calificación</span>
                  <span className="rating-large">
                    {'★'.repeat(ai.rating) + '☆'.repeat(5 - ai.rating)}
                  </span>
                </div>
                <a href={ai.link} target="_blank" className="btn btn-primary">
                  <i className="fas fa-external-link-alt"></i> Visitar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className="footer-title">AI Rank</h3>
              <p>Explora y compara las mejores IAs del mercado</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Enlaces Útiles</h3>
              <ul className="footer-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Comparativas</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Recursos</h3>
              <ul className="footer-links">
                <li><a href="#">Documentación</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Soporte</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 AI Rank. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
