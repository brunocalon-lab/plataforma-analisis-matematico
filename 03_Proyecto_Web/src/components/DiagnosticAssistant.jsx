import React, { useState } from 'react';
import { Sparkles, HelpCircle, CheckCircle, RotateCcw, ArrowRight, BookOpen } from 'lucide-react';
import { DIAGNOSTIC_QUESTIONS, DIAGNOSTIC_RESULTS } from '../data/limitsData';

export default function DiagnosticAssistant({ onNavigateToTree }) {
  const [currentStepId, setCurrentStepId] = useState('step1_substitution');
  const [history, setHistory] = useState([]);

  const currentQuestion = DIAGNOSTIC_QUESTIONS.find(q => q.id === currentStepId);
  const result = DIAGNOSTIC_RESULTS[currentStepId];

  const handleSelectOption = (nextId, optionText) => {
    setHistory(prev => [...prev, { stepId: currentStepId, answer: optionText }]);
    setCurrentStepId(nextId);
  };

  const handleReset = () => {
    setCurrentStepId('step1_substitution');
    setHistory([]);
  };

  return (
    <section id="asistente" className="section-container">
      <div className="section-header">
        <div className="section-stage-badge badge-purple">
          <Sparkles size={12} />
          <span>Asistente Diagnóstico Guiado</span>
        </div>
        <h2 className="section-title">Asistente Inteligente de Orientación</h2>
        <p className="section-desc">
          Respondé las siguientes preguntas sobre la expresión de tu límite para que el asistente determine la estrategia analítica exacta sin riesgo de alucinaciones.
        </p>
      </div>

      <div className="assistant-card">
        {/* Historial de Respuestas Anteriores */}
        {history.length > 0 && (
          <div style={{ marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Tu camino de diagnóstico:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {history.map((h, i) => (
                <div key={i} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  ✓ <strong>Paso {i + 1}:</strong> {h.answer}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Si estamos en una pregunta activa */}
        {currentQuestion && (
          <div className="assistant-question-box">
            <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <HelpCircle size={20} style={{ color: 'var(--blue-600)' }} />
              <span>{currentQuestion.question}</span>
            </h4>

            <div className="assistant-options">
              {currentQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  className="option-btn"
                  onClick={() => handleSelectOption(opt.next, opt.text)}
                >
                  <span>{opt.text}</span>
                  <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Si llegamos a un resultado diagnótico */}
        {result && (
          <div className="assistant-result-box">
            <div className="assistant-result-header">
              <CheckCircle size={24} style={{ color: 'var(--green-600)' }} />
              <h4>{result.title}</h4>
            </div>

            <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--green-700)', marginBottom: '0.5rem' }}>
              Estrategia Sugerida: {result.strategy}
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
              {result.explanation}
            </p>

            <div style={{ background: 'var(--bg-card)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-medium)', marginBottom: '1.25rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
              <strong style={{ color: 'var(--green-700)' }}>Acción pedagógica:</strong> {result.recommendedAction}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (result.targetId?.includes('00') || result.title.includes('0/0')) onNavigateToTree('0/0');
                  else if (result.targetId?.includes('inf_inf') || result.title.includes('∞/∞')) onNavigateToTree('inf/inf');
                  else if (result.targetId?.includes('inf_minus') || result.title.includes('∞ − ∞')) onNavigateToTree('inf-inf');
                  else onNavigateToTree('0/0');
                }}
              >
                <BookOpen size={16} />
                <span>Ver Rama en el Árbol de Decisiones</span>
              </button>

              <button className="btn btn-secondary" onClick={handleReset}>
                <RotateCcw size={15} />
                <span>Iniciar Nuevo Diagnóstico</span>
              </button>
            </div>
          </div>
        )}

        {/* Botón de reinicio si está a mitad de camino */}
        {currentQuestion && history.length > 0 && (
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            <button
              onClick={handleReset}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.825rem', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Reiniciar diagnóstico
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
