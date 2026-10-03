import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Componente seguro para renderizar expresiones LaTeX utilizando KaTeX
 */
export default function MathView({ math, block = false, className = '' }) {
  const html = useMemo(() => {
    if (!math) return '';
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
        strict: false,
      });
    } catch (err) {
      console.error('KaTeX rendering error:', err);
      return math;
    }
  }, [math, block]);

  if (block) {
    return (
      <div
        className={`math-block ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`math-inline ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
