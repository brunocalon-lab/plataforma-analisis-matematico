import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';
import MathView from './MathView';

export default function SubstitutionSection({ onProceedToIdentification }) {
  const [selectedCase, setSelectedCase] = useState('indeterminate'); // 'direct' or 'indeterminate'

  return (
    <section id="sustitucion" className="section-container">
      <div className="section-header">
        <div className="section-stage-badge badge-blue">
          <span>Etapa 1 · Punto de Partida</span>
        </div>
        <h2 className="section-title">¿Puedo calcular el límite por sustitución directa?</h2>
        <p className="section-desc">
          Todo cálculo de límites en Análisis Matemático comienza obligatoriamente por el mismo paso: 
          <strong> evaluar la función reemplazando la variable x por el valor al que tiende</strong>.
        </p>
      </div>

      <div className="substitution-comparator">
        {/* Caso Afirmativo: Cálculo Directo */}
        <div 
          className={`subst-card subst-card-success ${selectedCase === 'direct' ? 'selected' : ''}`}
          onClick={() => setSelectedCase('direct')}
          style={{ cursor: 'pointer' }}
        >
          <div className="subst-card-header">
            <div className="subst-icon">
              <CheckCircle size={18} />
            </div>
            <div>
              <h4 style={{ color: 'var(--green-800)', fontSize: '1.1rem' }}>Caso A: Da un valor numérico real</h4>
              <span style={{ fontSize: '0.825rem', color: 'var(--green-700)' }}>Cálculo Directo Inmediato</span>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Si al sustituir <MathView math="x = a" /> la función está definida y devuelve un número finito <MathView math="L \in \mathbb{R}" />, 
            <strong> no hay indeterminación</strong>. El límite queda calculado inmediatamente.
          </p>

          <div className="subst-formula-box">
            <MathView 
              math="\lim_{x \to 1} \frac{x^2 + 5}{x + 1} = \frac{1^2 + 5}{1 + 1} = \frac{6}{2} = 3" 
              block 
            />
            <small style={{ color: 'var(--text-muted)' }}>
              Resultado final: L = 3. ¡No apliques factorización ni artificios si no hay indeterminación!
            </small>
          </div>
        </div>

        {/* Caso Indeterminado */}
        <div 
          className={`subst-card subst-card-indeterminate ${selectedCase === 'indeterminate' ? 'selected' : ''}`}
          onClick={() => setSelectedCase('indeterminate')}
          style={{ cursor: 'pointer' }}
        >
          <div className="subst-card-header">
            <div className="subst-icon">
              <AlertTriangle size={18} />
            </div>
            <div>
              <h4 style={{ color: 'var(--red-800)', fontSize: '1.1rem' }}>Caso B: Aparece una indeterminación</h4>
              <span style={{ fontSize: '0.825rem', color: 'var(--red-700)' }}>Requiere Transformación Algebraica</span>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Si al evaluar obtenemos una forma no computable como <MathView math="\frac{0}{0}" />, <MathView math="\frac{\infty}{\infty}" /> o <MathView math="\infty - \infty" />, 
            <strong> la sustitución directa falló</strong> y debemos avanzar a la siguiente etapa de diagnóstico.
          </p>

          <div className="subst-formula-box">
            <MathView 
              math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2} \implies \frac{2^2 - 4}{2 - 2} = \frac{0}{0}" 
              block 
            />
            <small style={{ color: 'var(--red-600)', fontWeight: 600 }}>
              Forma indeterminada detectada. Debemos diagnosticar y elegir estrategia.
            </small>
          </div>
        </div>
      </div>

      {/* Puente pedagógico hacia Asíntotas cuando el denominador da 0 */}
      <div className="soft-bridge-callout bridge-amber">
        <div className="bridge-icon">
          <HelpCircle size={20} style={{ color: 'var(--amber-600)' }} />
        </div>
        <div className="bridge-content">
          <strong>¿Al evaluar obtuviste una constante no nula sobre cero (<MathView math="k / 0" /> con <MathView math="k \neq 0" />)?</strong>
          <p>
            No se trata de una indeterminación: indica una tendencia al infinito (<MathView math="\pm\infty" />) y
            sugiere la existencia de una <strong>Asíntota Vertical (AV)</strong>.
          </p>
          <Link to="/asintotas" className="bridge-link">
            Explorar cómo estudiar asíntotas verticales y límites laterales →
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button 
          className="btn btn-primary"
          onClick={onProceedToIdentification}
        >
          <span>Apareció una indeterminación ➔ Pasar a Identificación (Etapa 2)</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
