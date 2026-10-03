import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, ExternalLink, GraduationCap, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="module-placeholder-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          <span>Volver al Hub Principal</span>
        </Link>
      </div>

      <div className="about-card">
        <div className="about-header">
          <div className="brand-badge-hub">UP&nbsp;·&nbsp;CÁLCULO</div>
          <h1 className="about-title">Acerca de la Plataforma de Análisis&nbsp;Matemático&nbsp;I</h1>
          <p className="placeholder-subtitle">
            Universidad de&nbsp;Palermo · Cátedra de Análisis&nbsp;Matemático&nbsp;I
          </p>
        </div>

        {/* Sección Créditos solicitada */}
        <div className="about-section">
          <h3>
            <User size={18} style={{ color: 'var(--blue-600)' }} />
            <span>Créditos</span>
          </h3>
          <div className="author-card">
            <h4 className="author-name">Bruno Calón</h4>
            <p className="author-role">
              Estudiante de Ingeniería en Inteligencia Artificial · Universidad de&nbsp;Palermo
            </p>
            <p className="author-desc">
              Diseño, desarrollo y curaduría de la plataforma interactiva de Análisis&nbsp;Matemático&nbsp;I.
            </p>
            <a
              href="https://www.linkedin.com/in/brunocalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="author-linkedin-link"
            >
              <span>Perfil en LinkedIn</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Mención a la cátedra y apuntes oficiales */}
        <div className="about-section">
          <h3>
            <GraduationCap size={18} style={{ color: 'var(--green-600)' }} />
            <span>Cátedra y Apuntes Oficiales</span>
          </h3>
          <p>
            El contenido académico de esta plataforma está alineado rigurosamente con los apuntes oficiales y lineamientos pedagógicos de la cátedra de <strong>Análisis&nbsp;Matemático&nbsp;I</strong> de la <strong>Universidad de&nbsp;Palermo</strong>.
          </p>
          <ul className="about-list">
            <li>
              <strong>Enfoque pre-derivadas:</strong> Se resuelven límites indeterminados y asíntotas exclusivamente mediante métodos algebraicos y analíticos rigurosos, respetando el alcance temático del curso.
            </li>
            <li>
              <strong>Metodología de cátedra:</strong> Se utiliza la notación, criterios de existencia, teoremas y ejercicios canónicos dictados en clase.
            </li>
            <li>
              <strong>Lógica determinística:</strong> El asistente y los árboles de resolución siguen reglas formales verificables sin aproximaciones heurísticas ni alucinaciones.
            </li>
          </ul>
        </div>

        <div className="about-actions">
          <Link to="/" className="btn btn-primary">
            ← Regresar al Hub Principal
          </Link>
        </div>
      </div>
    </div>
  );
}
