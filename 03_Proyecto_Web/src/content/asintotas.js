/**
 * DATASET MATEMÁTICO — MÓDULO D: ASÍNTOTAS (AV, AH, AO)
 * Fuente primaria: Apunte Oficial de Cátedra "0009_APU_Asíntotas_242Q_V1-1.pdf" (UP).
 * Respetando la notación de cátedra y sin inventar teoremas ni métodos.
 */

export const ASINTOTAS_INTRO = {
  definition: 'Se llama asíntota de una función f(x) a una recta cuya distancia a la gráfica de f(x) tiende a cero cuando x tiende a un punto finito "a", o bien cuando x tiende a infinito.',
  utility: 'Permite anticipar con exactitud el comportamiento asintótico y las ramas infinitas de una función sin necesidad de graficar cientos de puntos.'
};

export const VERTICAL_ASYMPTOTE = {
  title: 'Asíntota Vertical (AV)',
  equation: 'x = a',
  condition: '\\lim_{x \\to a} f(x) = \\pm\\infty \\quad \\text{o bien} \\quad \\lim_{x \\to a^+} f(x) = \\pm\\infty \\quad \\text{o bien} \\quad \\lim_{x \\to a^-} f(x) = \\pm\\infty',
  criterio: 'Al menos uno de los límites laterales debe tender a infinito cuando x se aproxima al punto finito a.',
  whereToLook: [
    'Puntos que NO pertenecen al dominio de la función (ceros del denominador en funciones racionales).',
    'Extremos abiertos del dominio (por ejemplo x = -1 en g(x) = ln(x + 1)).',
    'Puntos de empalme o corte en funciones definidas por tramos (incluso si pertenecen al dominio).'
  ],
  criticalAlert: '¡Cuidado con el 0/0! Si al evaluar en x = a tanto el numerador como el denominador se anulan simultáneamente, primero se debe salvar la indeterminación (Módulo C). Si el factor problemático se cancela y el límite resulta finito, se trata de una discontinuidad evitable (agujero), NO de una asíntota vertical.',
  examples: [
    {
      id: 'av-ex-1',
      title: 'Ejemplo 1 de Cátedra: Cero del denominador no evitable',
      functionLatex: 'f(x) = 1 + \\frac{1}{x - 2}',
      domain: '\\text{Dom}(f) = \\mathbb{R} - \\{2\\}',
      limitCalc: '\\lim_{x \\to 2} \\left( 1 + \\frac{1}{x - 2} \\right) = 1 + \\left[\\frac{1}{0}\\right] = \\infty',
      conclusion: 'La recta x = 2 es Asíntota Vertical a ambos lados.',
      note: 'x₀ = 2 no pertenece al dominio.'
    },
    {
      id: 'av-ex-2',
      title: 'Ejemplo 2 de Cátedra: Extremo abierto del dominio logarítmico',
      functionLatex: 'g(x) = \\ln(x + 1)',
      domain: '\\text{Dom}(g) = (-1, +\\infty)',
      limitCalc: '\\lim_{x \\to -1^+} \\ln(x + 1) = \\ln(0^+) = -\\infty',
      conclusion: 'La recta x = -1 es Asíntota Vertical a derecha.',
      note: 'x₀ = -1 no pertenece al dominio, pero es extremo abierto del mismo.'
    },
    {
      id: 'av-ex-3',
      title: 'Ejemplo 3 de Cátedra: Punto de corte en función partida que pertenece al dominio',
      functionLatex: 'h(x) = \\begin{cases} \\frac{1}{x - 3} & \\text{si } x < 3 \\\\ (x - 2)^2 & \\text{si } x \\ge 3 \\end{cases}',
      domain: '\\text{Dom}(h) = \\mathbb{R}',
      limitCalc: '\\lim_{x \\to 3^-} \\frac{1}{x - 3} = \\frac{1}{0^-} = -\\infty, \\quad \\lim_{x \\to 3^+} (3 - 2)^2 = 1',
      conclusion: 'La recta x = 3 es Asíntota Vertical a izquierda.',
      note: 'x₀ = 3 pertenece al dominio porque h(3) = 1, pero por izquierda la función tiende a -∞.'
    }
  ]
};

export const HORIZONTAL_ASYMPTOTE = {
  title: 'Asíntota Horizontal (AH)',
  equation: 'y = b',
  condition: 'b = \\lim_{x \\to +\\infty} f(x) \\quad \\text{y/o} \\quad b = \\lim_{x \\to -\\infty} f(x)',
  criterio: 'Si el límite cuando x tiende a infinito (+∞ o −∞) da un valor real finito b, la recta horizontal y = b es asíntota.',
  observations: [
    'La asíntota horizontal es un caso particular de la oblicua donde la pendiente a = 0 y b es finito.',
    'Si los límites para x → +∞ y x → −∞ son distintos, hay que calcularlos por separado (pueden existir hasta 2 asíntotas horizontales distintas).',
    'Una función puede cruzar o cortar a su asíntota horizontal finitas o infinitas veces (Ejemplo 7 del apunte: h(x) = sen(x)/x corta a y = 0 en infinitos puntos).'
  ],
  examples: [
    {
      id: 'ah-ex-exponential',
      title: 'Ejemplo 5 de Cátedra: Asíntota horizontal a un solo lado (Exponencial)',
      functionLatex: 'f(x) = 2^x + 1',
      limitRight: '\\lim_{x \\to +\\infty} (2^x + 1) = +\\infty \\quad (\\text{no hay AH a derecha})',
      limitLeft: '\\lim_{x \\to -\\infty} (2^x + 1) = 2^{-\\infty} + 1 = 0 + 1 = 1',
      conclusion: 'La recta y = 1 es Asíntota Horizontal solo para x → -∞.'
    }
  ]
};

export const OBLIQUE_ASYMPTOTE = {
  title: 'Asíntota Oblicua (AO)',
  equation: 'y = ax + b \\quad (a \\neq 0)',
  condition: '\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0',
  formulas: {
    slopeA: 'a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}',
    interceptB: 'b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]'
  },
  criterio: 'La pendiente "a" debe ser un número real finito distinto de cero. Si a = 0, se reduce a una Asíntota Horizontal y = b. Si "a" o "b" dan infinito, no existe asíntota oblicua.',
  observations: [
    'En funciones racionales P(x)/Q(x), solo existe asíntota oblicua si gr(P) = gr(Q) + 1 (el grado del numerador supera en exactamente 1 al del denominador).',
    'Si una rama al infinito (ej. +∞) ya tiene Asíntota Horizontal, NO puede tener Asíntota Oblicua hacia ese mismo lado.',
    'Una función puede tener como máximo dos asíntotas no verticales (horizontales u oblicuas combinadas).'
  ],
  workedExample: {
    title: 'Ejemplo 6 de Cátedra: Cálculo completo de AO en función racional',
    functionLatex: 'g(x) = \\frac{x^2}{x - 2}',
    steps: [
      {
        step: 1,
        title: 'Verificación previa de grados',
        desc: 'El grado del numerador es 2 y el del denominador es 1 (2 = 1 + 1). Existe la posibilidad de asíntota oblicua.'
      },
      {
        step: 2,
        title: 'Cálculo de la pendiente "a"',
        formula: 'a = \\lim_{x \\to \\pm\\infty} \\frac{g(x)}{x} = \\lim_{x \\to \\pm\\infty} \\frac{x^2}{x(x - 2)} = \\lim_{x \\to \\pm\\infty} \\frac{x^2}{x^2 - 2x} = 1',
        result: 'a = 1 (número finito no nulo)'
      },
      {
        step: 3,
        title: 'Cálculo de la ordenada al origen "b"',
        formula: 'b = \\lim_{x \\to \\pm\\infty} [g(x) - 1x] = \\lim_{x \\to \\pm\\infty} \\left( \\frac{x^2}{x - 2} - x \\right) = \\lim_{x \\to \\pm\\infty} \\frac{x^2 - x(x - 2)}{x - 2} = \\lim_{x \\to \\pm\\infty} \\frac{2x}{x - 2} = 2',
        result: 'b = 2'
      },
      {
        step: 4,
        title: 'Conclusión y ecuación de la recta',
        formula: 'y = 1x + 2 \\implies y = x + 2',
        result: 'La recta y = x + 2 es Asíntota Oblicua para x → ±∞.'
      }
    ]
  }
};

export const ASYMPTOTE_CHECKLIST = [
  {
    step: 1,
    name: 'Dominio de la función',
    action: 'Determinar formalmente Dom(f) e identificar candidatos x = a donde el denominador se anula o el argumento de logaritmos se anula.'
  },
  {
    step: 2,
    name: 'Candidatos a AV (Asíntotas Verticales)',
    action: 'Calcular el límite lateral en cada candidato x → a. Si da ±∞, x = a es AV. Si da 0/0, salvar la indeterminación en Módulo C.'
  },
  {
    step: 3,
    name: 'Comportamiento en ±∞ para AH',
    action: 'Calcular b = lim f(x) para x → +∞ y x → -∞ por separado. Si b es finito, y = b es AH hacia ese infinito.'
  },
  {
    step: 4,
    name: 'Búsqueda de AO si no hay AH',
    action: 'Hacia el infinito donde no hubo AH, calcular a = lim [f(x)/x]. Si a es finito no nulo, calcular b = lim [f(x) - ax] para obtener y = ax + b.'
  },
  {
    step: 5,
    name: 'Tabla de Síntesis Asintótica',
    action: 'Reunir todas las rectas halladas (AV, AH, AO) indicando para qué rama de la función aplican.'
  }
];

export const INTEGRATIVE_ASYMPTOTE_EXAMPLE = {
  title: 'Laboratorio de Cátedra: Estudio Completo de Asíntotas (Ejemplo 4 y 9 del Apunte)',
  functionLatex: 'j(x) = \\frac{x^3 + 2x}{x^2 - 2x - 3}',
  domain: '\\text{Dom}(j) = \\mathbb{R} - \\{-1, 3\\}',
  steps: [
    {
      title: 'Paso 1: Dominio y Candidatos a AV',
      desc: 'Factorizamos el denominador resolviendo x² − 2x − 3 = 0 con raíces x₁ = 3 y x₂ = -1.',
      math: 'x^2 - 2x - 3 = (x - 3)(x + 1) \\implies \\text{Candidatos: } x = 3, \\; x = -1',
      badge: 'Dominio'
    },
    {
      title: 'Paso 2: Comprobación de Asíntotas Verticales',
      desc: 'Evaluamos el numerador en x = 3: 3³ + 2(3) = 33 ≠ 0. En x = -1: (-1)³ + 2(-1) = -3 ≠ 0. No hay indeterminación 0/0, sino k/0.',
      math: '\\lim_{x \\to 3} j(x) = \\left[\\frac{33}{0}\\right] = \\pm\\infty, \\quad \\lim_{x \\to -1} j(x) = \\left[\\frac{-3}{0}\\right] = \\pm\\infty',
      badge: 'AV Detectadas',
      conclusion: 'Existen dos Asíntotas Verticales: x = 3 y x = -1.'
    },
    {
      title: 'Paso 3: Análisis de Asíntota Horizontal (AH)',
      desc: 'Calculamos el límite cuando x tiende a infinito. Como gr(P) = 3 y gr(Q) = 2, el grado del numerador es mayor.',
      math: '\\lim_{x \\to \\pm\\infty} \\frac{x^3 + 2x}{x^2 - 2x - 3} = \\pm\\infty',
      badge: 'Sin AH',
      conclusion: 'No posee Asíntota Horizontal (el límite es infinito).'
    },
    {
      title: 'Paso 4: Cálculo de Asíntota Oblicua (AO)',
      desc: 'Como gr(P) = gr(Q) + 1 (3 = 2 + 1), buscamos la recta y = ax + b:',
      math: 'a = \\lim_{x \\to \\pm\\infty} \\frac{x^3 + 2x}{x(x^2 - 2x - 3)} = \\lim_{x \\to \\pm\\infty} \\frac{x^3 + 2x}{x^3 - 2x^2 - 3x} = 1',
      subMath: 'b = \\lim_{x \\to \\pm\\infty} \\left[ \\frac{x^3 + 2x}{x^2 - 2x - 3} - 1x \\right] = \\lim_{x \\to \\pm\\infty} \\frac{2x^2 + 5x}{x^2 - 2x - 3} = 2',
      badge: 'AO Detectada',
      conclusion: 'La recta y = x + 2 es Asíntota Oblicua para x → ±∞.'
    }
  ]
};
