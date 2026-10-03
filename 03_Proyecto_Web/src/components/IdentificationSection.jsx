import React from 'react';
import { Layers, ArrowDown, ChevronRight, HelpCircle } from 'lucide-react';
import MathView from './MathView';
import { INDETERMINATE_FORMS } from '../data/limitsData';

export default function IdentificationSection({ 
  selectedForm, 
  onSelectForm, 
  onOpenSecondaryModal 
}) {
  const primaryForms = INDETERMINATE_FORMS.filter(f => f.category === 'principal');
  const secondaryForms = INDETERMINATE_FORMS.filter(f => f.category === 'secundaria');

  return (
    <section id="identificacion" className="section-container">
      <div className="section-header">
        <div className="section-stage-badge badge-blue">
          <span>Etapa 2 · Identificación</span>
        </div>
        <h2 className="section-title">Identificar la Forma Indeterminada</h2>
        <p className="section-desc">
          Seleccioná la forma obtenida al sustituir para desplegar su rama correspondiente en el árbol de decisiones.
        </p>
      </div>

      <div className="forms-grid">
        {primaryForms.map((form) => {
          const isSelected = selectedForm === form.id;
          return (
            <div
              key={form.id}
              className={`form-pill-card ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectForm(form.id)}
            >
              <span className="form-pill-badge badge-blue">Forma Principal</span>
              <div className="form-pill-math">
                <MathView math={form.id === 'inf-inf' ? '\\infty - \\infty' : form.id === '0/0' ? '\\frac{0}{0}' : '\\frac{\\infty}{\\infty}'} />
              </div>
              <div className="form-pill-name">{form.name}</div>
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', fontSize: '0.85rem', color: isSelected ? 'var(--blue-700)' : 'var(--text-muted)', fontWeight: 600 }}>
                <span>{isSelected ? 'Rama activa' : 'Explorar rama'}</span>
                <ChevronRight size={14} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Acceso a Formas Secundarias */}
      <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'var(--purple-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--purple-100)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h4 style={{ color: 'var(--purple-700)', fontSize: '1rem', marginBottom: '0.25rem' }}>
            ¿Obtuviste otra indeterminación? ({secondaryForms.map(f => f.label).join(', ')})
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Las formas secundarias (como <MathView math="1^\infty" /> y el número <MathView math="e" />) se abordan en una sección dedicada para mantener limpio el árbol principal.
          </p>
        </div>
        <button 
          className="btn btn-purple" 
          style={{ fontSize: '0.85rem' }}
          onClick={onOpenSecondaryModal}
        >
          <Layers size={15} />
          <span>Consultar Formas Secundarias</span>
        </button>
      </div>
    </section>
  );
}
