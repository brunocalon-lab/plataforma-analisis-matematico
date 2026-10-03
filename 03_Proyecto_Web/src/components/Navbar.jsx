import React from 'react';
import { Compass, BookOpen, GitBranch, AlertTriangle, Sparkles, Printer } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const navItems = [
    { id: 'sustitucion', label: '1. Sustitución', icon: Compass },
    { id: 'arbol', label: '2. Árbol de Decisiones', icon: GitBranch },
    { id: 'ejemplo', label: '3. Ejemplo Integrador', icon: BookOpen },
    { id: 'asistente', label: 'Asistente Diagnóstico', icon: Sparkles },
    { id: 'errores', label: 'Errores Clave', icon: AlertTriangle },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#sustitucion" className="navbar-brand" onClick={(e) => { e.preventDefault(); onNavigate('sustitucion'); }}>
          <div className="brand-badge">UP · CÁLCULO</div>
          <div className="brand-titles">
            <span className="brand-title">Guía de Límites Indeterminados</span>
            <span className="brand-subtitle">Análisis Matemático · Universidad de Palermo</span>
          </div>
        </a>

        <nav>
          <ul className="navbar-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => onNavigate(item.id)}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
            <li>
              <button
                className="nav-link nav-btn-highlight"
                onClick={() => window.print()}
                title="Imprimir o guardar como PDF"
              >
                <Printer size={15} />
                <span>Imprimir Guía</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
