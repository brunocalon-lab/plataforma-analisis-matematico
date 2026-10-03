/**
 * DATASET MATEMÁTICO — MÓDULO B: ¿QUÉ ES UN LÍMITE?
 * Fuente primaria: Apunte Oficial de Cátedra "0009_APU_Límite_242Q_V1-1.pdf" (UP).
 * Sin inventos, sin herramientas no vistas en clase.
 */

export const CONCEPT_INTRO = {
  title: 'Concepto Intuitivo y Noción de Límite',
  description: 'Estudia el comportamiento de una función f(x) cuando la variable independiente x toma valores suficientemente próximos a un determinado valor x₀, sin exigir que la función esté definida en x₀.',
  notation: '\\lim_{x \\to x_0} f(x) = l',
  meaning: 'Decir que la función f tiene límite l en el punto x₀ significa que los valores de las imágenes f(x) se aproximan a l tanto como queramos cuando x toma valores suficientemente cercanos a x₀.',
  exampleKey: {
    title: 'Ejemplo Fundamental del Apunte: Función con punto excluido',
    functionLatex: 'f(x) = \\frac{x^2 - 1}{x - 1}',
    domainLatex: '\\text{Dom}(f) = \\mathbb{R} - \\{1\\}',
    simplifiedLatex: 'f(x) = x + 1 \\quad (\\text{para } x \\neq 1)',
    conclusionLatex: '\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = 2',
    explanation: 'Como 1 no pertenece al dominio, la función no puede evaluarse en x = 1 (daría 0/0). Sin embargo, podemos evaluar valores tan cercanos a 1 como queramos por izquierda y por derecha:',
    tableData: [
      { side: 'Izquierda (x < 1)', x: '0,9', fx: '1,9' },
      { side: 'Izquierda (x < 1)', x: '0,99', fx: '1,99' },
      { side: 'Izquierda (x < 1)', x: '0,999', fx: '1,999' },
      { side: 'Punto x₀ = 1', x: '1,0', fx: 'No existe f(1)' },
      { side: 'Derecha (x > 1)', x: '1,001', fx: '2,001' },
      { side: 'Derecha (x > 1)', x: '1,01', fx: '2,01' },
      { side: 'Derecha (x > 1)', x: '1,1', fx: '2,1' },
    ]
  }
};

export const LATERAL_LIMITS = {
  title: 'Límites Laterales y Condición de Existencia',
  definitions: [
    {
      type: 'right',
      name: 'Límite Lateral Derecho',
      symbol: '\\lim_{x \\to x_0^+} f(x)',
      desc: 'Comportamiento de f(x) cuando x se aproxima a x₀ tomando exclusivamente valores mayores que x₀ (x > x₀).'
    },
    {
      type: 'left',
      name: 'Límite Lateral Izquierdo',
      symbol: '\\lim_{x \\to x_0^-} f(x)',
      desc: 'Comportamiento de f(x) cuando x se aproxima a x₀ tomando exclusivamente valores menores que x₀ (x < x₀).'
    }
  ],
  existenceTheorem: {
    title: 'Teorema de Existencia y Unicidad (Propiedades 1 y 2 del Apunte)',
    formula: '\\lim_{x \\to x_0} f(x) = L \\iff \\lim_{x \\to x_0^-} f(x) = \\lim_{x \\to x_0^+} f(x) = L',
    rules: [
      'Unicidad: Si el límite de una función en un punto existe, este es único.',
      'Condición necesaria y suficiente: Para que exista el límite finito en un punto, ambos límites laterales deben existir y coincidir en el mismo número real L.',
      'Discrepancia lateral: Si los límites laterales en un punto son distintos, el límite en dicho punto NO existe.'
    ]
  },
  examples: [
    {
      id: 'ex-different-laterals',
      title: 'Caso 1: Límites laterales distintos (El límite NO existe)',
      functionDef: 'g(x) = \\begin{cases} x + 4 & \\text{si } x < 2 \\\\ x^2 & \\text{si } x \\ge 2 \\end{cases}',
      leftLimit: '\\lim_{x \\to 2^-} g(x) = 2 + 4 = 6',
      rightLimit: '\\lim_{x \\to 2^+} g(x) = 2^2 = 4',
      conclusion: 'Como \\lim_{x \\to 2^-} g(x) \\neq \\lim_{x \\to 2^+} g(x), se concluye rigurosamente que \\nexists \\lim_{x \\to 2} g(x).',
      exists: false
    },
    {
      id: 'ex-equal-laterals',
      title: 'Caso 2: Límites laterales iguales (El límite SÍ existe)',
      functionDef: 'h(x) = \\begin{cases} x + 2 & \\text{si } x < 2 \\\\ x^2 & \\text{si } x \\ge 2 \\end{cases}',
      leftLimit: '\\lim_{x \\to 2^-} h(x) = 2 + 2 = 4',
      rightLimit: '\\lim_{x \\to 2^+} h(x) = 2^2 = 4',
      conclusion: 'Como \\lim_{x \\to 2^-} h(x) = \\lim_{x \\to 2^+} h(x) = 4, el límite existe y vale 4: \\lim_{x \\to 2} h(x) = 4.',
      exists: true
    }
  ]
};

export const DIRECT_TENDENCIES = {
  title: 'Tendencias Directas vs. Formas Indeterminadas',
  intro: 'Antes de aplicar artificios, siempre se evalúa la tendencia directa de la expresión (Apunte pág. 9). Muchas expresiones que parecen conflictivas tienen resultado inmediato:',
  categories: [
    {
      title: 'Tendencias Directas Inmediatas (NO son indeterminaciones)',
      items: [
        {
          tendency: '\\frac{f(x) \\to 0}{g(x) \\to k} = 0 \\quad (k \\neq 0)',
          note: 'Numerador tiende a 0 y denominador a una constante no nula.',
          status: 'Cálculo directo: da 0.'
        },
        {
          tendency: '\\frac{f(x) \\to k}{g(x) \\to 0} = \\infty \\quad (k \\neq 0)',
          note: 'Constante sobre cero: ¡NO es indeterminación! Tiende a infinito (sugiere Asíntota Vertical).',
          status: 'Tiende a ±∞ (analizar signos laterales).'
        },
        {
          tendency: '\\frac{f(x) \\to k}{g(x) \\to \\infty} = 0 \\quad (k \\in \\mathbb{R})',
          note: 'Constante sobre una cantidad que crece sin límite.',
          status: 'Cálculo directo: da 0.'
        },
        {
          tendency: '\\frac{f(x) \\to \\infty}{g(x) \\to k} = \\infty \\quad (k \\in \\mathbb{R})',
          note: 'Infinito sobre constante.',
          status: 'Cálculo directo: tiende a ±∞.'
        },
        {
          tendency: 'k^\\infty \\implies \\begin{cases} \\infty & \\text{si } k > 1 \\\\ 0 & \\text{si } 0 < k < 1 \\end{cases}',
          note: 'Base constante positiva elevada a infinito.',
          status: 'Depende de si la base es mayor o menor a 1.'
        }
      ]
    },
    {
      title: 'Formas Indeterminadas (Requieren salvarse en Módulo C)',
      items: [
        {
          tendency: '\\frac{f(x) \\to 0}{g(x) \\to 0} \\implies \\left[\\frac{0}{0}\\right]',
          action: 'Factorización, Ruffini, conjugado o límite notable trigonométrico.'
        },
        {
          tendency: '\\frac{f(x) \\to \\infty}{g(x) \\to \\infty} \\implies \\left[\\frac{\\infty}{\\infty}\\right]',
          action: 'División por mayor potencia, regla de grados o jerarquía de infinitos.'
        },
        {
          tendency: 'f(x) - g(x) \\to [\\infty - \\infty]',
          action: 'Multiplicación por binomio conjugado o suma de fracciones.'
        },
        {
          tendency: '[f(x) \\to 1]^{g(x) \\to \\infty} \\implies [1^\\infty]',
          action: 'Transformación al límite notable del número e.'
        }
      ]
    }
  ],
  specialExponentialExample: {
    title: 'Ejemplo del Apunte (Tendencia exponencial según laterales)',
    latex: '\\lim_{x \\to 3} \\left( \\frac{2}{5} \\right)^{\\frac{1}{x - 3}}',
    steps: [
      'Al tender x → 3, el exponente es 1/(x − 3), lo que genera una tendencia de constante sobre cero (1/0 = ∞).',
      'Como el signo del infinito depende de si nos acercamos por izquierda o derecha, es obligatorio estudiar los laterales:',
      '• Por izquierda: x → 3⁻ ⇒ x − 3 < 0 ⇒ 1/(x − 3) → −∞. Entonces (2/5)⁻∞ = (5/2)⁺∞ = +∞.',
      '• Por derecha: x → 3⁺ ⇒ x − 3 > 0 ⇒ 1/(x − 3) → +∞. Como la base 2/5 está entre 0 y 1, (2/5)⁺∞ = 0.',
      'Conclusión cátedra: Dado que los límites laterales son distintos (+∞ ≠ 0), el límite NO existe.'
    ]
  }
};

export const ALGEBRAIC_PROPERTIES = {
  title: 'Propiedades Algebraicas de los Límites',
  intro: 'Sean f y g funciones tales que existen los límites finitos lim f(x) = L₁ y lim g(x) = L₂ cuando x → a:',
  properties: [
    { num: 1, name: 'Límite de una Constante', math: '\\lim_{x \\to a} k = k \\quad (k \\in \\mathbb{R})' },
    { num: 2, name: 'Límite de la Variable', math: '\\lim_{x \\to a} x = a' },
    { num: 3, name: 'Multiplicación por Escalar', math: '\\lim_{x \\to a} [k \\cdot f(x)] = k \\cdot \\lim_{x \\to a} f(x)' },
    { num: 4, name: 'Suma y Resta de Límites', math: '\\lim_{x \\to a} [f(x) \\pm g(x)] = \\lim_{x \\to a} f(x) \\pm \\lim_{x \\to a} g(x)' },
    { num: 5, name: 'Producto de Límites', math: '\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)' },
    { 
      num: 6, 
      name: 'Cociente de Límites', 
      math: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)} \\quad \\text{siempre que } \\lim_{x \\to a} g(x) \\neq 0',
      critical: true
    },
    { num: 7, name: 'Potencia Natural', math: '\\lim_{x \\to a} [f(x)]^n = \\left[ \\lim_{x \\to a} f(x) \\right]^n' },
    { num: 8, name: 'Función Potencial Exponencial', math: '\\lim_{x \\to a} [f(x)]^{g(x)} = \\left[ \\lim_{x \\to a} f(x) \\right]^{\\lim_{x \\to a} g(x)}' }
  ],
  apunteExample: {
    title: 'Ejemplo de Aplicación Directa (Apunte pág. 8)',
    statement: '\\lim_{x \\to 2} (3x^4 - 5x^2 + 3)',
    development: '= 3 \\left(\\lim_{x \\to 2} x\\right)^4 - 5 \\left(\\lim_{x \\to 2} x\\right)^2 + 3 = 3(2^4) - 5(2^2) + 3 = 3(16) - 5(4) + 3 = 48 - 20 + 3 = 31',
    result: '31'
  },
  restrictionAlert: {
    title: '¿Cuándo NO aplican las propiedades algebraicas?',
    points: [
      'Las propiedades exigen que cada límite individual EXISTA y sea FINITO.',
      'En el cociente (propiedad 6), la regla prohíbe taxativamente que el límite del denominador sea 0.',
      'Si el numerador y el denominador tienden a 0, NO se puede aplicar la propiedad para decir "0 / 0". Esa expresión carece de sentido numérico y constituye una INDETERMINACIÓN.',
      'Las propiedades algebraicas jamás salvan una indeterminación: indican que se requiere transformación previa en el Módulo de Indeterminaciones.'
    ]
  }
};

export const EPSILON_DELTA_DEFINITION = {
  title: 'Definición Formal de Límite (Épsilon - Delta)',
  formula: '\\forall \\varepsilon > 0, \\; \\exists \\delta > 0 \\; / \\; 0 < |x - x_0| < \\delta \\implies |f(x) - l| < \\varepsilon',
  text: 'Se dice que la función f(x) tiene como límite el número l cuando x tiende a x₀ si, fijado un margen de tolerancia vertical ε > 0 tan pequeño como se desee, es posible hallar una distancia horizontal δ(ε) > 0 tal que, para todo punto x dentro del entorno reducido (0 < |x - x₀| < δ), sus imágenes f(x) quedan encerradas en la franja (l − ε, l + ε).',
  note: 'Esta definición formal rigurosa respalda la intuición gráfica: podemos acercar f(x) a l tanto como queramos eligiendo valores de x suficientemente cercanos a x₀.'
};
