import React from 'react';
import { AlertCircle, ArrowDown, Sparkles, BookOpen } from 'lucide-react';
import MathView from './MathView';

export default function HeroBanner({ onStartDiagnosis, onGoToExample }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-tag">
          <Sparkles size={14} />
          <span>Guía de Consulta y Razonamiento Analítico</span>
        </div>
        <h1 className="hero-title">Guía Visual de Límites Indeterminados</h1>
        <p className="hero-question">
          “Reemplacé el valor por sustitución directa y obtuve una indeterminación. ¿Qué hago ahora?”
        </p>
        <p className="hero-lead">
          Esta herramienta interactiva te enseña a <strong>diagnosticar</strong> la forma analítica de una función, 
          seleccionar la <strong>estrategia algebraica precisa</strong> y transformar la expresión paso a paso para hallar el verdadero valor del límite.
        </p>

        <div className="hero-quick-actions">
          <button className="btn btn-primary" onClick={onStartDiagnosis}>
            <ArrowDown size={16} />
            <span>Comenzar Recorrido Guiado</span>
          </button>
          <button className="btn btn-secondary" onClick={onGoToExample}>
            <BookOpen size={16} />
            <span>Ver Ejemplo Integrador: <MathView math="\lim_{x \to 2} \frac{x^2-4}{x-2}" /></span>
          </button>
        </div>
      </section>

      {/* Recuadro Destacado Obligatorio */}
      <div className="critical-alert-box">
        <div className="critical-alert-icon">
          <AlertCircle size={24} />
        </div>
        <div className="critical-alert-body">
          <h4>¡Cuidado! Una indeterminación NO es el resultado del límite</h4>
          <p>
            Obtener expresiones como <MathView math="\frac{0}{0}" />, <MathView math="\frac{\infty}{\infty}" /> o <MathView math="\infty - \infty" /> 
            indica una falta de información directa: el límite no se puede determinar sin antes aplicar un 
            <strong> artificio algebraico</strong> para "salvar la indeterminación". La indeterminación nunca es la respuesta final.
          </p>
        </div>
      </div>
    </>
  );
}
