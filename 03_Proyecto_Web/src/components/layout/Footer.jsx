import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-simple">
      <div className="footer-simple-inner">
        <div className="footer-content-row">
          <img
            src="/logo-univ-palermo.png"
            alt="Universidad de Palermo"
            className="footer-univ-logo"
          />
          <p className="footer-simple-text">
            Desarrollado por{' '}
            <a
              href="https://www.linkedin.com/in/brunocalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-author-link"
            >
              Bruno Calón
            </a>{' '}
            · Estudiante de Ingeniería en Inteligencia Artificial · Universidad de&nbsp;Palermo
          </p>
        </div>
      </div>
    </footer>
  );
}
