import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  TrendingUp, 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  GitBranch, 
  ChevronRight,
  ListOrdered
} from 'lucide-react';
import MathView from '../components/MathView';
import { 
  ASINTOTAS_INTRO, 
  VERTICAL_ASYMPTOTE, 
  HORIZONTAL_ASYMPTOTE, 
  OBLIQUE_ASYMPTOTE, 
  ASYMPTOTE_CHECKLIST, 
  INTEGRATIVE_ASYMPTOTE_EXAMPLE 
} from '../content/asintotas';

export default function AsintotasPage() {
  const [activeTab, setActiveTab] = useState('checklist');
  const [labStep, setLabStep] = useState(0);

  return (
    <div className="asintotas-page">
      {/* Barra de Migas de Pan */}
      <div className="module-breadcrumb-bar">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          <span>Hub Principal</span>
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Módulo D · Asíntotas</span>
        <span className="module-badge-validated badge-amber">
          Cálculo Analítico (AV, AH, AO)
        </span>
      </div>

      {/* Hero del Módulo D */}
      <div className="asintotas-hero">
        <div className="section-stage-badge badge-amber">
          <span>Comportamiento Asintótico</span>
        </div>
        <h1 className="section-title">Estudio Riguroso de Asíntotas</h1>
        <p className="section-desc">
          {ASINTOTAS_INTRO.definition} {ASINTOTAS_INTRO.utility}
        </p>
      </div>

      {/* Las Tres Grandes Ramas Asintóticas */}
      <section className="section-container">
        <div className="section-header">
          <div className="section-stage-badge badge-blue">
            <span>Clasificación Fundamental</span>
          </div>
          <h2 className="section-title">Las Tres Ramas Asintóticas de Cátedra</h2>
          <p className="section-desc">
            Estudio formal de rectas hacia las cuales la gráfica de la función se aproxima indefinidamente.
          </p>
        </div>

        <div className="asymptotes-types-grid">
          {/* AV */}
          <div className="asymptote-card border-amber">
            <div className="asymptote-card-header">
              <span className="type-badge badge-amber">Recta Vertical</span>
              <h3>{VERTICAL_ASYMPTOTE.title}</h3>
              <div className="asymptote-eq-pill">
                <MathView math={VERTICAL_ASYMPTOTE.equation} />
              </div>
            </div>
            <div className="asymptote-condition-box">
              <strong>Condición analítica:</strong>
              <div className="asymptote-condition-stack">
                <span className="condition-formula"><MathView math="\lim_{x \to a} f(x) = \pm\infty" /></span>
                <span className="condition-or-pill">o bien</span>
                <span className="condition-formula"><MathView math="\lim_{x \to a^+} f(x) = \pm\infty" /></span>
                <span className="condition-or-pill">o bien</span>
                <span className="condition-formula"><MathView math="\lim_{x \to a^-} f(x) = \pm\infty" /></span>
              </div>
              <p>{VERTICAL_ASYMPTOTE.criterio}</p>
            </div>
            <div className="asymptote-where-box">
              <h6>¿Dónde buscar candidatos?</h6>
              <ul>
                {VERTICAL_ASYMPTOTE.whereToLook.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
            <div className="asymptote-warning-mini">
              <AlertTriangle size={15} style={{ color: 'var(--red-600)', flexShrink: 0 }} />
              <span>{VERTICAL_ASYMPTOTE.criticalAlert}</span>
            </div>
          </div>

          {/* AH */}
          <div className="asymptote-card border-blue">
            <div className="asymptote-card-header">
              <span className="type-badge badge-blue">Recta Horizontal</span>
              <h3>{HORIZONTAL_ASYMPTOTE.title}</h3>
              <div className="asymptote-eq-pill">
                <MathView math={HORIZONTAL_ASYMPTOTE.equation} />
              </div>
            </div>
            <div className="asymptote-condition-box">
              <strong>Condición analítica:</strong>
              <div className="asymptote-condition-stack">
                <span className="condition-formula"><MathView math="b = \lim_{x \to +\infty} f(x)" /></span>
                <span className="condition-or-pill">y / o</span>
                <span className="condition-formula"><MathView math="b = \lim_{x \to -\infty} f(x)" /></span>
              </div>
              <p>{HORIZONTAL_ASYMPTOTE.criterio}</p>
            </div>
            <div className="asymptote-where-box">
              <h6>Propiedades de Cátedra:</h6>
              <ul>
                {HORIZONTAL_ASYMPTOTE.observations.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
            <div className="asymptote-example-mini">
              <strong>{HORIZONTAL_ASYMPTOTE.examples[0].title}:</strong>
              <p>Para <MathView math={HORIZONTAL_ASYMPTOTE.examples[0].functionLatex} />:</p>
              <MathView math={HORIZONTAL_ASYMPTOTE.examples[0].limitLeft} />
              <span className="text-success-bold">{HORIZONTAL_ASYMPTOTE.examples[0].conclusion}</span>
            </div>
          </div>

          {/* AO */}
          <div className="asymptote-card border-purple">
            <div className="asymptote-card-header">
              <span className="type-badge badge-purple">Recta Oblicua</span>
              <h3>{OBLIQUE_ASYMPTOTE.title}</h3>
              <div className="asymptote-eq-pill">
                <MathView math={OBLIQUE_ASYMPTOTE.equation} />
              </div>
            </div>
            <div className="asymptote-condition-box">
              <strong>Fórmulas de Pendiente y Ordenada:</strong>
              <MathView math={OBLIQUE_ASYMPTOTE.formulas.slopeA} block />
              <MathView math={OBLIQUE_ASYMPTOTE.formulas.interceptB} block />
              <p>{OBLIQUE_ASYMPTOTE.criterio}</p>
            </div>
            <div className="asymptote-where-box">
              <h6>Reglas de Cátedra:</h6>
              <ul>
                {OBLIQUE_ASYMPTOTE.observations.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST METÓDICO DE 5 PASOS */}
      <section className="section-container">
        <div className="section-header">
          <div className="section-stage-badge badge-blue">
            <ListOrdered size={14} />
            <span>Protocolo Sistemático de Resolución</span>
          </div>
          <h2 className="section-title">Checklist Metódico de Análisis Asintótico</h2>
          <p className="section-desc">
            Seguí este orden estricto de 5 pasos para resolver cualquier ejercicio de la cátedra sin saltear ramas ni caer en indeterminaciones inadvertidas.
          </p>
        </div>

        <div className="checklist-flow-container">
          {ASYMPTOTE_CHECKLIST.map((step) => (
            <div key={step.step} className="checklist-step-row">
              <div className="checklist-step-num">{step.step}</div>
              <div className="checklist-step-content">
                <h5>{step.name}</h5>
                <p>{step.action}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LABORATORIO INTEGRADOR DE CÁTEDRA */}
      <section className="section-container">
        <div className="section-header">
          <div className="section-stage-badge badge-green">
            <TrendingUp size={14} />
            <span>Laboratorio Paso a Paso</span>
          </div>
          <h2 className="section-title">{INTEGRATIVE_ASYMPTOTE_EXAMPLE.title}</h2>
          <p className="section-desc">
            Estudio asintótico completo de la función racional <MathView math={INTEGRATIVE_ASYMPTOTE_EXAMPLE.functionLatex} /> (<MathView math={INTEGRATIVE_ASYMPTOTE_EXAMPLE.domain} />).
          </p>
        </div>

        <div className="lab-stepper-card">
          {/* Navegación del Stepper */}
          <div className="stepper-nav-bar">
            {INTEGRATIVE_ASYMPTOTE_EXAMPLE.steps.map((st, idx) => (
              <button
                key={idx}
                className={`step-btn ${labStep === idx ? 'step-active' : ''}`}
                onClick={() => setLabStep(idx)}
              >
                <span>Paso {idx + 1}</span>
                <small>{st.badge}</small>
              </button>
            ))}
          </div>

          {/* Contenido del paso actual */}
          <div className="stepper-step-body">
            <div className="step-title-row">
              <span className="section-stage-badge badge-amber">{INTEGRATIVE_ASYMPTOTE_EXAMPLE.steps[labStep].badge}</span>
              <h3>{INTEGRATIVE_ASYMPTOTE_EXAMPLE.steps[labStep].title}</h3>
            </div>
            <p className="step-desc-text">{INTEGRATIVE_ASYMPTOTE_EXAMPLE.steps[labStep].desc}</p>
            
            <div className="step-math-box">
              <MathView math={INTEGRATIVE_ASYMPTOTE_EXAMPLE.steps[labStep].math} block />
              {INTEGRATIVE_ASYMPTOTE_EXAMPLE.steps[labStep].subMath && (
                <MathView math={INTEGRATIVE_ASYMPTOTE_EXAMPLE.steps[labStep].subMath} block />
              )}
            </div>

            {INTEGRATIVE_ASYMPTOTE_EXAMPLE.steps[labStep].conclusion && (
              <div className="step-conclusion-callout">
                <CheckCircle size={18} style={{ color: 'var(--green-600)' }} />
                <strong>{INTEGRATIVE_ASYMPTOTE_EXAMPLE.steps[labStep].conclusion}</strong>
              </div>
            )}

            <div className="stepper-control-buttons">
              <button
                className="btn btn-secondary"
                disabled={labStep === 0}
                onClick={() => setLabStep(labStep - 1)}
              >
                ← Anterior
              </button>
              <button
                className="btn btn-primary"
                disabled={labStep === INTEGRATIVE_ASYMPTOTE_EXAMPLE.steps.length - 1}
                onClick={() => setLabStep(labStep + 1)}
              >
                Siguiente Paso →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PUENTES SUAVES DE CONEXIÓN */}
      <div className="soft-bridges-container">
        <div className="soft-bridge-card">
          <div className="bridge-card-header">
            <span className="bridge-badge badge-blue">¿Apareció 0/0 en el candidato?</span>
            <h4>Salvar Indeterminación Previa</h4>
          </div>
          <p>
            Si tanto el numerador como el denominador se anulan en el candidato a AV, no afirmes que hay asíntota sin antes factorizar o simplificar.
          </p>
          <Link to="/indeterminaciones" className="bridge-link-btn bridge-btn-blue">
            <GitBranch size={15} />
            <span>Ir a Árbol de Indeterminaciones →</span>
          </Link>
        </div>

        <div className="soft-bridge-card">
          <div className="bridge-card-header">
            <span className="bridge-badge badge-purple">¿Tu función es partida?</span>
            <h4>Asíntotas en Funciones por Tramos</h4>
          </div>
          <p>
            En funciones por tramos, cada intervalo tiene su propia regla y los límites laterales en los puntos de unión pueden originar asíntotas verticales a un solo lado.
          </p>
          <Link to="/partidas" className="bridge-link-btn bridge-btn-purple">
            <Layers size={15} />
            <span>Ir al Módulo de Funciones Partidas →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
