import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Layers, 
  CheckCircle, 
  AlertTriangle, 
  HelpCircle, 
  GitBranch, 
  TrendingUp, 
  ArrowRight,
  BookOpen,
  ListOrdered,
  Eye
} from 'lucide-react';
import MathView from '../components/MathView';
import { 
  PARTIDAS_GOLDEN_RULES, 
  PIECEWISE_PROTOCOL, 
  PIECEWISE_WORKED_EXAMPLE, 
  THREE_PIECE_CASE 
} from '../content/partidas';

export default function PartidasPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCaseView, setSelectedCaseView] = useState('lab'); // 'lab' or '3tramos'

  return (
    <div className="partidas-page">
      {/* Barra de Migas de Pan */}
      <div className="module-breadcrumb-bar">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          <span>Hub Principal</span>
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Módulo E · Funciones Partidas</span>
        <span className="module-badge-validated badge-purple">
          Especial por Tramos
        </span>
      </div>

      {/* Hero del Módulo E */}
      <div className="partidas-hero">
        <div className="section-stage-badge badge-purple">
          <span>Análisis por Intervalos</span>
        </div>
        <h1 className="section-title">Límites y Asíntotas en Funciones Partidas</h1>
        <p className="section-desc">
          Guía metodológica operativa y rigurosa para estudiar funciones definidas a trozos con 2, 3 o más tramos, analizando límites laterales en puntos de empalme y comportamiento en ambos infinitos.
        </p>
      </div>

      {/* REGLAS DE ORO */}
      <section className="section-container">
        <div className="section-header">
          <div className="section-stage-badge badge-amber">
            <span>Fundamentos de Cátedra</span>
          </div>
          <h2 className="section-title">Las 5 Reglas de Oro para Funciones por Tramos</h2>
          <p className="section-desc">
            Evitá los errores más comunes de exámenes recordando qué tramo rige en cada aproximación.
          </p>
        </div>

        <div className="golden-rules-grid">
          {PARTIDAS_GOLDEN_RULES.map((rule) => (
            <div key={rule.num} className="golden-rule-card">
              <div className="golden-rule-num">{rule.num}</div>
              <div className="golden-rule-content">
                <h5>{rule.title}</h5>
                <p>{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROTOCOLO EN 5 PASOS */}
      <section className="section-container">
        <div className="section-header">
          <div className="section-stage-badge badge-blue">
            <ListOrdered size={14} />
            <span>Guía Metódica</span>
          </div>
          <h2 className="section-title">Protocolo Operativo de 5 Pasos</h2>
          <p className="section-desc">
            Estructura ordenada para resolver cualquier ejercicio de parcial sobre funciones por tramos.
          </p>
        </div>

        <div className="protocol-steps-list">
          {PIECEWISE_PROTOCOL.map((st) => (
            <div key={st.step} className="protocol-step-card">
              <div className="protocol-step-badge">Paso {st.step}</div>
              <div className="protocol-step-info">
                <h4>{st.name}</h4>
                <p>{st.action}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTOR DE LABORATORIO */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <button
          className={`btn ${selectedCaseView === 'lab' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setSelectedCaseView('lab')}
        >
          <Layers size={16} />
          <span>Laboratorio Oficial: Ejemplo 9 de Cátedra (Los 3 Tipos de Asíntotas)</span>
        </button>
        <button
          className={`btn ${selectedCaseView === '3tramos' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setSelectedCaseView('3tramos')}
        >
          <BookOpen size={16} />
          <span>Caso de 3 Tramos Canónico (2 Puntos de Corte)</span>
        </button>
      </div>

      {selectedCaseView === 'lab' ? (
        /* LABORATORIO INTEGRADOR DE CÁTEDRA (Ejemplo 9) */
        <section className="section-container">
          <div className="section-header">
            <div className="section-stage-badge badge-green">
              <span>Laboratorio de Cátedra</span>
            </div>
            <h2 className="section-title">{PIECEWISE_WORKED_EXAMPLE.title}</h2>
          </div>

          {/* Tarjeta Sticky con la Función Siempre Visible */}
          <div className="sticky-function-display">
            <div className="sticky-function-header">
              <Eye size={16} style={{ color: 'var(--purple-600)' }} />
              <strong>Función Activa en Estudio:</strong>
            </div>
            <MathView math={PIECEWISE_WORKED_EXAMPLE.functionDefinitionLatex} block />
          </div>

          <div className="lab-stepper-card" style={{ marginTop: '1.5rem' }}>
            {/* Navegación del Stepper */}
            <div className="stepper-nav-bar">
              {PIECEWISE_WORKED_EXAMPLE.sections.map((sec, idx) => (
                <button
                  key={idx}
                  className={`step-btn ${activeStep === idx ? 'step-active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <span>Paso {idx}</span>
                  <small>{sec.title.split(':')[1] || sec.title}</small>
                </button>
              ))}
            </div>

            {/* Cuerpo del paso actual */}
            <div className="stepper-step-body">
              <div className="step-title-row">
                <span className="section-stage-badge badge-purple">
                  Paso {activeStep} de {PIECEWISE_WORKED_EXAMPLE.sections.length - 1}
                </span>
                <h3>{PIECEWISE_WORKED_EXAMPLE.sections[activeStep].title}</h3>
              </div>
              <p className="step-desc-text">{PIECEWISE_WORKED_EXAMPLE.sections[activeStep].desc}</p>

              {PIECEWISE_WORKED_EXAMPLE.sections[activeStep].math && (
                <div className="step-math-box">
                  <MathView math={PIECEWISE_WORKED_EXAMPLE.sections[activeStep].math} block />
                </div>
              )}

              {PIECEWISE_WORKED_EXAMPLE.sections[activeStep].points && (
                <ul className="step-points-list">
                  {PIECEWISE_WORKED_EXAMPLE.sections[activeStep].points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              )}

              {PIECEWISE_WORKED_EXAMPLE.sections[activeStep].conclusion && (
                <div className="step-conclusion-callout">
                  <CheckCircle size={18} style={{ color: 'var(--green-600)', flexShrink: 0 }} />
                  <div>
                    <strong>Resultado del Paso:</strong>
                    <p><MathView math={PIECEWISE_WORKED_EXAMPLE.sections[activeStep].conclusion} /></p>
                  </div>
                </div>
              )}

              {PIECEWISE_WORKED_EXAMPLE.sections[activeStep].summaryTable && (
                <div className="table-responsive-container" style={{ marginTop: '1rem' }}>
                  <table className="concept-values-table">
                    <thead>
                      <tr>
                        <th>Tipo de Asíntota</th>
                        <th>Ecuación y Alcance Comprobado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PIECEWISE_WORKED_EXAMPLE.sections[activeStep].summaryTable.map((row, i) => (
                        <tr key={i}>
                          <td><strong>{row.elemento}</strong></td>
                          <td><code>{row.ecuacion}</code></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="stepper-control-buttons">
                <button
                  className="btn btn-secondary"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  ← Paso Anterior
                </button>
                <button
                  className="btn btn-primary"
                  disabled={activeStep === PIECEWISE_WORKED_EXAMPLE.sections.length - 1}
                  onClick={() => setActiveStep(activeStep + 1)}
                >
                  Siguiente Paso →
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* CASO DE 3 TRAMOS CANÓNICO */
        <section className="section-container">
          <div className="section-header">
            <div className="section-stage-badge badge-blue">
              <span>2 Puntos de Empalme</span>
            </div>
            <h2 className="section-title">{THREE_PIECE_CASE.title}</h2>
          </div>

          <div className="sticky-function-display">
            <div className="sticky-function-header">
              <Eye size={16} style={{ color: 'var(--blue-600)' }} />
              <strong>Función de 3 Tramos:</strong>
            </div>
            <MathView math={THREE_PIECE_CASE.latex} block />
          </div>

          <div className="three-piece-grid" style={{ marginTop: '1.5rem' }}>
            <div className="three-piece-card">
              <div className="corte-header">
                <span className="section-stage-badge badge-amber">Corte 1</span>
                <h4>{THREE_PIECE_CASE.corte1.point}</h4>
              </div>
              <div className="corte-limits">
                <p>Izquierda: <MathView math={THREE_PIECE_CASE.corte1.left} /></p>
                <p>Derecha: <MathView math={THREE_PIECE_CASE.corte1.right} /></p>
              </div>
              <p className="corte-diag">{THREE_PIECE_CASE.corte1.diag}</p>
            </div>

            <div className="three-piece-card">
              <div className="corte-header">
                <span className="section-stage-badge badge-green">Punto Interior</span>
                <h4>{THREE_PIECE_CASE.corte2.point}</h4>
              </div>
              <div className="corte-limits">
                <MathView math={THREE_PIECE_CASE.corte2.calc} block />
              </div>
              <p className="corte-diag">{THREE_PIECE_CASE.corte2.diag}</p>
            </div>

            <div className="three-piece-card">
              <div className="corte-header">
                <span className="section-stage-badge badge-amber">Corte 2</span>
                <h4>{THREE_PIECE_CASE.corte3.point}</h4>
              </div>
              <div className="corte-limits">
                <p>Izquierda: <MathView math={THREE_PIECE_CASE.corte3.left} /></p>
                <p>Derecha: <MathView math={THREE_PIECE_CASE.corte3.right} /></p>
              </div>
              <p className="corte-diag">{THREE_PIECE_CASE.corte3.diag}</p>
            </div>
          </div>
        </section>
      )}

      {/* PUENTES SUAVES */}
      <div className="soft-bridges-container">
        <div className="soft-bridge-card">
          <div className="bridge-card-header">
            <span className="bridge-badge badge-blue">¿Apareció 0/0 en algún tramo?</span>
            <h4>Salvar Indeterminación en la Rama</h4>
          </div>
          <p>
            Si en el punto de corte la sustitución del tramo arroja 0/0, aplicá factorización o conjugado antes de decidir si el límite existe.
          </p>
          <Link to="/indeterminaciones" className="bridge-link-btn bridge-btn-blue">
            <GitBranch size={15} />
            <span>Ver Métodos de Factorización (Módulo C) →</span>
          </Link>
        </div>

        <div className="soft-bridge-card">
          <div className="bridge-card-header">
            <span className="bridge-badge badge-amber">¿Querés repasar cómo calcular AO y AH?</span>
            <h4>Comportamiento Asintótico al Infinito</h4>
          </div>
          <p>
            Recordá que los infinitos solo se evalúan en el tramo izquierdo (-∞) y derecho (+∞). Repasá la búsqueda de asíntotas horizontales y oblicuas.
          </p>
          <Link to="/asintotas" className="bridge-link-btn">
            <TrendingUp size={15} />
            <span>Consultar Módulo de Asíntotas →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
