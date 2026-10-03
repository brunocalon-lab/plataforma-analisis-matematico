import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import MathView from './MathView';
import { INTEGRATIVE_EXAMPLE } from '../data/limitsData';

export default function IntegrativeExampleSection() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const totalSteps = INTEGRATIVE_EXAMPLE.steps.length;
  const currentStep = INTEGRATIVE_EXAMPLE.steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <section id="ejemplo" className="section-container">
      <div className="section-header">
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <span className="section-stage-badge badge-orange">Etapa 5 · Transformación</span>
          <span className="section-stage-badge badge-blue">Etapa 6 · Resultado</span>
        </div>
        <h2 className="section-title">Laboratorio Interactivo: Ejemplo Integrador Central</h2>
        <p className="section-desc">
          Recorré de manera interactiva la resolución canónica paso a paso del límite fundamental del trabajo:
        </p>
      </div>

      <div className="integrative-card">
        {/* Encabezado del Stepper con Datos Clave */}
        <div className="stepper-header">
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              Problema a Resolver
            </div>
            <div style={{ marginTop: '0.25rem', fontSize: '1.4rem' }}>
              <MathView math={INTEGRATIVE_EXAMPLE.limitLatex} />
            </div>
          </div>

          {/* Indicadores de Paso (1 a 6) */}
          <div className="stepper-indicators">
            {INTEGRATIVE_EXAMPLE.steps.map((step, idx) => {
              const isActive = idx === currentStepIndex;
              const isDone = idx < currentStepIndex;
              return (
                <button
                  key={idx}
                  className={`stepper-dot ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}`}
                  onClick={() => setCurrentStepIndex(idx)}
                  title={step.title}
                >
                  {isDone ? <CheckCircle2 size={15} /> : idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tarjeta del Paso Activo */}
        <div className="step-card-active">
          <div className="step-meta">
            <span className="step-stage-name">{currentStep.stage}</span>
            <span className={`section-stage-badge badge-${currentStep.badgeColor}`}>
              {currentStep.badge}
            </span>
          </div>

          <h3 className="step-main-title">{currentStep.title}</h3>
          <p className="step-desc">{currentStep.content}</p>

          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '1.5rem', border: '1px solid var(--border-medium)', margin: '1rem 0' }}>
            <MathView math={currentStep.math} block />
          </div>

          {currentStep.alert && (
            <div className="critical-alert-box" style={{ margin: '1rem 0 0', padding: '1rem' }}>
              <AlertCircle size={20} style={{ color: 'var(--red-600)', flexShrink: 0 }} />
              <div className="critical-alert-body">
                <p style={{ fontSize: '0.9rem', color: 'var(--red-800)' }}>{currentStep.alert}</p>
              </div>
            </div>
          )}

          <div className="step-diagnostic-footer">
            <Sparkles size={16} style={{ color: 'var(--blue-600)', flexShrink: 0 }} />
            <span><strong>Razonamiento Cátedra:</strong> {currentStep.diagnosticText}</span>
          </div>
        </div>

        {/* Controles del Stepper */}
        <div className="stepper-controls">
          <button
            className="btn btn-secondary"
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            style={{ opacity: currentStepIndex === 0 ? 0.5 : 1, cursor: currentStepIndex === 0 ? 'not-allowed' : 'pointer' }}
          >
            <ArrowLeft size={16} />
            <span>Paso Anterior</span>
          </button>

          <button
            className="btn btn-secondary"
            onClick={handleReset}
            title="Reiniciar al paso 1"
          >
            <RotateCcw size={15} />
            <span>Reiniciar</span>
          </button>

          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={currentStepIndex === totalSteps - 1}
            style={{ opacity: currentStepIndex === totalSteps - 1 ? 0.5 : 1, cursor: currentStepIndex === totalSteps - 1 ? 'not-allowed' : 'pointer' }}
          >
            <span>{currentStepIndex === totalSteps - 1 ? 'Resolución Completada' : 'Siguiente Paso'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
