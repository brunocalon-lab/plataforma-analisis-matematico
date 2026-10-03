import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle2, BookOpen } from 'lucide-react';
import MathView from '../components/MathView';

const MODULE_DATA = {
  '/recorrido': {
    code: 'A',
    name: 'Recorrido Guiado',
    subtitle: 'Ruta de aprendizaje paso a paso desde cero',
    color: 'blue',
    math: '\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4',
    scope: 'Conectará conceptualmente los módulos B → C → D → E con barra de progreso y navegación guiada.',
    nextPhase: 'Fase 5 (Orquestación final)'
  },
  '/limites': {
    code: 'B',
    name: '¿Qué es un Límite?',
    subtitle: 'Concepto intuitivo, aproximación gráfica, laterales y propiedades',
    color: 'blue',
    math: '\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L',
    scope: 'Teoría rigurosa de aproximación, esquemas SVG de laterales, tabla de tendencias directas y propiedades algebraicas.',
    nextPhase: 'Fase 3'
  },
  '/indeterminaciones': {
    code: 'C',
    name: 'Guía de Indeterminaciones',
    subtitle: 'Árbol determinístico de decisión y estrategias algebraicas (V1)',
    color: 'green',
    math: '\\left[\\frac{0}{0}\\right], \\quad \\left[\\frac{\\infty}{\\infty}\\right], \\quad [\\infty - \\infty], \\quad [1^\\infty]',
    scope: 'La V1.0 completa (comparador, árbol de 11 estrategias, stepper interactivo, asistente y errores frecuentes) se integrará aquí en Fase 2.',
    nextPhase: 'Fase 2 (Migración 1:1 de la V1)'
  },
  '/asintotas': {
    code: 'D',
    name: 'Asíntotas',
    subtitle: 'Asíntotas verticales, horizontales y oblicuas paso a paso',
    color: 'amber',
    math: 'm = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}, \\quad b = \\lim_{x \\to \\pm\\infty} [f(x) - mx]',
    scope: 'Checklist metódico de análisis: dominio, candidatos AV por laterales, horizontales al infinito y oblicuas con verificación estricta.',
    nextPhase: 'Fase 4'
  },
  '/partidas': {
    code: 'E',
    name: 'Funciones Partidas',
    subtitle: 'Estudio de límites y comportamiento asintótico por tramos',
    color: 'purple',
    math: 'f(x) = \\begin{cases} f_1(x) & \\text{si } x < c_1 \\\\ f_2(x) & \\text{si } c_1 \\le x < c_2 \\\\ f_3(x) & \\text{si } x \\ge c_2 \\end{cases}',
    scope: 'Protocolo de 5 pasos para funciones de 3 o más tramos, estudio de puntos de cambio de definición y comportamientos asintóticos.',
    nextPhase: 'Fase 4'
  }
};

export default function ModulePlaceholderPage() {
  const location = useLocation();
  const info = MODULE_DATA[location.pathname] || {
    code: '?',
    name: 'Módulo en Construcción',
    subtitle: 'Cátedra de Análisis Matemático I',
    color: 'blue',
    math: '\\lim_{x \\to a} f(x)',
    scope: 'Estructura inicializada.',
    nextPhase: 'Próxima fase'
  };

  return (
    <div className="module-placeholder-container">
      <div className="module-placeholder-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          <span>Volver al Hub Principal</span>
        </Link>
        <span className="module-status-chip">
          <Clock size={14} />
          <span>Estructurado para {info.nextPhase}</span>
        </span>
      </div>

      <div className={`module-placeholder-card border-${info.color}`}>
        <div className="placeholder-header">
          <span className="module-code-pill">Módulo {info.code}</span>
          <h2>{info.name}</h2>
          <p className="placeholder-subtitle">{info.subtitle}</p>
        </div>

        <div className="placeholder-katex-box">
          <div className="katex-box-header">
            <CheckCircle2 size={16} style={{ color: 'var(--green-600)' }} />
            <span>Validación de Motor Matemático (KaTeX Piloto):</span>
          </div>
          <MathView math={info.math} block={true} className="placeholder-formula" />
        </div>

        <div className="placeholder-scope-box">
          <div className="scope-title">
            <BookOpen size={16} style={{ color: 'var(--blue-600)' }} />
            <strong>Alcance planificado:</strong>
          </div>
          <p>{info.scope}</p>
        </div>

        <div className="placeholder-actions">
          <Link to="/" className="btn btn-secondary">
            ← Explorar otros módulos en el Hub
          </Link>
          <Link to="/acerca" className="btn btn-outline">
            Ver alcance general de la cátedra
          </Link>
        </div>
      </div>
    </div>
  );
}
