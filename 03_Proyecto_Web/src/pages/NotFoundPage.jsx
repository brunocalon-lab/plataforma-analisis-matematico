import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, HelpCircle } from 'lucide-react';
import MathView from '../components/MathView';

export default function NotFoundPage() {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <div className="notfound-icon-wrap">
          <HelpCircle size={48} style={{ color: 'var(--amber-600)' }} />
        </div>
        <span className="notfound-code">Error 404 · Ruta no encontrada</span>
        <h2>La página o sección solicitada no existe</h2>
        <div className="notfound-math-box">
          <MathView math="\lim_{x \to \text{ruta}} f(x) = \text{No Definido}" block />
        </div>
        <p>
          Verificá la dirección ingresada o regresá al Hub Principal para navegar por los módulos oficiales de la cátedra de Análisis Matemático I.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Volver al Hub Principal</span>
          </Link>
          <Link to="/recorrido" className="btn btn-secondary">
            Iniciar Recorrido Guiado →
          </Link>
        </div>
      </div>
    </div>
  );
}
