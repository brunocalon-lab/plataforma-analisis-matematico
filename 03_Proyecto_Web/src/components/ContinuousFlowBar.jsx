import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContinuousFlowBar({ currentStage, onSelectStage }) {
  const stages = [
    { id: 'sustitucion', num: 1, label: 'SUSTITUCIÓN' },
    { id: 'identificacion', num: 2, label: 'IDENTIFICACIÓN' },
    { id: 'diagnostico', num: 3, label: 'DIAGNÓSTICO' },
    { id: 'estrategia', num: 4, label: 'ESTRATEGIA' },
    { id: 'transformacion', num: 5, label: 'TRANSFORMACIÓN' },
    { id: 'resultado', num: 6, label: 'RESULTADO' },
  ];

  return (
    <div className="progress-flow-container">
      <div className="progress-flow-inner">
        {stages.map((stage, idx) => {
          const isActive = currentStage === stage.id;
          return (
            <React.Fragment key={stage.id}>
              <button
                className={`flow-step ${isActive ? 'active' : ''}`}
                onClick={() => onSelectStage(stage.id)}
                title={`Ir a la fase ${stage.label}`}
              >
                <span className="flow-step-num">{stage.num}</span>
                <span>{stage.label}</span>
              </button>
              {idx < stages.length - 1 && (
                <ArrowRight size={14} className="flow-arrow" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
