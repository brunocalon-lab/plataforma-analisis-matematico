import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, XCircle, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import MathView from './MathView';
import { COMMON_ERRORS } from '../content/indeterminaciones';

export default function CommonErrorsSection() {
  return (
    <section id="errores" className="section-container">
      <div className="section-header">
        <div className="section-stage-badge badge-red">
          <AlertTriangle size={12} />
          <span>Atención Crítica</span>
        </div>
        <h2 className="section-title">Errores Frecuentes y Trampas Conceptuales</h2>
        <p className="section-desc">
          En los exámenes y entregas universitarias, los errores más comunes no son de cálculo, sino de 
          <strong> interpretación algebraica y conceptual</strong>.
        </p>
      </div>

      <div className="errors-grid">
        {COMMON_ERRORS.map((err) => (
          <div key={err.id} className="error-card">
            <div>
              <h5>{err.title}</h5>
              <p>{err.description}</p>
            </div>

            <div className="comparison-box">
              <div className="comparison-row-bad">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--red-700)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  <XCircle size={13} />
                  <span>Mala Práctica / Error Frecuente</span>
                </div>
                <MathView math={err.badPractice} />
              </div>

              <div className="comparison-row-good">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--green-700)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  <CheckCircle2 size={13} />
                  <span>Procedimiento Correcto</span>
                </div>
                <MathView math={err.goodPractice} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conexiones pedagógicas suaves hacia otros módulos */}
      <div className="soft-bridges-container" style={{ marginTop: '2.5rem' }}>
        <div className="soft-bridge-card">
          <div className="bridge-card-header">
            <span className="bridge-badge badge-amber">Conexión con Módulo D</span>
            <h4>¿El límite en un punto dio infinito (<MathView math="k/0" />)?</h4>
          </div>
          <p>
            Si al tender a un valor finito el límite se dispara a <MathView math="\pm\infty" />, la recta vertical es una <strong>Asíntota Vertical (AV)</strong>.
          </p>
          <Link to="/asintotas" className="bridge-link-btn">
            <TrendingUp size={15} />
            <span>Consultar cálculo de Asíntotas →</span>
          </Link>
        </div>

        <div className="soft-bridge-card">
          <div className="bridge-card-header">
            <span className="bridge-badge badge-purple">Conexión con Módulo E</span>
            <h4>¿Tu función cambia de regla por tramos o tiene valores absolutos?</h4>
          </div>
          <p>
            En funciones definidas a trozos, los límites laterales en los puntos de unión deciden si el límite existe o si hay salto finito o infinito.
          </p>
          <Link to="/partidas" className="bridge-link-btn bridge-btn-purple">
            <Layers size={15} />
            <span>Consultar Funciones Partidas →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
