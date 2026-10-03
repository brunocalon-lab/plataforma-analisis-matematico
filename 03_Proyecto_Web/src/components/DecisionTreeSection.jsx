import React, { useState } from 'react';
import { GitBranch, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import MathView from './MathView';
import { DECISION_TREE } from '../content/indeterminaciones';

export default function DecisionTreeSection({ selectedForm, onSelectForm }) {
  const currentTree = DECISION_TREE[selectedForm] || DECISION_TREE['0/0'];
  // Estado para controlar qué ejemplos de estrategias están expandidos
  const [expandedExamples, setExpandedExamples] = useState({
    'strat-factor-common': true, // primer ejemplo abierto por defecto
  });
  // Estado para colapsar/expandir ramas en mobile (acordeón)
  const [collapsedBranches, setCollapsedBranches] = useState({});

  const toggleExample = (stratId) => {
    setExpandedExamples(prev => ({
      ...prev,
      [stratId]: !prev[stratId]
    }));
  };

  const toggleBranch = (branchId) => {
    setCollapsedBranches(prev => ({
      ...prev,
      [branchId]: !prev[branchId]
    }));
  };

  return (
    <section id="arbol" className="section-container">
      <div className="section-header">
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <span className="section-stage-badge badge-green">Etapa 3 · Diagnóstico</span>
          <span className="section-stage-badge badge-amber">Etapa 4 · Elección de Estrategia</span>
        </div>
        <h2 className="section-title">Árbol de Decisiones y Estrategias de Resolución</h2>
        <p className="section-desc">
          Analizá la anatomía de la función. Seleccioná el tipo de indeterminación para explorar qué estrategias algebraicas pueden salvarla.
        </p>

        {/* Selector de Rama del Árbol */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
          {Object.keys(DECISION_TREE).map((key) => {
            const item = DECISION_TREE[key];
            const isCurrent = key === selectedForm;
            return (
              <button
                key={key}
                className={`btn ${isCurrent ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => onSelectForm(key)}
              >
                <GitBranch size={15} />
                <span>Rama <MathView math={item.latexForm} /></span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="tree-container">
        {/* Nodo Raíz del Diagnóstico */}
        <div className="tree-root-node">
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.85, marginBottom: '0.25rem' }}>
            Forma Seleccionada
          </div>
          <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>
            {currentTree.title} (<MathView math={currentTree.latexForm} />)
          </h3>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem', opacity: 0.9 }}>
            {currentTree.intro}
          </p>
          <div style={{ marginTop: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.12)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}>
            <HelpCircle size={15} />
            <span><strong>Pregunta Diagnóstica:</strong> {currentTree.diagnosticQuestion}</span>
          </div>
        </div>

        {/* Sub-ramas con sus Estrategias (con soporte de acordeón) */}
        <div className="tree-branches-wrapper">
          {currentTree.branches.map((branch) => {
            const isCollapsed = !!collapsedBranches[branch.id];
            return (
              <div key={branch.id} className="branch-card">
                <div 
                  className="branch-header branch-header-clickable"
                  onClick={() => toggleBranch(branch.id)}
                >
                  <div className="branch-title-group">
                    <h4>{branch.title}</h4>
                    <p>{branch.subtitle}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <div style={{ background: 'var(--bg-card)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                      <MathView math={branch.math} />
                    </div>
                    <span className="section-stage-badge badge-blue">{branch.badge}</span>
                    <button
                      type="button"
                      className="branch-accordion-btn"
                      aria-expanded={!isCollapsed}
                      aria-label={isCollapsed ? "Expandir rama" : "Colapsar rama"}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBranch(branch.id);
                      }}
                    >
                      {isCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                    </button>
                  </div>
                </div>

                {!isCollapsed && (
                  <div className="strategies-list">
                    {branch.strategies.map((strat) => {
                      const isExampleOpen = !!expandedExamples[strat.id];
                      return (
                        <div key={strat.id} className="strategy-item">
                          <div className="strategy-header">
                            <div className="strategy-title-wrap">
                              <h5>{strat.name}</h5>
                              <span>
                                {strat.subtitle.includes('\\') ? (
                                  <MathView math={strat.subtitle} />
                                ) : (
                                  strat.subtitle
                                )}
                              </span>
                            </div>
                          </div>

                          {/* Tríada Requerida: 1. ¿Cuándo es útil? y 2. ¿Cuál es la idea? */}
                          <div className="strategy-triad">
                            <div className="triad-box">
                              <h6>1. ¿Cuándo puede ser útil?</h6>
                              <p>{strat.whenToUse}</p>
                            </div>
                            <div className="triad-box">
                              <h6>2. ¿Cuál es la idea?</h6>
                              <p>{strat.idea}</p>
                            </div>
                          </div>

                          {/* Alerta de Cuidado contextual si existe */}
                          {strat.alert && (
                            <div className="strategy-alert-callout">
                              <strong>⚠️ Atención Crítica:</strong> {strat.alert}
                            </div>
                          )}

                          {/* 3. Ejemplo Breve (Desplegable) */}
                          {strat.example && (
                            <div>
                              <button
                                className="example-toggle-btn"
                                onClick={() => toggleExample(strat.id)}
                              >
                                <span>3. {isExampleOpen ? 'Ocultar' : 'Consultar'} Ejemplo Breve de Apunte</span>
                                {isExampleOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </button>

                              {isExampleOpen && (
                                <div className="example-drawer">
                                  <h6 style={{ fontSize: '0.9rem', color: 'var(--amber-800)', marginBottom: '0.5rem' }}>
                                    {strat.example.title}
                                  </h6>
                                  <div style={{ marginBottom: '0.75rem' }}>
                                    <MathView math={strat.example.initialLatex} block />
                                  </div>

                                  <div className="example-steps-list">
                                    {strat.example.steps.map((st) => (
                                      <div key={st.step} className="example-step-row">
                                        <span>{st.desc}</span>
                                        <MathView math={st.latex} block />
                                      </div>
                                    ))}
                                  </div>

                                  <div style={{ marginTop: '0.85rem', padding: '0.65rem 1rem', background: 'var(--green-50)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--green-100)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--green-800)' }}>
                                      Resultado comprobado del límite:
                                    </span>
                                    <MathView math={strat.example.finalResult} />
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
