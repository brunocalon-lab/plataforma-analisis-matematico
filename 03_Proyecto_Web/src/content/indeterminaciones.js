/**
 * DATASET MATEMÁTICO RIGUROSO — LÍMITES INDETERMINADOS
 * Basado estrictamente en los apuntes de la cátedra de Análisis Matemático (UP)
 * Sin regla de L'Hôpital ni contenidos externos.
 */

export const INDETERMINATE_FORMS = [
  { id: '0/0', label: '0 / 0', name: 'Cero sobre cero', category: 'principal', color: 'blue' },
  { id: 'inf/inf', label: '∞ / ∞', name: 'Infinito sobre infinito', category: 'principal', color: 'blue' },
  { id: 'inf-inf', label: '∞ − ∞', name: 'Infinito menos infinito', category: 'principal', color: 'blue' },
  { id: '1^inf', label: '1^∞', name: 'Uno elevado a infinito', category: 'secundaria', color: 'purple' },
  { id: '0*inf', label: '0 · ∞', name: 'Cero por infinito', category: 'secundaria', color: 'purple' },
  { id: '0^0', label: '0^0', name: 'Cero elevado a cero', category: 'secundaria', color: 'purple' },
  { id: 'inf^0', label: '∞^0', name: 'Infinito elevado a cero', category: 'secundaria', color: 'purple' },
];

export const DECISION_TREE = {
  '0/0': {
    id: '0/0',
    title: 'Indeterminación tipo 0 / 0',
    latexForm: '\\frac{0}{0}',
    intro: 'Aparece frecuentemente cuando x tiende a un valor finito a y anula simultáneamente el numerador y el denominador.',
    diagnosticQuestion: '¿Qué tipo de expresión matemática compone el límite?',
    branches: [
      {
        id: '0/0-poly',
        title: 'Cociente de Polinomios',
        subtitle: 'P(x) / Q(x) donde ambos se anulan en x = a',
        math: '\\lim_{x \\to a} \\frac{P(x)}{Q(x)} = \\frac{0}{0}',
        badge: 'Polinomios',
        strategies: [
          {
            id: 'strat-factor-common',
            name: 'Factorización Elemental y Simplificación',
            subtitle: 'Factor común y diferencia de cuadrados',
            whenToUse: 'Cuando los polinomios contienen términos con variables comunes o diferencias de cuadrados perfectos (x² − a²).',
            idea: 'Expresar numerador y denominador como producto de factores para hacer evidente el factor (x − a) que genera el cero y simplificarlo.',
            alert: 'Solo se pueden cancelar factores que estén multiplicando a toda la expresión, jamás términos que estén sumando o restando.',
            example: {
              title: 'Ejemplo del Apunte (Factor común y dif. de cuadrados)',
              initialLatex: '\\lim_{x \\to 3} \\frac{2x - 6}{x^2 - 9}',
              steps: [
                {
                  step: 1,
                  desc: 'Sustitución directa de x = 3:',
                  latex: '\\frac{2(3) - 6}{3^2 - 9} = \\frac{0}{0} \\quad \\text{(Indeterminación)}'
                },
                {
                  step: 2,
                  desc: 'Factorizamos numerador (factor común 2) y denominador (diferencia de cuadrados):',
                  latex: '\\lim_{x \\to 3} \\frac{2(x - 3)}{(x - 3)(x + 3)}'
                },
                {
                  step: 3,
                  desc: 'Como x tiende a 3, x ≠ 3, por lo tanto (x − 3) ≠ 0 y podemos simplificarlo:',
                  latex: '\\lim_{x \\to 3} \\frac{2}{x + 3}'
                },
                {
                  step: 4,
                  desc: 'Calculamos el nuevo límite por sustitución directa:',
                  latex: '\\frac{2}{3 + 3} = \\frac{2}{6} = \\frac{1}{3}'
                }
              ],
              finalResult: '\\frac{1}{3}'
            }
          },
          {
            id: 'strat-bhaskara',
            name: 'Polinomio de 2° Grado por Raíces (Bhaskara)',
            subtitle: 'ax² + bx + c = a(x − x₁)(x − x₂)',
            whenToUse: 'Cuando el numerador o denominador es un polinomio cuadrático completo o incompleto.',
            idea: 'Hallar las raíces reales x₁ y x₂ mediante la fórmula resolvente x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} y escribir el polinomio en su forma factorizada.',
            alert: 'No olvidar multiplicar por el coeficiente principal a: ax² + bx + c = a(x − x₁)(x − x₂).',
            example: {
              title: 'Ejemplo de Factorización Cuadrática',
              initialLatex: 'P(x) = 2x^2 + 2x - 12',
              steps: [
                {
                  step: 1,
                  desc: 'Identificamos coeficientes: a = 2, b = 2, c = -12. Aplicamos Bhaskara:',
                  latex: 'x_{1,2} = \\frac{-2 \\pm \\sqrt{2^2 - 4(2)(-12)}}{2(2)} = \\frac{-2 \\pm \\sqrt{100}}{4}'
                },
                {
                  step: 2,
                  desc: 'Obtenemos las raíces reales:',
                  latex: 'x_1 = 2, \\quad x_2 = -3'
                },
                {
                  step: 3,
                  desc: 'Escribimos la forma factorizada con a = 2:',
                  latex: '2x^2 + 2x - 12 = 2(x - 2)(x + 3)'
                }
              ],
              finalResult: '2(x - 2)(x + 3)'
            }
          },
          {
            id: 'strat-ruffini',
            name: 'Regla de Ruffini para Polinomios de Grado ≥ 3',
            subtitle: 'División exacta por (x − a)',
            whenToUse: 'Cuando el polinomio tiene grado 3 o superior y x = a es una raíz conocida porque anula la función al sustituir.',
            idea: 'Como al sustituir x = a obtenemos 0/0, sabemos con certeza matemática que x = a es raíz del polinomio. Aplicamos Ruffini dividiendo por (x − a) para bajar un grado al polinomio.',
            alert: 'Completar y ordenar los polinomios con ceros en los términos faltantes antes de armar la tabla de Ruffini.',
            example: {
              title: 'Ejemplo del Apunte (Factorización con Ruffini)',
              initialLatex: '\\lim_{x \\to -2} \\frac{12 - 3x^2}{2x^3 + x^2 - 5x + 2}',
              steps: [
                {
                  step: 1,
                  desc: 'Sustitución directa de x = -2:',
                  latex: '\\frac{12 - 3(-2)^2}{2(-2)^3 + (-2)^2 - 5(-2) + 2} = \\frac{12 - 12}{-16 + 4 + 10 + 2} = \\frac{0}{0}'
                },
                {
                  step: 2,
                  desc: 'Factorizamos el numerador sacando factor común -3 y diferencia de cuadrados:',
                  latex: '12 - 3x^2 = -3(x^2 - 4) = -3(x - 2)(x + 2)'
                },
                {
                  step: 3,
                  desc: 'Factorizamos el denominador aplicando Ruffini con la raíz conocida x = -2:',
                  latex: '2x^3 + x^2 - 5x + 2 = (2x^2 - 3x + 1)(x + 2)'
                },
                {
                  step: 4,
                  desc: 'Reemplazamos en el límite y simplificamos el factor problemático (x + 2):',
                  latex: '\\lim_{x \\to -2} \\frac{-3(x - 2)(x + 2)}{(2x^2 - 3x + 1)(x + 2)} = \\lim_{x \\to -2} \\frac{-3(x - 2)}{2x^2 - 3x + 1}'
                },
                {
                  step: 5,
                  desc: 'Evaluamos el límite en x = -2:',
                  latex: '\\frac{-3(-2 - 2)}{2(-2)^2 - 3(-2) + 1} = \\frac{-3(-4)}{2(4) + 6 + 1} = \\frac{12}{15} = \\frac{4}{5}'
                }
              ],
              finalResult: '\\frac{4}{5}'
            }
          }
        ]
      },
      {
        id: '0/0-roots',
        title: 'Cocientes con Raíces Cuadradas',
        subtitle: 'Presencia de binomios con radicales cuadráticos',
        math: '\\lim_{x \\to a} \\frac{\\sqrt{f(x)} - c}{g(x)} = \\frac{0}{0}',
        badge: 'Radicales',
        strategies: [
          {
            id: 'strat-conjugate',
            name: 'Multiplicación y División por el Conjugado (Racionalización)',
            subtitle: '(A − B)(A + B) = A² − B²',
            whenToUse: 'En cocientes donde el numerador o denominador presenta una resta o suma que involucra al menos una raíz cuadrada y anula la fracción.',
            idea: 'Multiplicar tanto el numerador como el denominador por el binomio conjugado de la expresión que contiene la raíz. Esto genera una diferencia de cuadrados que elimina la raíz y libera el factor que indetermina.',
            alert: 'No expandir el producto en el miembro que no tenía la raíz; dejarlo factorizado para simplificar directamente.',
            example: {
              title: 'Ejemplo del Apunte (Racionalización)',
              initialLatex: '\\lim_{x \\to 1} \\frac{2x^3 - 5x^2 + 3}{2 - \\sqrt{5 - x}}',
              steps: [
                {
                  step: 1,
                  desc: 'Sustitución directa x = 1 genera indeterminación 0/0:',
                  latex: '\\frac{2(1)^3 - 5(1)^2 + 3}{2 - \\sqrt{5 - 1}} = \\frac{0}{2 - 2} = \\frac{0}{0}'
                },
                {
                  step: 2,
                  desc: 'Multiplicamos y dividimos por el binomio conjugado del denominador (2 + √(5 − x)):',
                  latex: '\\lim_{x \\to 1} \\frac{(2x^3 - 5x^2 + 3)(2 + \\sqrt{5 - x})}{(2 - \\sqrt{5 - x})(2 + \\sqrt{5 - x})}'
                },
                {
                  step: 3,
                  desc: 'En el denominador aplicamos diferencia de cuadrados: 2² − (√(5 − x))² = 4 − (5 − x) = x − 1:',
                  latex: '\\lim_{x \\to 1} \\frac{(2x^3 - 5x^2 + 3)(2 + \\sqrt{5 - x})}{x - 1}'
                },
                {
                  step: 4,
                  desc: 'Factorizamos el polinomio del numerador por Ruffini con x = 1: (x − 1)(2x² − 3x − 3):',
                  latex: '\\lim_{x \\to 1} \\frac{(x - 1)(2x^2 - 3x - 3)(2 + \\sqrt{5 - x})}{x - 1}'
                },
                {
                  step: 5,
                  desc: 'Simplificamos (x − 1) y sustituimos x = 1:',
                  latex: '(2(1)^2 - 3(1) - 3) \\cdot (2 + \\sqrt{5 - 1}) = (-4) \\cdot (2 + 2) = -16'
                }
              ],
              finalResult: '-16'
            }
          }
        ]
      },
      {
        id: '0/0-trig',
        title: 'Expresiones Trigonométricas',
        subtitle: 'Presencia de funciones sen(u(x)) donde u(x) → 0',
        math: '\\lim_{x \\to a} \\frac{\\sin(u(x))}{v(x)} = \\frac{0}{0}',
        badge: 'Trigonometría',
        strategies: [
          {
            id: 'strat-notable-trig',
            name: 'Límite Notable Trigonométrico',
            subtitle: '\\lim_{t \\to 0} \\frac{\\sin t}{t} = 1 \\quad \\text{o bien} \\quad \\lim_{t \\to 0} \\frac{t}{\\sin t} = 1',
            whenToUse: 'Cuando aparece la función seno cuyo argumento tiende a 0 al evaluar el límite.',
            idea: 'Multiplicar y dividir por constantes o aplicar un cambio de variable t = u(x) para lograr que el argumento del seno sea exactamente idéntico al denominador (o numerador), pudiendo invocar la propiedad fundamental del límite notable.',
            alert: 'El límite notable solo es válido si el argumento tiende estrictamente a 0. Si tiende a otro valor, no se puede aplicar.',
            example: {
              title: 'Ejemplo del Apunte (Ajuste de argumento trigonométrico)',
              initialLatex: '\\lim_{x \\to -3} \\frac{x^3 + 2x^2 + 9}{\\sin(2x + 6)}',
              steps: [
                {
                  step: 1,
                  desc: 'Comprobamos la indeterminación 0/0 al sustituir x = -3:',
                  latex: '\\frac{(-3)^3 + 2(-3)^2 + 9}{\\sin(2(-3) + 6)} = \\frac{-27 + 18 + 9}{\\sin(0)} = \\frac{0}{0}'
                },
                {
                  step: 2,
                  desc: 'Factorizamos el numerador por Ruffini con raíz -3: (x + 3)(x² − x + 3):',
                  latex: '\\lim_{x \\to -3} \\frac{(x + 3)(x^2 - x + 3)}{\\sin(2(x + 3))}'
                },
                {
                  step: 3,
                  desc: 'El argumento del seno es 2(x + 3). Multiplicamos y dividimos el numerador por 2 para igualar el argumento:',
                  latex: '\\lim_{x \\to -3} \\frac{2(x + 3)(x^2 - x + 3)}{2 \\sin(2(x + 3))}'
                },
                {
                  step: 4,
                  desc: 'Reescribimos como producto de límites aplicando el límite notable:',
                  latex: '\\lim_{x \\to -3} \\left[ \\frac{2(x + 3)}{\\sin(2(x + 3))} \\right] \\cdot \\lim_{x \\to -3} \\left[ \\frac{x^2 - x + 3}{2} \\right]'
                },
                {
                  step: 5,
                  desc: 'Como 2(x + 3) → 0, el primer factor es 1 por límite notable. Evaluamos el segundo:',
                  latex: '1 \\cdot \\frac{(-3)^2 - (-3) + 3}{2} = 1 \\cdot \\frac{9 + 3 + 3}{2} = \\frac{15}{2}'
                }
              ],
              finalResult: '\\frac{15}{2}'
            }
          }
        ]
      }
    ]
  },

  'inf/inf': {
    id: 'inf/inf',
    title: 'Indeterminación tipo ∞ / ∞',
    latexForm: '\\frac{\\infty}{\\infty}',
    intro: 'Aparece cuando x tiende a infinito (±∞) en cocientes de funciones polinómicas o trascendentes que crecen sin límite.',
    diagnosticQuestion: '¿Qué funciones conforman el numerador y el denominador?',
    branches: [
      {
        id: 'inf/inf-poly',
        title: 'Cociente de Polinomios',
        subtitle: 'P(x) / Q(x) cuando x → ±∞',
        math: '\\lim_{x \\to \\infty} \\frac{a_n x^n + \\dots + a_0}{b_m x^m + \\dots + b_0}',
        badge: 'Polinomios en ∞',
        strategies: [
          {
            id: 'strat-divide-power',
            name: 'División por la Mayor Potencia y Regla de Grados',
            subtitle: 'Comparación sistemática de grados n y m',
            whenToUse: 'En cualquier cociente de polinomios con x tendiendo a infinito.',
            idea: 'Dividir numerador y denominador por x elevado a la mayor potencia presente. Al distribuir, cada término de la forma c/x^k tiende a 0, dejando únicamente los coeficientes dominantes.',
            alert: 'Regla directa de grados (Apunte pág. 4):\n• Si gr(P) > gr(Q) ⇒ el límite es ∞.\n• Si gr(P) < gr(Q) ⇒ el límite es 0.\n• Si gr(P) = gr(Q) ⇒ el límite es aₙ / bₘ (cociente de coeficientes principales).',
            example: {
              title: 'Tres Casos Clave del Apunte',
              initialLatex: '\\text{Comparativa de los 3 casos fundamentales}',
              steps: [
                {
                  step: 1,
                  desc: 'Caso 1: Grado mayor en numerador (5 > 3):',
                  latex: '\\lim_{x \\to \\infty} \\frac{3x^5 - 2x + 1}{4x^3 + 3} = \\lim_{x \\to \\infty} \\frac{3 - \\frac{2}{x^4} + \\frac{1}{x^5}}{\\frac{4}{x^2} + \\frac{3}{x^5}} = \\frac{3}{0} = \\infty'
                },
                {
                  step: 2,
                  desc: 'Caso 2: Grado mayor en denominador (2 < 3):',
                  latex: '\\lim_{x \\to \\infty} \\frac{4x^2 + 3x - 5}{5x^3 - 8} = \\lim_{x \\to \\infty} \\frac{\\frac{4}{x} + \\frac{3}{x^2} - \\frac{5}{x^3}}{5 - \\frac{8}{x^3}} = \\frac{0}{5} = 0'
                },
                {
                  step: 3,
                  desc: 'Caso 3: Mismo grado (4 = 4):',
                  latex: '\\lim_{x \\to \\infty} \\frac{7x^4 + 3x^2 + 8}{5x^4 + x^3 - 8} = \\lim_{x \\to \\infty} \\frac{7 + \\frac{3}{x^2} + \\frac{8}{x^4}}{5 + \\frac{1}{x} - \\frac{8}{x^4}} = \\frac{7}{5}'
                }
              ],
              finalResult: '\\text{Regla directa: } \\frac{a_n}{b_m}'
            }
          }
        ]
      },
      {
        id: 'inf/inf-transcendent',
        title: 'Cociente de Funciones No Polinómicas',
        subtitle: 'Exponenciales, polinómicas y logarítmicas hacia ∞',
        math: '\\lim_{x \\to +\\infty} \\frac{f(x)}{g(x)}',
        badge: 'Jerarquía de Infinitos',
        strategies: [
          {
            id: 'strat-hierarchy',
            name: 'Jerarquía u Orden de Crecimiento a Infinito',
            subtitle: '\\text{Exponencial} > \\text{Polinómica} > \\text{Logarítmica}',
            whenToUse: 'Cuando el cociente mezcla funciones de distinta naturaleza (exponenciales, polinomios, logaritmos).',
            idea: 'Analizar cuál es la función que "tiende más rápido a infinito". La que crece con mayor rapidez domina por completo el comportamiento del cociente.',
            alert: 'Si la función dominante está en el numerador el límite es ∞. Si está en el denominador el límite es 0.',
            example: {
              title: 'Ejemplos del Apunte (Jerarquía)',
              initialLatex: '\\text{Comparaciones de velocidad hacia } +\\infty',
              steps: [
                {
                  step: 1,
                  desc: 'Logarítmica vs. Polinómica en el denominador:',
                  latex: '\\lim_{x \\to +\\infty} \\frac{\\ln x}{3x^4 + 2} = 0 \\quad \\text{(los polinomios tienden más rápido a } \\infty \\text{ que los logaritmos)}'
                },
                {
                  step: 2,
                  desc: 'Exponencial en el numerador vs. Polinómica:',
                  latex: '\\lim_{x \\to +\\infty} \\frac{5^x - 3}{2x^3 + x^7 + 5x - 8} = \\infty \\quad \\text{(la exponencial tiende más rápido a } \\infty \\text{)}'
                }
              ],
              finalResult: '\\text{Depende de la posición de la dominante}'
            }
          }
        ]
      }
    ]
  },

  'inf-inf': {
    id: 'inf-inf',
    title: 'Indeterminación tipo ∞ − ∞',
    latexForm: '\\infty - \\infty',
    intro: 'Ocurre típicamente al restar dos expresiones que crecen al infinito a ritmos comparables, anulándose mutuamente su tendencia evidente.',
    diagnosticQuestion: '¿La resta contiene raíces cuadradas?',
    branches: [
      {
        id: 'inf-inf-roots',
        title: 'Diferencia de Raíces Cuadradas',
        subtitle: 'Resta √(P(x)) − √(Q(x)) cuando x → +∞',
        math: '\\lim_{x \\to +\\infty} \\left( \\sqrt{P(x)} - \\sqrt{Q(x)} \\right)',
        badge: 'Diferencia de Radicales',
        strategies: [
          {
            id: 'strat-conjugate-inf',
            name: 'Multiplicación por el Conjugado y División por √x² = |x| = x',
            subtitle: '\\text{Transformación de } \\infty - \\infty \\text{ a } \\frac{\\infty}{\\infty}',
            whenToUse: 'En límites donde x → +∞ con una resta de términos con raíces cuadradas.',
            idea: 'Multiplicar y dividir por el binomio conjugado para transformar la resta en una suma en el denominador. Luego, se resuelve la indeterminación ∞/∞ resultante dividiendo numerador y denominador por √x² = |x| = x.',
            alert: 'Atención con el valor absoluto: √x² = |x|. Como x tiende a +∞, se usa |x| = x. Si tendiera a −∞, se debería usar |x| = −x.',
            example: {
              title: 'Ejemplo del Apunte (Diferencia de raíces)',
              initialLatex: '\\lim_{x \\to +\\infty} \\left( \\sqrt{x^2 + 2x} - \\sqrt{x^2 - 3} \\right)',
              steps: [
                {
                  step: 1,
                  desc: 'Evaluación directa: ∞ − ∞ (Indeterminación). Multiplicamos y dividimos por el conjugado:',
                  latex: '\\lim_{x \\to +\\infty} \\frac{(\\sqrt{x^2 + 2x} - \\sqrt{x^2 - 3})(\\sqrt{x^2 + 2x} + \\sqrt{x^2 - 3})}{\\sqrt{x^2 + 2x} + \\sqrt{x^2 - 3}}'
                },
                {
                  step: 2,
                  desc: 'Desarrollamos la diferencia de cuadrados en el numerador: (x² + 2x) − (x² − 3) = 2x + 3:',
                  latex: '\\lim_{x \\to +\\infty} \\frac{2x + 3}{\\sqrt{x^2 + 2x} + \\sqrt{x^2 - 3}} \\quad \\left( \\text{forma } \\frac{\\infty}{\\infty} \\right)'
                },
                {
                  step: 3,
                  desc: 'Dividimos numerador y denominador por x (recordando que en el interior de la raíz entra como x²):',
                  latex: '\\lim_{x \\to +\\infty} \\frac{\\frac{2x + 3}{x}}{\\frac{\\sqrt{x^2 + 2x} + \\sqrt{x^2 - 3}}{\\sqrt{x^2}}} = \\lim_{x \\to +\\infty} \\frac{2 + \\frac{3}{x}}{\\sqrt{1 + \\frac{2}{x}} + \\sqrt{1 - \\frac{3}{x^2}}}'
                },
                {
                  step: 4,
                  desc: 'Analizamos la tendencia de cada término cuando x → +∞:',
                  latex: '\\frac{2 + 0}{\\sqrt{1 + 0} + \\sqrt{1 - 0}} = \\frac{2}{1 + 1} = \\frac{2}{2} = 1'
                }
              ],
              finalResult: '1'
            }
          }
        ]
      }
    ]
  }
};

/**
 * EJEMPLO INTEGRADOR CENTRAL OBLIGATORIO
 * lim_{x -> 2} (x^2 - 4) / (x - 2)
 */
export const INTEGRATIVE_EXAMPLE = {
  title: 'Ejemplo Integrador Central',
  limitLatex: '\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}',
  functionDef: 'f(x) = \\frac{x^2 - 4}{x - 2}',
  domain: '\\text{Dom}(f) = \\mathbb{R} - \\{2\\}',
  steps: [
    {
      stage: 'SUSTITUCIÓN DIRECTA',
      title: 'Paso 1: Intento de Sustitución Directa',
      badge: 'Evaluación',
      badgeColor: 'blue',
      content: 'El primer paso formal e ineludible al calcular cualquier límite es reemplazar la variable x por el valor al que tiende (en este caso, x = 2).',
      math: '\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} \\implies \\frac{2^2 - 4}{2 - 2} = \\frac{4 - 4}{2 - 2}',
      alert: null,
      diagnosticText: 'El numerador se anula (4 − 4 = 0) y el denominador también se anula (2 − 2 = 0).'
    },
    {
      stage: 'IDENTIFICACIÓN',
      title: 'Paso 2: Obtención de la Forma 0 / 0',
      badge: 'Indeterminación',
      badgeColor: 'red',
      content: 'Al evaluar obtenemos un cociente de ceros. Se trata formalmente de una indeterminación del tipo 0/0.',
      math: '\\frac{0}{0} \\quad \\text{(Forma Indeterminada)}',
      alert: '¡Cuidado! Obtener 0/0 NO significa que el límite sea 0, ni 1, ni que no exista. Significa que debemos efectuar artificios algebraicos para conocer el verdadero comportamiento de la función.',
      diagnosticText: 'Conclusión: Es necesario "salvar la indeterminación" transformando algebraicamente la expresión.'
    },
    {
      stage: 'DIAGNÓSTICO Y ELECCIÓN',
      title: 'Paso 3: Diagnóstico y Elección de Estrategia',
      badge: 'Estrategia',
      badgeColor: 'green',
      content: 'Analizamos la estructura de f(x): tanto el numerador como el denominador son polinomios. El numerador x² − 4 es una diferencia de cuadrados perfecta (x² − 2²), mientras que el denominador ya es de grado 1 (x − 2).',
      math: 'x^2 - 4 = (x - 2)(x + 2)',
      alert: null,
      diagnosticText: 'Estrategia elegida: Factorización por diferencia de cuadrados y posterior simplificación.'
    },
    {
      stage: 'TRANSFORMACIÓN',
      title: 'Paso 4: Factorización del Numerador',
      badge: 'Álgebra',
      badgeColor: 'orange',
      content: 'Reemplazamos el numerador por su expresión factorizada equivalente dentro del operador de límite.',
      math: '\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2}',
      alert: null,
      diagnosticText: 'Observá que el factor responsable de que la fracción de 0/0 es exactamente (x − 2).'
    },
    {
      stage: 'SIMPLIFICACIÓN',
      title: 'Paso 5: Simplificación Analítica',
      badge: 'Cancelación',
      badgeColor: 'green',
      content: 'Por definición de límite finito, x tiende a 2 pero x NUNCA llega a ser exactamente 2 (x ≠ 2). Por lo tanto, (x − 2) ≠ 0 y podemos cancelar legalmente este factor en el numerador y denominador.',
      math: '\\lim_{x \\to 2} \\frac{\\cancel{(x - 2)}(x + 2)}{\\cancel{x - 2}} = \\lim_{x \\to 2} (x + 2)',
      alert: 'Justificación analítica clave: x → 2 implica x ≠ 2, lo que garantiza que nunca estamos dividiendo por cero al simplificar.',
      diagnosticText: 'La indeterminación ha sido salvada con éxito.'
    },
    {
      stage: 'CÁLCULO Y RESULTADO',
      title: 'Paso 6: Cálculo del Límite y Resultado Final',
      badge: 'Resultado',
      badgeColor: 'blue',
      content: 'Ahora que la función simplificada g(x) = x + 2 es continua y regular en x = 2, calculamos el límite por sustitución directa final:',
      math: '\\lim_{x \\to 2} (x + 2) = 2 + 2 = 4',
      alert: null,
      diagnosticText: 'El límite de la función cuando x tiende a 2 existe y es exactamente igual a 4.'
    }
  ]
};

/**
 * FORMAS SECUNDARIAS
 */
export const SECONDARY_FORMS = [
  {
    id: '1^inf',
    name: 'Forma 1^∞ y el Número e',
    latex: '1^\\infty',
    when: 'Aparece en funciones de la forma [f(x)]^(g(x)) donde la base f(x) tiende a 1 y el exponente g(x) tiende a infinito.',
    notableLimit: '\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e \\quad \\text{o bien} \\quad \\lim_{x \\to 0} (1 + x)^{1/x} = e',
    method: '1. Transformar la base f(x) a la forma (1 + 1/u(x)).\n2. Multiplicar y dividir el exponente para forzar la presencia de u(x).\n3. Aplicar la propiedad del límite notable para obtener e^k.',
    example: {
      title: 'Ejemplo del Apunte Parte II',
      initial: '\\lim_{x \\to \\infty} \\left( \\frac{3x + 2}{3x} \\right)^{4x}',
      steps: [
        'Distribuir el denominador: (3x/3x + 2/3x) = (1 + 2/3x)',
        'Escribir como fracción inversa: 1 + 1 / (3x/2)',
        'Multiplicar y dividir exponente por (3x/2): 4x = (3x/2) · (2/3x) · 4x = (3x/2) · (8/3)',
        'Aplicar definición de e: [ (1 + 1/(3x/2))^(3x/2) ]^(8/3) = e^(8/3)'
      ],
      result: 'e^{8/3}'
    }
  },
  {
    id: '0*inf',
    name: 'Forma 0 · ∞',
    latex: '0 \\cdot \\infty',
    when: 'Aparece en productos f(x) · g(x) donde una función tiende a 0 y la otra tiende a infinito.',
    method: 'Se transforma algebraicamente en un cociente enviando uno de los factores al denominador como su recíproco:\n• f(x) · g(x) = f(x) / (1/g(x))  ⇒ forma 0/0\n• f(x) · g(x) = g(x) / (1/f(x))  ⇒ forma ∞/∞\nUna vez convertido en cociente, se aplican las técnicas habituales de 0/0 o ∞/∞.',
    alert: 'Cero multiplicado por una cantidad que crece indefinidamente no es necesariamente cero.'
  },
  {
    id: 'exp-indeterminate',
    name: 'Formas Exponenciales 0^0 y ∞^0',
    latex: '0^0 \\quad \\text{y} \\quad \\infty^0',
    when: 'Límites de potencias f(x)^(g(x)) donde ambas funciones tienen comportamientos críticos simultáneos.',
    method: 'Se aplica la identidad exponencial-logarítmica:\ny = f(x)^{g(x)} \\implies \\ln(y) = g(x) \\cdot \\ln(f(x))\nEl exponente pasa a multiplicar y transforma la indeterminación en una de tipo 0 · ∞. Tras salvarla y hallar L = lim ln(y), el resultado final es e^L.',
    alert: 'Requiere aplicar logaritmo natural y al final no olvidar calcular la base e elevada al resultado obtenido.'
  }
];

/**
 * ERRORES FRECUENTES Y ALERTAS
 */
export const COMMON_ERRORS = [
  {
    id: 'err-1',
    title: 'Una indeterminación NO es el resultado del límite',
    highlight: true,
    description: 'Escribir "el límite es 0/0" o "el resultado es infinito sobre infinito" es conceptualmente incorrecto. La indeterminación es un estado de información incompleta que indica que debemos transformar algebraicamente la función.',
    badPractice: '\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\frac{0}{0} \\quad (\\text{Incompleto / Falso})',
    goodPractice: '\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4 \\quad (\\text{Correcto})'
  },
  {
    id: 'err-2',
    title: 'Pensar que 0 / 0 = 0 o 0 / 0 = 1',
    highlight: false,
    description: '0/0 no obedece a las reglas de la aritmética ordinaria de división por cero ni de cancelación directa (a/a = 1). Dependiendo de las funciones involucradas, el límite de un 0/0 puede ser 0, 4, -16, infinito o no existir.',
    badPractice: '\\frac{0}{0} = 0 \\quad \\text{o} \\quad \\frac{0}{0} = 1',
    goodPractice: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = L \\quad (\\text{Requiere salvar la indeterminación})'
  },
  {
    id: 'err-3',
    title: 'Cancelar términos que no son factores (Cancelar en sumas)',
    highlight: false,
    description: 'Uno de los errores más graves en álgebra es tachar términos que están sumando o restando en lugar de estar multiplicando.',
    badPractice: '\\frac{x^2 - 4}{x - 2} \\neq \\frac{x^2 - 4}{x - 2} \\to \\text{Cancelar } x \\text{ en la suma}',
    goodPractice: '\\frac{x^2 - 4}{x - 2} = \\frac{(x - 2)(x + 2)}{x - 2} = x + 2'
  },
  {
    id: 'err-4',
    title: 'Aplicar técnicas mecánicas sin comprobar sustitución directa',
    highlight: false,
    description: 'Muchos estudiantes se apresuran a buscar raíces con Ruffini o multiplicar por conjugados en límites que no son indeterminados y se resuelven de inmediato reemplazando.',
    badPractice: '\\lim_{x \\to 1} \\frac{x^2 + 5}{x + 1} \\to \\text{Factorizar innecesariamente}',
    goodPractice: '\\lim_{x \\to 1} \\frac{x^2 + 5}{x + 1} = \\frac{1 + 5}{1 + 1} = \\frac{6}{2} = 3'
  },
  {
    id: 'err-5',
    title: 'Confundir forma indeterminada con límite infinito (k / 0)',
    highlight: false,
    description: 'Si al sustituir el numerador tiende a un número k ≠ 0 y el denominador tiende a 0, NO hay indeterminación: el cociente tiende a infinito (o se estudian límites laterales para determinar si es +∞, −∞ o no existe).',
    badPractice: '\\frac{k}{0} = \\text{Indeterminación} \\quad (k \\neq 0)',
    goodPractice: '\\lim_{x \\to 0} \\frac{5}{x^2} = +\\infty \\quad \\left( \\frac{k}{0} \\to \\infty \\right)'
  },
  {
    id: 'err-6',
    title: 'Límites laterales distintos implican no existencia del límite',
    highlight: false,
    description: 'Para que exista el límite de una función en un punto x₀, los límites laterales deben existir y ser iguales: lim_{x → x₀⁺} f(x) = lim_{x → x₀⁻} f(x) = L. Si difieren, el límite no existe.',
    badPractice: 'L^+ = 4, \\; L^- = 6 \\implies L = 5 \\; (\\text{Promediar})',
    goodPractice: '\\lim_{x \\to 2^+} f(x) \\neq \\lim_{x \\to 2^-} f(x) \\implies \\nexists \\lim_{x \\to 2} f(x)'
  }
];

/**
 * PREGUNTAS Y REGLAS PARA EL ASISTENTE DIAGNÓSTICO DETERMINÍSTICO
 */
export const DIAGNOSTIC_QUESTIONS = [
  {
    id: 'step1_substitution',
    question: 'Paso 1: ¿Qué obtuviste al evaluar x por sustitución directa?',
    options: [
      { text: 'Un número real definido (ej: 3, -1/2, 0)', next: 'result_direct' },
      { text: 'Un cociente cero sobre cero ( 0 / 0 )', next: 'step2_zero_zero' },
      { text: 'Un cociente infinito sobre infinito ( ∞ / ∞ )', next: 'step2_inf_inf' },
      { text: 'Una resta de infinitos ( ∞ − ∞ )', next: 'step2_inf_minus_inf' },
      { text: 'Una constante sobre cero ( k / 0 con k ≠ 0 )', next: 'result_k_over_zero' },
      { text: 'Uno elevado a infinito ( 1^∞ )', next: 'result_one_to_inf' }
    ]
  },
  {
    id: 'step2_zero_zero',
    question: 'Paso 2 (Forma 0/0): ¿Cómo está formada la expresión matemática?',
    options: [
      { text: 'Cociente de polinomios simples (grado 2, factor común o diferencia de cuadrados)', next: 'result_00_poly_basic' },
      { text: 'Cociente con polinomios de grado 3 o superior', next: 'result_00_ruffini' },
      { text: 'Aparecen raíces cuadradas en suma o resta (√A − B)', next: 'result_00_conjugate' },
      { text: 'Aparece la función seno con argumento que tiende a 0 (sen(u(x)))', next: 'result_00_trig' }
    ]
  },
  {
    id: 'step2_inf_inf',
    question: 'Paso 2 (Forma ∞/∞): ¿Qué funciones componen la fracción cuando x → ±∞?',
    options: [
      { text: 'Cociente de polinomios P(x) / Q(x)', next: 'result_inf_inf_degrees' },
      { text: 'Mezcla funciones exponenciales, polinómicas y/o logarítmicas', next: 'result_inf_inf_hierarchy' }
    ]
  },
  {
    id: 'step2_inf_minus_inf',
    question: 'Paso 2 (Forma ∞ − ∞): ¿De qué tipo es la resta?',
    options: [
      { text: 'Diferencia de raíces cuadradas: √(P(x)) − √(Q(x)) con x → +∞', next: 'result_inf_minus_inf_conjugate' },
      { text: 'Resta de fracciones algebraicas', next: 'result_inf_minus_inf_common_denom' }
    ]
  }
];

export const DIAGNOSTIC_RESULTS = {
  'result_direct': {
    title: '¡No hay indeterminación!',
    strategy: 'Cálculo directo por continuidad',
    explanation: 'El límite se resuelve directamente mediante sustitución. Si el resultado es un número real f(a) y la función es continua, ese es el valor definitivo del límite.',
    recommendedAction: 'No apliques artificios algebraicos innecesarios.',
    category: 'direct'
  },
  'result_k_over_zero': {
    title: 'Límite Infinito (Forma k / 0)',
    strategy: 'Análisis de tendencias y límites laterales',
    explanation: 'Un número distinto de cero dividido por algo que tiende a cero tiende a infinito. No es una indeterminación 0/0. Debes analizar los límites laterales (por derecha y por izquierda) para determinar si el límite tiende a +∞, −∞ o no existe.',
    recommendedAction: 'Estudiar signos del numerador y denominador en x₀⁺ y x₀⁻.',
    category: 'alert'
  },
  'result_00_poly_basic': {
    title: 'Indeterminación 0/0 — Factorización Elemental',
    strategy: 'Factor común y Diferencia de cuadrados (o Bhaskara)',
    explanation: 'Factoriza tanto el numerador como el denominador para hacer explícito el factor (x − a) que genera el cero. Luego simplifícalo.',
    recommendedAction: 'Ir a la rama: 0/0 ➔ Cociente de polinomios ➔ Factorización y simplificación.',
    targetId: 'strat-factor-common',
    category: 'strategy'
  },
  'result_00_ruffini': {
    title: 'Indeterminación 0/0 — Regla de Ruffini',
    strategy: 'División polinómica por (x − a)',
    explanation: 'Dado que x = a anula el polinomio, a es raíz confirmada. Aplica la regla de Ruffini usando a como divisor para reducir el grado del polinomio y aislar (x − a).',
    recommendedAction: 'Ir a la rama: 0/0 ➔ Polinomios ➔ Regla de Ruffini.',
    targetId: 'strat-ruffini',
    category: 'strategy'
  },
  'result_00_conjugate': {
    title: 'Indeterminación 0/0 — Racionalización',
    strategy: 'Multiplicación y división por el binomio conjugado',
    explanation: 'Multiplica numerador y denominador por el conjugado de la expresión que contiene la raíz cuadrada para generar (A − B)(A + B) = A² − B² y eliminar el radical.',
    recommendedAction: 'Ir a la rama: 0/0 ➔ Radicales ➔ Racionalización.',
    targetId: 'strat-conjugate',
    category: 'strategy'
  },
  'result_00_trig': {
    title: 'Indeterminación 0/0 — Límite Notable Trigonométrico',
    strategy: 'Ajuste de argumento para aplicar lim (sen t / t) = 1',
    explanation: 'Manipula algebraicamente la expresión multiplicando y dividiendo por constantes para que el denominador coincida con el argumento del seno.',
    recommendedAction: 'Ir a la rama: 0/0 ➔ Trigonometría ➔ Límite Notable Trigonométrico.',
    targetId: 'strat-notable-trig',
    category: 'strategy'
  },
  'result_inf_inf_degrees': {
    title: 'Indeterminación ∞/∞ — Regla de Grados',
    strategy: 'División por mayor potencia de x',
    explanation: 'Divide numerador y denominador por x^n (mayor exponente) o aplica directamente la regla de comparación de grados: si gr(P)=gr(Q), el límite es an/bm; si gr(P)>gr(Q), tiende a ∞; si gr(P)<gr(Q), tiende a 0.',
    recommendedAction: 'Ir a la rama: ∞/∞ ➔ Cociente de polinomios ➔ Regla de grados.',
    targetId: 'strat-divide-power',
    category: 'strategy'
  },
  'result_inf_inf_hierarchy': {
    title: 'Indeterminación ∞/∞ — Jerarquía de Crecimiento',
    strategy: 'Comparación: Exponencial > Polinomio > Logaritmo',
    explanation: 'Identifica cuál función crece más velozmente a infinito. La dominante define el comportamiento total de la fracción.',
    recommendedAction: 'Ir a la rama: ∞/∞ ➔ No polinómicas ➔ Jerarquía de infinitos.',
    targetId: 'strat-hierarchy',
    category: 'strategy'
  },
  'result_inf_minus_inf_conjugate': {
    title: 'Indeterminación ∞ − ∞ — Conjugado y Raíces',
    strategy: 'Conjugado + división por √x² = |x| = x',
    explanation: 'Multiplica y divide por el conjugado para transformar la resta en una suma en el denominador (obteniendo ∞/∞), y luego divide por x = √x².',
    recommendedAction: 'Ir a la rama: ∞ − ∞ ➔ Diferencia de raíces.',
    targetId: 'strat-conjugate-inf',
    category: 'strategy'
  },
  'result_inf_minus_inf_common_denom': {
    title: 'Indeterminación ∞ − ∞ — Común Denominador',
    strategy: 'Operación algebraica de fracciones',
    explanation: 'Resta algebraicamente las dos fracciones calculando el mínimo común denominador para obtener una única fracción de tipo 0/0 o ∞/∞.',
    recommendedAction: 'Unificar las fracciones y reevaluar.',
    category: 'strategy'
  },
  'result_one_to_inf': {
    title: 'Indeterminación 1^∞ — Límite Notable de e',
    strategy: 'Transformación a la forma lim (1 + 1/u(x))^u(x) = e',
    explanation: 'Trabaja el interior del paréntesis para escribirlo como 1 + 1/u(x) y ajusta el exponente multiplicando y dividiendo por u(x).',
    recommendedAction: 'Ver sección de Formas Secundarias ➔ Forma 1^∞.',
    category: 'secondary'
  }
};
