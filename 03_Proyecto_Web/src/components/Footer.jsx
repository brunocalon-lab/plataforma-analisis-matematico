import React from 'react';
import { BookMarked, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Trabajo Práctico: Límites Indeterminados con IA</h3>
            <p>
              Desarrollado como guía visual interactiva y herramienta de diagnóstico analítico para estudiantes de Análisis Matemático (Universidad de Palermo).
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-white)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              Fundamento Metodológico
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={14} style={{ color: 'var(--green-500)' }} />
                <span>Matemática rigurosa respaldada por apuntes de cátedra</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={14} style={{ color: 'var(--green-500)' }} />
                <span>Sin uso de Regla de L'Hôpital (según alcance del curso)</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={14} style={{ color: 'var(--green-500)' }} />
                <span>Auditoría crítica de IA y diagnóstico determinístico</span>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 · Cátedra de Análisis Matemático · UP</span>
          <span>Desarrollado con React + Vite + KaTeX · Listo para Vercel</span>
        </div>
      </div>
    </footer>
  );
}
