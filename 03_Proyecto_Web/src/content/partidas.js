/**
 * DATASET MATEMÁTICO — MÓDULO E: FUNCIONES PARTIDAS (POR TRAMOS)
 * Fuente primaria: Apuntes de Cátedra "0009_APU_Asíntotas_242Q_V1-1.pdf" (Ej. 3, 8 y 9)
 * y "0009_APU_Límite_242Q_V1-1.pdf" (Ejemplos 1 y 2 de funciones a trozos).
 */

export const PARTIDAS_GOLDEN_RULES = [
  {
    num: 1,
    title: 'Aproximación por Izquierda (x → c⁻)',
    desc: 'Se calcula utilizando única y exclusivamente la fórmula de la rama válida para los valores menores a c (x < c).'
  },
  {
    num: 2,
    title: 'Aproximación por Derecha (x → c⁺)',
    desc: 'Se calcula utilizando única y exclusivamente la fórmula de la rama válida para los valores mayores a c (x > c).'
  },
  {
    num: 3,
    title: 'El valor puntual f(c) NO condiciona el límite',
    desc: 'Que el intervalo sea cerrado (≤) o abierto (<) define f(c), pero el límite estudia la proximidad alrededor de c, no lo que pasa en c.'
  },
  {
    num: 4,
    title: 'En los infinitos rige un solo tramo extremo',
    desc: 'Para x → -∞ solo se evalúa la función del tramo más a la izquierda. Para x → +∞ solo rige la del tramo más a la derecha.'
  },
  {
    num: 5,
    title: 'Un salto finito NO es Asíntota Vertical',
    desc: 'Para que exista AV, al menos uno de los laterales debe dar estrictamente ±∞. Si los laterales dan números reales finitos diferentes, hay una discontinuidad de salto finito.'
  }
];

export const PIECEWISE_PROTOCOL = [
  {
    step: 0,
    name: 'Paso 0: Inventario de Dominio y Puntos de Corte',
    action: 'Escribir con precisión el intervalo de cada tramo e identificar los puntos de empalme c₁, c₂, etc. Revisar si alguna rama tiene ceros en sus denominadores que excluyan puntos del dominio.'
  },
  {
    step: 1,
    name: 'Paso 1: Comportamiento en x → -∞',
    action: 'Seleccionar exclusivamente el tramo más a la izquierda (que contiene a -∞). Evaluar si presenta Asíntota Horizontal (AH) o Asíntota Oblicua (AO) a izquierda.'
  },
  {
    step: 2,
    name: 'Paso 2: Análisis de cada Punto de Corte (c)',
    action: 'Calcular límite lateral izquierdo con el tramo izquierdo y derecho con el tramo derecho. Si aparece una indeterminación (0/0), aplicar la estrategia del Módulo C y comparar resultados.'
  },
  {
    step: 3,
    name: 'Paso 3: Comportamiento en x → +∞',
    action: 'Seleccionar exclusivamente el tramo más a la derecha (que contiene a +∞). Evaluar si presenta Asíntota Horizontal (AH) o Asíntota Oblicua (AO) a derecha.'
  },
  {
    step: 4,
    name: 'Paso 4: Tabla de Síntesis del Estudio',
    action: 'Consolidar en una tabla única: límites en los cortes, existencia del límite, y todas las asíntotas (AV, AH, AO) halladas con su correspondiente tramo.'
  }
];

export const PIECEWISE_WORKED_EXAMPLE = {
  title: 'Laboratorio de Cátedra: Función Partida con Estudio Completo (Ejemplo 9 del Apunte)',
  functionDefinitionLatex: 'f(x) = \\begin{cases} \\frac{3x + 5}{x + 1} & \\text{si } x \\le -1 \\\\ \\frac{x^3 + 2x}{x^2 - x - 2} & \\text{si } x > -1 \\end{cases}',
  sections: [
    {
      title: 'Paso 0: Inventario y Dominio',
      desc: 'Analizamos las dos fórmulas en sus respectivos intervalos:',
      points: [
        'Tramo 1 (x ≤ -1): Denominador se anula en x = -1, que coincide con el punto de corte.',
        'Tramo 2 (x > -1): Denominador x² − x − 2 = (x − 2)(x + 1) se anula en x = -1 y en x = 2.',
        'Punto interior problemático: x = 2 pertenece al intervalo (x > -1), por lo tanto x = 2 ∉ Dom(f).'
      ],
      conclusion: '\\text{Dom}(f) = \\mathbb{R} - \\{2\\} \\quad \\text{(y el punto de corte x = -1 es frontera abierta en el denominador)}'
    },
    {
      title: 'Paso 1: Comportamiento hacia -∞ (Tramo Izquierdo)',
      desc: 'Como x tiende a -∞, usamos exclusivamente la fórmula del tramo 1: f₁(x) = (3x + 5)/(x + 1).',
      math: '\\lim_{x \\to -\\infty} \\frac{3x + 5}{x + 1} = 3',
      conclusion: 'La recta y = 3 es Asíntota Horizontal (AH) para x → -∞.'
    },
    {
      title: 'Paso 2: Punto de Corte en x = -1 y Candidatos a AV',
      desc: 'Analizamos el punto de empalme x = -1:',
      math: '\\lim_{x \\to -1^+} \\frac{x^3 + 2x}{(x - 2)(x + 1)} = \\left[ \\frac{-1 - 2}{(-3)(0^+)} \\right] = \\left[ \\frac{-3}{0^-} \\right] = +\\infty',
      points: [
        'Como el límite por derecha da +∞, la recta x = -1 es Asíntota Vertical (AV) a derecha.',
        'Evaluamos también el punto interior x = 2 (tramo 2): lim_{x → 2} f(x) = [12 / 0] = ±∞.',
        'Por lo tanto, la recta x = 2 es Asíntota Vertical (AV).'
      ],
      conclusion: 'Asíntotas Verticales halladas: x = -1 (a derecha) y x = 2 (a ambos lados).'
    },
    {
      title: 'Paso 3: Comportamiento hacia +∞ (Tramo Derecho)',
      desc: 'Para x → +∞ usamos exclusivamente el tramo 2: f₂(x) = (x³ + 2x)/(x² − x − 2). Como el grado del numerador (3) supera en 1 al del denominador (2), buscamos Asíntota Oblicua y = ax + b:',
      math: 'a = \\lim_{x \\to +\\infty} \\frac{x^3 + 2x}{x(x^2 - x - 2)} = 1, \\quad b = \\lim_{x \\to +\\infty} \\left[ \\frac{x^3 + 2x}{x^2 - x - 2} - 1x \\right] = 1',
      conclusion: 'La recta y = x + 1 es Asíntota Oblicua (AO) para x → +∞.'
    },
    {
      title: 'Paso 4: Síntesis de Resultados',
      desc: 'La función partida integra los 3 tipos de asíntotas comprobadas formalmente por la cátedra:',
      summaryTable: [
        { elemento: 'Asíntotas Verticales (AV)', ecuacion: 'x = -1 (por derecha) y x = 2 (a ambos lados)' },
        { elemento: 'Asíntota Horizontal (AH)', ecuacion: 'y = 3 (hacia x → -∞)' },
        { elemento: 'Asíntota Oblicua (AO)', ecuacion: 'y = x + 1 (hacia x → +∞)' }
      ]
    }
  ]
};

export const THREE_PIECE_CASE = {
  title: 'Protocolo para 3 Tramos (Caso Canónico de Cátedra)',
  latex: 'g(x) = \\begin{cases} x + 4 & \\text{si } x < 0 \\\\ \\frac{x^2 - 4}{x - 2} & \\text{si } 0 \\le x < 3 \\\\ \\frac{2x + 1}{x - 1} & \\text{si } x \\ge 3 \\end{cases}',
  corte1: {
    point: 'x = 0',
    left: '\\lim_{x \\to 0^-} (x + 4) = 4',
    right: '\\lim_{x \\to 0^+} \\frac{x^2 - 4}{x - 2} = \\frac{-4}{-2} = 2',
    diag: 'Como 4 ≠ 2, los límites laterales son distintos: NO existe límite en x = 0 (Discontinuidad de salto finito = 2).'
  },
  corte2: {
    point: 'x = 2 (Punto Interior del Tramo 2)',
    calc: '\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\left[\\frac{0}{0}\\right] = \\lim_{x \\to 2} (x + 2) = 4',
    diag: 'Da 0/0, pero se salva por factorización: el límite existe y vale 4. Es una discontinuidad evitable (agujero), NO una asíntota vertical.'
  },
  corte3: {
    point: 'x = 3',
    left: '\\lim_{x \\to 3^-} \\frac{x^2 - 4}{x - 2} = \\frac{9 - 4}{3 - 2} = 5',
    right: '\\lim_{x \\to 3^+} \\frac{2(3) + 1}{3 - 1} = \\frac{7}{2} = 3,5',
    diag: 'Como 5 ≠ 3,5, los laterales difieren: NO existe límite en x = 3.'
  }
};
