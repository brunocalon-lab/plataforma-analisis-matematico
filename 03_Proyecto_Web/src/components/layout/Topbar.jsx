import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Compass, BookOpen, GitBranch, TrendingUp, Layers, Info, Printer, Sun, Moon } from 'lucide-react';

export default function Topbar() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('am1.theme.v2') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('am1.theme.v2', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navItems = [
    { to: '/recorrido', label: 'Recorrido', icon: Compass },
    { to: '/limites', label: 'Límites', icon: BookOpen },
    { to: '/indeterminaciones', label: 'Indeterminaciones', icon: GitBranch },
    { to: '/asintotas', label: 'Asíntotas', icon: TrendingUp },
    { to: '/partidas', label: 'Partidas', icon: Layers },
    { to: '/acerca', label: 'Acerca', icon: Info },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" title="Ir al Hub Principal">
          <div className="brand-badge">UP&nbsp;·&nbsp;CÁLCULO</div>
          <div className="brand-titles">
            <span className="brand-title">Plataforma de Análisis&nbsp;Matemático&nbsp;I</span>
            <span className="brand-subtitle">Universidad de&nbsp;Palermo</span>
          </div>
        </Link>

        <nav>
          <ul className="navbar-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
            {/* Theme Toggle Button */}
            <li>
              <button
                type="button"
                className="nav-link theme-toggle-btn"
                onClick={toggleTheme}
                title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                aria-label="Alternar tema"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span className="theme-toggle-text">{theme === 'dark' ? 'Claro' : 'Oscuro'}</span>
              </button>
            </li>
            {/* Print Button */}
            <li>
              <button
                type="button"
                className="nav-link nav-btn-highlight"
                onClick={() => window.print()}
                title="Imprimir módulo o guardar PDF"
              >
                <Printer size={15} />
                <span>Imprimir</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
