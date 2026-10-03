import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, GitBranch, TrendingUp, Layers, ArrowRight } from 'lucide-react';
import { getStoredProgress } from '../lib/progress';

export default function HubPage() {
  const [storedStep, setStoredStep] = useState(1);

  useEffect(() => {
    const prog = getStoredProgress();
    if (prog.recorridoStep && prog.recorridoStep > 1) {
      setStoredStep(prog.recorridoStep);
    }
  }, []);

  const items = [
    {
      title: 'Recorrido Guiado',
      subtitle: 'Ruta paso a paso desde cero',
      route: '/recorrido',
      icon: Compass,
      color: 'blue'
    },
    {
      title: '¿Qué es un Límite?',
      subtitle: 'Concepto intuitivo, laterales y propiedades algebraicas',
      route: '/limites',
      icon: BookOpen,
      color: 'blue'
    },
    {
      title: 'Indeterminaciones',
      subtitle: 'Estrategias algebraicas para salvar indeterminaciones',
      route: '/indeterminaciones',
      icon: GitBranch,
      color: 'green'
    },
    {
      title: 'Asíntotas',
      subtitle: 'Cálculo de verticales, horizontales y oblicuas',
      route: '/asintotas',
      icon: TrendingUp,
      color: 'amber'
    },
    {
      title: 'Funciones Partidas',
      subtitle: 'Límites y asíntotas en funciones por tramos',
      route: '/partidas',
      icon: Layers,
      color: 'purple'
    }
  ];

  return (
    <div className="hub-container">
      {/* Saludo corto arriba */}
      <section className="hub-hero">
        <h1 className="hub-title">Hola,&nbsp;bienvenido.</h1>
        <p className="hub-salute">
          Guía interactiva de estudio y resolución paso a paso para Análisis&nbsp;Matemático&nbsp;I.
        </p>

        {/* Banner breve de retomar si hay progreso guardado (1 línea) */}
        {storedStep > 1 && (
          <div className="hub-resume-line">
            <span>Tenés un recorrido en&nbsp;curso:</span>
            <Link to={`/recorrido/${storedStep}`} className="hub-resume-link">
              Retomar en Paso&nbsp;{storedStep}&nbsp;→
            </Link>
          </div>
        )}

        {/* Indicación mínima */}
        <div className="hub-prompt-row">
          <span className="hub-prompt-label">Elegí por dónde&nbsp;empezar</span>
          <span className="hub-prompt-divider">·</span>
          <Link to="/recorrido" className="hub-prompt-action">
            Ver el recorrido&nbsp;completo&nbsp;→
          </Link>
        </div>
      </section>

      {/* Las 5 opciones (y el recorrido) como tarjetas/botones cortas */}
      <section className="hub-short-grid">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.route}
              to={item.route}
              className={`hub-short-card hub-card-${item.color}`}
            >
              <div className="hub-short-icon-wrap">
                <Icon size={22} />
              </div>
              <div className="hub-short-content">
                <h2 className="hub-short-title">{item.title}</h2>
                <span className="hub-short-subtitle">{item.subtitle}</span>
              </div>
              <div className="hub-short-arrow">
                <ArrowRight size={18} />
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
