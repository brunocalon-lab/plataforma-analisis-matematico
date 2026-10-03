import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Compass, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ExternalLink,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import MathView from '../components/MathView';
import { RECORRIDO_STEPS } from '../content/recorrido';
import { getStoredProgress, saveRecorridoStep, resetProgress } from '../lib/progress';

export default function RecorridoPage() {
  const { paso } = useParams();
  const navigate = useNavigate();

  // Determinar paso actual (1 a 10)
  const currentStepNum = Math.max(1, Math.min(10, parseInt(paso, 10) || 1));
  const stepData = RECORRIDO_STEPS[currentStepNum - 1] || RECORRIDO_STEPS[0];

  useEffect(() => {
    // Si no había paso en la URL pero hay uno guardado, redirigir
    if (!paso) {
      const stored = getStoredProgress();
      if (stored.recorridoStep && stored.recorridoStep > 1) {
        navigate(`/recorrido/${stored.recorridoStep}`, { replace: true });
        return;
      }
    }
    // Guardar progreso en am1.progress.v2
    saveRecorridoStep(currentStepNum);
  }, [paso, currentStepNum, navigate]);

  const goToStep = (num) => {
    navigate(`/recorrido/${num}`);
  };

  const handleReset = () => {
    resetProgress();
    navigate('/recorrido/1');
  };

  const progressPercent = Math.round((currentStepNum / RECORRIDO_STEPS.length) * 100);

  return (
    <div className="recorrido-page">
      {/* Barra de Migas de Pan */}
      <div className="module-breadcrumb-bar">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          <span>Hub Principal</span>
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Módulo A · Recorrido Guiado</span>
        <span className="module-badge-validated badge-recommended">
          Ruta Paso a Paso ({progressPercent}% Completado)
        </span>
      </div>

      {/* Barra de Progreso Superior */}
      <div className="recorrido-progress-container">
        <div className="progress-label-row">
          <span className="progress-step-indicator">
            <Compass size={16} style={{ color: 'var(--blue-600)' }} />
            <strong>Paso {currentStepNum} de {RECORRIDO_STEPS.length}:</strong> {stepData.title}
          </span>
          <button 
            type="button" 
            className="reset-progress-btn"
            onClick={handleReset}
            title="Reiniciar recorrido desde el paso 1"
          >
            <RotateCcw size={13} />
            <span>Reiniciar</span>
          </button>
        </div>

        <div className="recorrido-progress-track">
          <div 
            className="recorrido-progress-fill" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Selector rápido de pasos (1 a 10) */}
        <div className="step-pills-row">
          {RECORRIDO_STEPS.map((st) => (
            <button
              key={st.step}
              className={`step-pill-btn ${currentStepNum === st.step ? 'active' : ''}`}
              onClick={() => goToStep(st.step)}
              title={st.title}
            >
              {st.step}
            </button>
          ))}
        </div>
      </div>

      {/* Tarjeta Central del Paso Actual */}
      <div className="recorrido-card">
        <div className="recorrido-card-header">
          <span className="section-stage-badge badge-blue">{stepData.category}</span>
          <h2>{stepData.title}</h2>
        </div>

        {/* 1. Idea Clave */}
        <div className="recorrido-block">
          <div className="block-label">
            <Sparkles size={16} style={{ color: 'var(--blue-600)' }} />
            <strong>1. Idea Fundamental:</strong>
          </div>
          <p className="recorrido-idea-text">{stepData.idea}</p>
        </div>

        {/* 2. Fórmula Representativa */}
        <div className="recorrido-block">
          <div className="block-label">
            <strong>2. Fórmula de Cátedra:</strong>
          </div>
          <div className="recorrido-math-box">
            <MathView math={stepData.formula} block />
          </div>
        </div>

        {/* 3. Ejemplo Breve Comprobado */}
        <div className="recorrido-block">
          <div className="block-label">
            <CheckCircle2 size={16} style={{ color: 'var(--green-600)' }} />
            <strong>3. Ejemplo del Apunte:</strong>
          </div>
          <div className="recorrido-example-box">
            <p>{stepData.example.desc}</p>
            <MathView math={stepData.example.math} block />
          </div>
        </div>

        {/* 4. Alerta de Examen */}
        {stepData.alert && (
          <div className="recorrido-alert-callout">
            <AlertTriangle size={18} style={{ color: 'var(--amber-700)', flexShrink: 0 }} />
            <div>
              <strong>Atención de Cátedra:</strong> {stepData.alert}
            </div>
          </div>
        )}

        {/* 5. Puente al Módulo Completo */}
        {stepData.bridge && (
          <div className="recorrido-bridge-box">
            <span>¿Querés profundizar en este tema?</span>
            <Link to={stepData.bridge.route} className="bridge-action-link">
              <span>{stepData.bridge.text}</span>
              <ExternalLink size={14} />
            </Link>
          </div>
        )}

        {/* Controles de Navegación Anterior / Siguiente */}
        <div className="recorrido-actions-bar">
          <button
            className="btn btn-secondary"
            disabled={currentStepNum === 1}
            onClick={() => goToStep(currentStepNum - 1)}
          >
            ← Paso Anterior
          </button>

          {currentStepNum < RECORRIDO_STEPS.length ? (
            <button
              className="btn btn-primary"
              onClick={() => goToStep(currentStepNum + 1)}
            >
              <span>Siguiente Paso ({currentStepNum + 1}/10)</span>
              <ArrowRight size={16} />
            </button>
          ) : (
            <Link to="/" className="btn btn-primary">
              <span>Completar y Volver al Hub Principal</span>
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
