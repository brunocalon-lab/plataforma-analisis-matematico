import React from 'react';
import { X, Layers, BookOpen, AlertCircle } from 'lucide-react';
import MathView from './MathView';
import { SECONDARY_FORMS } from '../data/limitsData';

export default function SecondaryFormsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.65)',
      backdropFilter: 'blur(6px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '860px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-xl)',
        padding: '2rem',
        position: 'relative'
      }}>
        {/* Botón de Cierre */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--bg-card-muted)',
            border: 'none',
            borderRadius: '50%',
            width: '2.2rem',
            height: '2.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-secondary)'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ marginBottom: '1.5rem' }}>
          <div className="section-stage-badge badge-purple" style={{ marginBottom: '0.5rem' }}>
            <Layers size={13} />
            <span>Formas Secundarias del Apunte</span>
          </div>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
            Otras Formas Indeterminadas: 1^∞, 0 · ∞, 0^0, ∞^0
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Estas formas se tratan mediante artificios específicos para reconducirlas a cocientes o límites exponenciales notables.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {SECONDARY_FORMS.map((sec) => (
            <div key={sec.id} className="secondary-card">
              <h4>{sec.name}</h4>
              <div style={{ margin: '0.5rem 0' }}>
                <MathView math={sec.latex} />
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                <strong>¿Cuándo aparece?</strong> {sec.when}
              </p>

              {sec.notableLimit && (
                <div style={{ background: 'var(--bg-main)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', margin: '0.75rem 0' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--purple-700)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Límite Notable Fundamental:
                  </div>
                  <MathView math={sec.notableLimit} block />
                </div>
              )}

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', margin: '0.75rem 0', whiteSpace: 'pre-line', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <strong>Método de Resolución:</strong>
                <br />
                {sec.method}
              </div>

              {sec.example && (
                <div style={{ marginTop: '0.75rem', background: 'var(--purple-50)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--purple-100)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--purple-700)', marginBottom: '0.4rem' }}>
                    <BookOpen size={14} />
                    <span>{sec.example.title}:</span>
                  </div>
                  <MathView math={sec.example.initial} block />
                  
                  <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                    {sec.example.steps.map((st, i) => (
                      <li key={i}>• {st}</li>
                    ))}
                  </ul>

                  <div style={{ marginTop: '0.65rem', fontWeight: 600, color: 'var(--purple-700)', fontSize: '0.9rem' }}>
                    Resultado comprobado: <MathView math={sec.example.result} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
          <button className="btn btn-primary" onClick={onClose}>
            Entendido, volver a la guía
          </button>
        </div>
      </div>
    </div>
  );
}
