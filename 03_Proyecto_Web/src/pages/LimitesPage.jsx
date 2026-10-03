import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  Compass, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  HelpCircle, 
  GitBranch, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp,
  Sparkles
} from 'lucide-react';
import MathView from '../components/MathView';
import { 
  CONCEPT_INTRO, 
  LATERAL_LIMITS, 
  DIRECT_TENDENCIES, 
  ALGEBRAIC_PROPERTIES, 
  EPSILON_DELTA_DEFINITION 
} from '../content/limites';

export default function LimitesPage() {
  const [activeSide, setActiveSide] = useState('both'); // 'left', 'right', 'both'
  const [isEpsilonOpen, setIsEpsilonOpen] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState('concepto');

  const scrollToSub = (id) => {
    setActiveSubNav(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="limites-page">
      {/* Barra de Migas de Pan */}
      <div className="module-breadcrumb-bar">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          <span>Hub Principal</span>
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Módulo B · ¿Qué es un Límite?</span>
        <span className="module-badge-validated" style={{ background: 'var(--blue-100)', color: 'var(--blue-800)', borderColor: 'var(--blue-400)' }}>
          Fundamento Teórico Cátedra
        </span>
      </div>

      {/* Sub-navegador de secciones del Módulo B */}
      <div className="indeterminaciones-subnav">
        <button 
          className={`subnav-pill ${activeSubNav === 'concepto' ? 'active' : ''}`}
          onClick={() => scrollToSub('concepto')}
        >
          <BookOpen size={14} />
          <span>1. Noción y Aproximación</span>
        </button>
        <button 
          className={`subnav-pill ${activeSubNav === 'laterales' ? 'active' : ''}`}
          onClick={() => scrollToSub('laterales')}
        >
          <Compass size={14} />
          <span>2. Límites Laterales y Existencia</span>
        </button>
        <button 
          className={`subnav-pill ${activeSubNav === 'tendencias' ? 'active' : ''}`}
          onClick={() => scrollToSub('tendencias')}
        >
          <TrendingUp size={14} />
          <span>3. Tendencias Directas (k/0, k/∞)</span>
        </button>
        <button 
          className={`subnav-pill ${activeSubNav === 'propiedades' ? 'active' : ''}`}
          onClick={() => scrollToSub('propiedades')}
        >
          <Sparkles size={14} />
          <span>4. Propiedades Algebraicas</span>
        </button>
        <button 
          className={`subnav-pill ${activeSubNav === 'epsilon' ? 'active' : ''}`}
          onClick={() => scrollToSub('epsilon')}
        >
          <HelpCircle size={14} />
          <span>5. Definición Formal (ε - δ)</span>
        </button>
      </div>

      {/* SECCIÓN 1: NOCIÓN INTUITIVA DE LÍMITE */}
      <section id="concepto" className="section-container">
        <div className="section-header">
          <div className="section-stage-badge badge-blue">
            <span>Concepto Fundamental</span>
          </div>
          <h2 className="section-title">{CONCEPT_INTRO.title}</h2>
          <p className="section-desc">
            {CONCEPT_INTRO.description}
          </p>
        </div>

        <div className="concept-definition-card">
          <div className="concept-math-highlight">
            <MathView math={CONCEPT_INTRO.notation} block />
          </div>
          <p className="concept-meaning-text">
            {CONCEPT_INTRO.meaning}
          </p>
        </div>

        {/* Ejemplo Clave del Apunte: Función con Agujero */}
        <div className="interactive-example-card" style={{ marginTop: '2rem' }}>
          <div className="card-header-styled">
            <span className="stage-tag">Ejemplo de Cátedra (Apunte pág. 1-2)</span>
            <h3>{CONCEPT_INTRO.exampleKey.title}</h3>
          </div>

          <div className="example-formula-row">
            <div>
              <strong>Función:</strong>
              <MathView math={CONCEPT_INTRO.exampleKey.functionLatex} />
            </div>
            <div>
              <strong>Dominio:</strong>
              <MathView math={CONCEPT_INTRO.exampleKey.domainLatex} />
            </div>
            <div>
              <strong>Forma simplificada:</strong>
              <MathView math={CONCEPT_INTRO.exampleKey.simplifiedLatex} />
            </div>
          </div>

          <p style={{ margin: '1rem 0', color: 'var(--text-secondary)' }}>
            {CONCEPT_INTRO.exampleKey.explanation}
          </p>

          <div className="table-responsive-container">
            <table className="concept-values-table">
              <thead>
                <tr>
                  <th>Trayectoria</th>
                  <th>Valor de x (Variable)</th>
                  <th>Valor de f(x) (Imagen)</th>
                  <th>Observación pedagógica</th>
                </tr>
              </thead>
              <tbody>
                {CONCEPT_INTRO.exampleKey.tableData.map((row, idx) => {
                  const isPunto = row.x === '1,0';
                  return (
                    <tr key={idx} className={isPunto ? 'row-excluded-point' : ''}>
                      <td><strong>{row.side}</strong></td>
                      <td><code>{row.x}</code></td>
                      <td><code>{row.fx}</code></td>
                      <td>
                        {isPunto ? (
                          <span className="text-danger-bold">¡1 no está en el dominio! No existe f(1).</span>
                        ) : (
                          <span className="text-approach">Las imágenes se acercan a 2</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Esquema SVG Ligero del Comportamiento */}
          <div className="svg-scheme-card">
            <div className="svg-scheme-title">
              <span>Representación Gráfica del Entorno (SVG Ligero)</span>
            </div>
            <div className="svg-container-box">
              <svg viewBox="0 0 500 240" className="concept-svg" preserveAspectRatio="xMidYMid meet">
                {/* Cuadrícula suave */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Ejes cartesianos */}
                <line x1="40" y1="200" x2="460" y2="200" stroke="#64748b" strokeWidth="1.5" />
                <line x1="120" y1="20" x2="120" y2="220" stroke="#64748b" strokeWidth="1.5" />
                <text x="465" y="205" fontSize="12" fill="#64748b">x</text>
                <text x="115" y="15" fontSize="12" fill="#64748b">y</text>

                {/* Marcas de ejes: x=1 (240px), y=2 (120px) */}
                <line x1="240" y1="195" x2="240" y2="205" stroke="#0f172a" strokeWidth="1.5" />
                <text x="235" y="218" fontSize="12" fontWeight="600" fill="#0f172a">x₀ = 1</text>

                <line x1="115" y1="120" x2="125" y2="120" stroke="#0f172a" strokeWidth="1.5" />
                <text x="80" y="125" fontSize="12" fontWeight="600" fill="#0f172a">L = 2</text>

                {/* Recta y = x + 1 (pasa por x=0, y=1 -> (120, 160) y x=2, y=3 -> (360, 80)) */}
                <line x1="60" y1="180" x2="420" y2="60" stroke="#2563eb" strokeWidth="3" />

                {/* Líneas guía punteadas */}
                <line x1="240" y1="200" x2="240" y2="120" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="120" y1="120" x2="240" y2="120" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" />

                {/* Punto vacío en (1, 2) -> (240, 120) */}
                <circle cx="240" cy="120" r="6" fill="#ffffff" stroke="#dc2626" strokeWidth="2.5" />
                <text x="255" y="115" fontSize="11" fill="#dc2626" fontWeight="bold">Punto no definido (1, 2)</text>

                {/* Flechas de aproximación lateral */}
                <path d="M 180 200 L 225 200" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="175" y="190" fontSize="10" fill="#059669" fontWeight="bold">x → 1⁻</text>

                <path d="M 300 200 L 255 200" stroke="#059669" strokeWidth="2" />
                <text x="275" y="190" fontSize="10" fill="#059669" fontWeight="bold">x → 1⁺</text>
              </svg>
            </div>
            <div className="svg-caption">
              <strong>Conclusión fundamental:</strong> El límite describe el valor al que se acercan las imágenes (<MathView math="L = 2" />), independientemente de que <MathView math="f(1)" /> exista o no.
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: LÍMITES LATERALES Y EXISTENCIA */}
      <section id="laterales" className="section-container">
        <div className="section-header">
          <div className="section-stage-badge badge-green">
            <span>Condición Necesaria y Suficiente</span>
          </div>
          <h2 className="section-title">{LATERAL_LIMITS.title}</h2>
          <p className="section-desc">
            Para que un límite exista en un punto, no alcanza con acercarse por un solo lado: el comportamiento por izquierda y por derecha debe ser idéntico.
          </p>
        </div>

        {/* Definición de laterales */}
        <div className="laterals-grid">
          {LATERAL_LIMITS.definitions.map((lat, idx) => (
            <div key={idx} className="lateral-box">
              <span className="lateral-badge">{lat.name}</span>
              <div className="lateral-math">
                <MathView math={lat.symbol} block />
              </div>
              <p>{lat.desc}</p>
            </div>
          ))}
        </div>

        {/* Teorema de Existencia */}
        <div className="theorem-card">
          <h4>{LATERAL_LIMITS.existenceTheorem.title}</h4>
          <div className="theorem-math">
            <MathView math={LATERAL_LIMITS.existenceTheorem.formula} block />
          </div>
          <ul className="theorem-rules-list">
            {LATERAL_LIMITS.existenceTheorem.rules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>

        {/* Ejemplos de Comparación del Apunte */}
        <div className="laterals-comparison-wrapper">
          <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Casos de Cátedra: Funciones por tramos evaluadas en x = 2
          </h4>

          <div className="comparison-cards-grid">
            {LATERAL_LIMITS.examples.map((ex) => (
              <div key={ex.id} className={`lateral-case-card ${ex.exists ? 'case-exists' : 'case-not-exists'}`}>
                <div className="case-header">
                  {ex.exists ? (
                    <CheckCircle size={18} style={{ color: 'var(--green-600)' }} />
                  ) : (
                    <XCircle size={18} style={{ color: 'var(--red-600)' }} />
                  )}
                  <h5>{ex.title}</h5>
                </div>

                <div className="case-formula">
                  <MathView math={ex.functionDef} block />
                </div>

                <div className="case-results-row">
                  <div className="case-limit-item">
                    <span>Izquierda (x → 2⁻):</span>
                    <MathView math={ex.leftLimit} />
                  </div>
                  <div className="case-limit-item">
                    <span>Derecha (x → 2⁺):</span>
                    <MathView math={ex.rightLimit} />
                  </div>
                </div>

                <div className="case-conclusion-box">
                  <strong>Diagnóstico:</strong>
                  <p><MathView math={ex.conclusion} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: TENDENCIAS DIRECTAS (k/0 y k/∞) */}
      <section id="tendencias" className="section-container">
        <div className="section-header">
          <div className="section-stage-badge badge-amber">
            <span>Álgebra de Tendencias</span>
          </div>
          <h2 className="section-title">{DIRECT_TENDENCIES.title}</h2>
          <p className="section-desc">
            {DIRECT_TENDENCIES.intro}
          </p>
        </div>

        <div className="tendencies-tables-grid">
          {DIRECT_TENDENCIES.categories.map((cat, idx) => (
            <div key={idx} className="tendency-category-card">
              <h4>{cat.title}</h4>
              <div className="tendency-items-list">
                {cat.items.map((it, i) => (
                  <div key={i} className="tendency-item-row">
                    <div className="tendency-formula">
                      <MathView math={it.tendency} />
                    </div>
                    <div className="tendency-info">
                      {it.note && <span className="tendency-note">{it.note}</span>}
                      {it.status && <strong className="tendency-status">{it.status}</strong>}
                      {it.action && <span className="tendency-action">➔ Artificio: {it.action}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ejemplo Especial Exponencial del Apunte */}
        <div className="special-exponential-card">
          <div className="exponential-header">
            <span className="section-stage-badge badge-purple">Atención Cátedra</span>
            <h4>{DIRECT_TENDENCIES.specialExponentialExample.title}</h4>
          </div>
          <div className="exponential-math">
            <MathView math={DIRECT_TENDENCIES.specialExponentialExample.latex} block />
          </div>
          <div className="exponential-steps">
            {DIRECT_TENDENCIES.specialExponentialExample.steps.map((st, i) => (
              <p key={i}>{st}</p>
            ))}
          </div>
        </div>

        {/* Puente suave a Módulo de Asíntotas */}
        <div className="soft-bridge-callout bridge-amber" style={{ marginTop: '2rem' }}>
          <div className="bridge-icon">
            <TrendingUp size={22} style={{ color: 'var(--amber-600)' }} />
          </div>
          <div className="bridge-content">
            <strong>¿La tendencia directa dio infinito (<MathView math="k / 0 \to \infty" />) o evaluaste al infinito (<MathView math="x \to \pm\infty" />)?</strong>
            <p>
              Estos comportamientos son exactamente la definición analítica de <strong>Asíntotas Verticales (AV)</strong> y <strong>Asíntotas Horizontales (AH)</strong>.
            </p>
            <Link to="/asintotas" className="bridge-link">
              Ir al Módulo de Asíntotas para aprender a calcular AV, AH y AO paso a paso →
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: PROPIEDADES ALGEBRAICAS */}
      <section id="propiedades" className="section-container">
        <div className="section-header">
          <div className="section-stage-badge badge-blue">
            <span>Operaciones con Límites</span>
          </div>
          <h2 className="section-title">{ALGEBRAIC_PROPERTIES.title}</h2>
          <p className="section-desc">
            {ALGEBRAIC_PROPERTIES.intro}
          </p>
        </div>

        {/* Grilla de las 8 propiedades del Apunte */}
        <div className="properties-grid">
          {ALGEBRAIC_PROPERTIES.properties.map((prop) => (
            <div key={prop.num} className={`property-card ${prop.critical ? 'property-card-critical' : ''}`}>
              <div className="property-num">{prop.num}</div>
              <div className="property-body">
                <h6>{prop.name}</h6>
                <div className="property-math">
                  <MathView math={prop.math} />
                </div>
                {prop.critical && (
                  <span className="property-warning-tag">¡Condición clave: denominador ≠ 0!</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Ejemplo Resuelto de Aplicación Directa de Propiedades */}
        <div className="property-example-box">
          <h5>{ALGEBRAIC_PROPERTIES.apunteExample.title}</h5>
          <MathView math={ALGEBRAIC_PROPERTIES.apunteExample.statement} block />
          <MathView math={ALGEBRAIC_PROPERTIES.apunteExample.development} block />
          <div className="example-result-pill">
            <span>Resultado: <strong>{ALGEBRAIC_PROPERTIES.apunteExample.result}</strong></span>
          </div>
        </div>

        {/* CALLOUT OBLIGATORIO: 0/0 Y ∞/∞ NO SE RESUELVEN CON PROPIEDADES */}
        <div className="critical-warning-box">
          <div className="warning-box-header">
            <AlertTriangle size={24} style={{ color: 'var(--red-600)' }} />
            <h4>¡CUIDADO CRÍTICO! Las propiedades algebraicas NO salvan indeterminaciones</h4>
          </div>
          <ul className="warning-points-list">
            {ALGEBRAIC_PROPERTIES.restrictionAlert.points.map((pt, idx) => (
              <li key={idx}>{pt}</li>
            ))}
          </ul>
          <div className="warning-action-row">
            <Link to="/indeterminaciones" className="btn btn-primary">
              <GitBranch size={16} />
              <span>Sustituí y obtuve 0/0 o ∞/∞ ➔ Salvar en Módulo de Indeterminaciones</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: DEFINICIÓN FORMAL (ÉPSILON - DELTA) COLAPSADA */}
      <section id="epsilon" className="section-container">
        <div className="section-header">
          <div className="section-stage-badge badge-purple">
            <span>Formalismo Matemático</span>
          </div>
          <h2 className="section-title">Definición Formal de Límite (Opcional Avanzado)</h2>
          <p className="section-desc">
            En Análisis Matemático I, la intuición de aproximación se sustenta en la definición rigurosa basada en entornos de radio ε y δ.
          </p>
        </div>

        <div className="accordion-card">
          <button 
            className="accordion-toggle-btn"
            onClick={() => setIsEpsilonOpen(!isEpsilonOpen)}
            aria-expanded={isEpsilonOpen}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <HelpCircle size={18} style={{ color: 'var(--purple-600)' }} />
              <span style={{ fontWeight: 700 }}>
                {isEpsilonOpen ? 'Ocultar Definición Rigurosa (ε - δ)' : 'Consultar Definición Rigurosa de Cátedra (ε - δ)'}
              </span>
            </div>
            {isEpsilonOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {isEpsilonOpen && (
            <div className="accordion-content-drawer">
              <div className="epsilon-math-box">
                <MathView math={EPSILON_DELTA_DEFINITION.formula} block />
              </div>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {EPSILON_DELTA_DEFINITION.text}
              </p>
              <div className="epsilon-note-box">
                <small>{EPSILON_DELTA_DEFINITION.note}</small>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Navegación al pie de página del Módulo */}
      <div className="module-footer-nav">
        <Link to="/" className="btn btn-secondary">
          ← Volver al Hub
        </Link>
        <Link to="/indeterminaciones" className="btn btn-primary">
          Avanzar al Módulo C (Indeterminaciones) →
        </Link>
      </div>
    </div>
  );
}
