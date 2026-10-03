/**
 * DATASET MATEMÁTICO — MÓDULO A: RECORRIDO GUIADO DESDE CERO
 * Orquesta secuencialmente los conceptos de los Módulos B → C → D → E.
 * Cada paso contiene: 1 idea, 1 fórmula, 1 ejemplo breve, 1 alerta y puente al módulo completo.
 */

export const RECORRIDO_STEPS = [
  {
    step: 1,
    title: '¿Qué significa el límite de una función?',
    category: 'Módulo B · Concepto Base',
    idea: 'El límite describe a qué valor numérico se acercan las imágenes f(x) a medida que x se aproxima a un punto a, sin importar si f(a) existe o no.',
    formula: '\\lim_{x \\to a} f(x) = L',
    example: {
      desc: 'En f(x) = (x² − 1)/(x − 1), x = 1 no está en el dominio. Sin embargo, al aproximarnos por valores cercanos a 1, las imágenes se acercan a 2:',
      math: '\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = 2'
    },
    alert: '¡No confundas límite con imagen! El límite analiza la vecindad del punto, jamás el punto exacto.',
    bridge: {
      route: '/limites',
      text: 'Explorar tabla viva y gráfico en Módulo Límites →'
    }
  },
  {
    step: 2,
    title: 'El primer paso ineludible: Sustitución Directa',
    category: 'Módulo B · Procedimiento',
    idea: 'Todo límite en Análisis Matemático I comienza obligatoriamente reemplazando x por el valor a. Si el resultado es un número real finito L, el límite queda calculado sin artificios.',
    formula: '\\lim_{x \\to a} f(x) = f(a) \\quad (\\text{si } f \\text{ es continua en } a)',
    example: {
      desc: 'Sustitución directa inmediata:',
      math: '\\lim_{x \\to 1} \\frac{x^2 + 5}{x + 1} = \\frac{1^2 + 5}{1 + 1} = \\frac{6}{2} = 3'
    },
    alert: 'No apliques factorización ni métodos algebraicos si la función no genera una indeterminación.',
    bridge: {
      route: '/indeterminaciones',
      text: 'Ver comparador Caso A vs Caso B en Indeterminaciones →'
    }
  },
  {
    step: 3,
    title: 'Límites Laterales: Izquierda (a⁻) y Derecha (a⁺)',
    category: 'Módulo B · Laterales',
    idea: 'Para estudiar con rigor cómo se comporta la función en un punto, debemos inspeccionar la aproximación por valores menores (x < a) y por valores mayores (x > a).',
    formula: '\\lim_{x \\to a^-} f(x) \\quad \\text{y} \\quad \\lim_{x \\to a^+} f(x)',
    example: {
      desc: 'Función por tramos con salto en x = 2:',
      math: 'g(x) = \\begin{cases} x + 4 & x < 2 \\\\ x^2 & x \\ge 2 \\end{cases} \\implies \\lim_{x \\to 2^-} g(x) = 6, \\quad \\lim_{x \\to 2^+} g(x) = 4'
    },
    alert: 'En un lateral se utiliza exclusivamente la fórmula válida para ese intervalo de aproximación.',
    bridge: {
      route: '/limites',
      text: 'Ver teoría completa de límites laterales →'
    }
  },
  {
    step: 4,
    title: 'Condición de Existencia y Unicidad',
    category: 'Módulo B · Teorema',
    idea: 'El límite en un punto existe si y solo si ambos límites laterales son finitos y exactamente iguales entre sí.',
    formula: '\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L',
    example: {
      desc: 'Como en el paso anterior 6 ≠ 4, los laterales difieren:',
      math: '\\lim_{x \\to 2^-} g(x) \\neq \\lim_{x \\to 2^+} g(x) \\implies \\nexists \\lim_{x \\to 2} g(x)'
    },
    alert: 'Si una función tiene límite, este valor es ÚNICO. No puede tender a dos números distintos a la vez.',
    bridge: {
      route: '/limites',
      text: 'Ver ejemplos de existencia en Módulo Límites →'
    }
  },
  {
    step: 5,
    title: 'Álgebra de Tendencias: ¿k/0 es indeterminación?',
    category: 'Módulo B · Tendencias',
    idea: 'Una constante sobre cero (k/0 con k ≠ 0) NO es una indeterminación. Es una tendencia al infinito que indica la presencia de una rama asintótica.',
    formula: '\\frac{k}{0} \\to \\pm\\infty \\quad (k \\neq 0), \\qquad \\frac{k}{\\infty} \\to 0',
    example: {
      desc: 'Cociente con denominador tendiendo a cero:',
      math: '\\lim_{x \\to 0} \\frac{1}{x^2} = \\left[ \\frac{1}{0^+} \\right] = +\\infty'
    },
    alert: 'Solo 0/0 e ∞/∞ son indeterminaciones de cociente. k/0 da infinito y dispara el análisis de asíntotas verticales.',
    bridge: {
      route: '/asintotas',
      text: 'Aprender cómo k/0 genera Asíntotas Verticales →'
    }
  },
  {
    step: 6,
    title: 'Propiedades Algebraicas y cuándo NO aplican',
    category: 'Módulo B · Álgebra',
    idea: 'El límite distribuye en la suma, resta, producto y cociente siempre y cuando los límites individuales existan y sean finitos.',
    formula: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim f(x)}{\\lim g(x)} \\quad (\\text{requiere } \\lim g(x) \\neq 0)',
    example: {
      desc: 'Polinomio evaluado por propiedades distributivas:',
      math: '\\lim_{x \\to 2} (3x^4 - 5x^2 + 3) = 3(16) - 5(4) + 3 = 31'
    },
    alert: '¡Cuidado! Si lim f(x) = 0 y lim g(x) = 0, la propiedad del cociente NO se puede aplicar para hacer 0/0. Requiere salvar la indeterminación.',
    bridge: {
      route: '/indeterminaciones',
      text: 'Ver por qué 0/0 no se resuelve con propiedades →'
    }
  },
  {
    step: 7,
    title: 'Apareció una Indeterminación: El Árbol de Estrategias',
    category: 'Módulo C · Indeterminaciones',
    idea: 'Si la sustitución directa genera 0/0 o ∞/∞, debemos clasificar la anatomía de la función y elegir la estrategia algebraica adecuada para simplificar el factor problemático.',
    formula: '\\left[\\frac{0}{0}\\right] \\implies \\text{Factor común, Bhaskara, Ruffini, Conjugado o Límite Notable}',
    example: {
      desc: 'Salvamos 0/0 cancelando el factor (x − 2):',
      math: '\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4'
    },
    alert: 'Nunca digas que el límite "es 0/0". La indeterminación es un estado transitorio antes de aplicar álgebra.',
    bridge: {
      route: '/indeterminaciones',
      text: 'Abrir el Árbol de 11 Estrategias en Módulo C →'
    }
  },
  {
    step: 8,
    title: 'Límites que Disparan Rectas: Asíntotas (AV, AH, AO)',
    category: 'Módulo D · Asíntotas',
    idea: 'Cuando el límite en un punto da infinito, tenemos una Asíntota Vertical (x = a). Cuando el límite en el infinito da un número finito b, tenemos una Asíntota Horizontal (y = b).',
    formula: '\\text{AV: } x = a \\; (\\lim_{x \\to a} f(x) = \\infty), \\qquad \\text{AH: } y = b \\; (\\lim_{x \\to \\pm\\infty} f(x) = b)',
    example: {
      desc: 'Asíntota oblicua cuando el grado del numerador supera en 1 al denominador:',
      math: 'g(x) = \\frac{x^2}{x - 2} \\implies a = 1, \\; b = 2 \\implies y = x + 2 \\text{ es AO}'
    },
    alert: 'Si una rama al infinito ya tiene Asíntota Horizontal, no puede tener Asíntota Oblicua hacia ese mismo lado.',
    bridge: {
      route: '/asintotas',
      text: 'Ver checklist completo de 5 pasos en Módulo Asíntotas →'
    }
  },
  {
    step: 9,
    title: 'Funciones Definidas por Tramos (Partidas)',
    category: 'Módulo E · Partidas',
    idea: 'En funciones partidas, cada intervalo se rige por su propia fórmula. Los límites en los puntos de unión evalúan si la gráfica se conecta o tiene un salto.',
    formula: 'f(x) = \\begin{cases} f_1(x) & x < c \\\\ f_2(x) & x \\ge c \\end{cases} \\implies \\text{evaluar laterales en } x = c',
    example: {
      desc: 'Corte con salto finito en x = 0 y límite salvable en el interior:',
      math: '\\lim_{x \\to 0^-} (x + 4) = 4, \\quad \\lim_{x \\to 0^+} \\frac{x^2 - 4}{x - 2} = 2 \\implies \\text{Salto finito en } x = 0'
    },
    alert: 'Para x → -∞ solo rige el tramo más a la izquierda; para x → +∞ solo rige el tramo más a la derecha.',
    bridge: {
      route: '/partidas',
      text: 'Ver protocolo operativo y laboratorio de partidas →'
    }
  },
  {
    step: 10,
    title: 'Síntesis Mental y Consejos Clave de Examen',
    category: 'Cierre Integrador',
    idea: 'Conocés el flujo metodológico completo: Sustituir → Identificar forma → Salvar indeterminación → Calcular laterales en puntos críticos → Analizar ramas infinitas (asíntotas).',
    formula: '\\text{SUSTITUCIÓN} \\longrightarrow \\text{DIAGNÓSTICO} \\longrightarrow \\text{ESTRATEGIA} \\longrightarrow \\text{RESULTADO}',
    example: {
      desc: 'Regla de oro de cátedra UP:',
      math: '\\text{El apunte es ley. Precisión conceptual sobre memoria}'
    },
    alert: '¡Felicitaciones! Has completado el recorrido guiado de Análisis Matemático I.',
    bridge: {
      route: '/',
      text: 'Regresar al Hub Principal con acceso directo a todos los módulos →'
    }
  }
];
