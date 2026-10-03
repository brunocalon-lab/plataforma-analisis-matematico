# Arquitectura Técnica — Plataforma Integral de Análisis Matemático I (Versión 2.0)

Documentación del diseño arquitectónico, enrutamiento, componentes, modelo de datos y decisiones técnicas.

---

## 1. Topología de Rutas (React Router v7)

La aplicación utiliza `react-router-dom` con `BrowserRouter` y reescritura en servidor (`vercel.json`) para soportar rutas amigables tipo SPA sin hashbang:

| Ruta | Componente | Propósito |
| :--- | :--- | :--- |
| `/` | `HubPage` | Puerta de entrada, selector diagnóstico rápido, tarjeta de reanudación de progreso |
| `/recorrido` | `RecorridoPage` | Orquestación secuencial en 10 pasos con barra de progreso interactiva |
| `/recorrido/:paso` | `RecorridoPage` | Deep linking directo a un paso específico (1 a 10) |
| `/limites` | `LimitesPage` | Módulo B: Concepto, aproximación viva, laterales, existencia, tendencias y propiedades |
| `/indeterminaciones` | `IndeterminacionesPage` | Módulo C: Migración V1 íntegra (árbol de 11 casos, stepper de 6 etapas, asistente determinístico) |
| `/asintotas` | `AsintotasPage` | Módulo D: Asíntotas Verticales, Horizontales y Oblicuas; checklist de 5 pasos y stepper |
| `/partidas` | `PartidasPage` | Módulo E: 5 Reglas de Oro, protocolo de 5 pasos, selector de casos con Ejemplo 9 del apunte |
| `/acerca` | `AboutPage` | Enfoque pedagógico, metodología pre-derivadas, créditos académicos |
| `*` | `NotFoundPage` | Vista 404 personalizada con enlace de retorno rápido al Hub |

---

## 2. Layout y Shell de la Aplicación

- **`AppShell` (`src/components/layout/AppShell.jsx`)**: Envoltorio principal que contiene:
  - **`Topbar` (`src/components/layout/Topbar.jsx`)**: Barra superior con navegación semántica a los 5 módulos + Hub, indicador de ruta activa y menú móvil responsive.
  - **`main.app-shell-main`**: Contenedor principal con centrado, padding responsivo y restricciones de ancho máximo.
  - **`Footer` (`src/components/layout/Footer.jsx`)**: Pie con enlaces académicos, copyright UP y acceso a `/acerca`.

---

## 3. Separación de Datos y Componentes (`src/content/`)

La lógica de presentación está desacoplada de los contenidos académicos:

- **`src/content/recorrido.js`**: Definición de los 10 pasos del recorrido guiado (título, módulo padre, resumen, fórmula KaTeX, checklist y tip de examen).
- **`src/content/limites.js`**: Valores de la tabla de aproximación para $f(x) = \frac{x^2-1}{x-1}$, tabla de tendencias directas ($k/0$, $k/\infty$), 8 propiedades algebraicas y formalismo $\varepsilon-\delta$.
- **`src/content/indeterminaciones.js`**: Árbol de decisiones algebraicas con 11 estrategias (racionalización, trinomio, Ruffini, factor común forzado, número $e$, etc.), comparador de casos y reglas operativas.
- **`src/content/asintotas.js`**: Definición analítica de AV, AH y AO, fórmulas de límites al infinito para pendiente $a$ y ordenada $b$, checklist de 5 pasos y datos del stepper para $j(x) = \frac{x^3+2x}{x^2-2x-3}$.
- **`src/content/partidas.js`**: 5 Reglas de Oro, protocolo de 5 pasos para funciones por tramos, datos completos del Ejemplo 9 de cátedra ($g(x)$ con 3 tipos de asíntotas) y caso de 3 ramas con 2 puntos de corte.

---

## 4. Persistencia del Progreso del Alumno (`src/lib/progress.js`)

Se gestiona mediante `localStorage` bajo el namespace aislado `am1.progress.v2`:

```javascript
// Estructura del estado persistido
{
  lastStep: 4,          // Último paso visitado en /recorrido
  completedSteps: [1, 2, 3, 4], // Array de pasos completados
  updatedAt: "2026-10-03T20:00:00.000Z"
}
```

Funciones utilitarias expuestas:
- `getProgress()`: Lee y valida la estructura en disco; inicializa si está vacía o corrupta.
- `markStepCompleted(stepNumber)`: Agrega el paso a `completedSteps` y actualiza `lastStep`.
- `setLastStep(stepNumber)`: Registra el paso activo actual para deep linking.
- `resetProgress()`: Reinicia el avance a estado inicial.

---

## 5. Renderizado Matemático (`src/components/math/MathView.jsx`)

- Utiliza **KaTeX** (`katex` npm package) importado con su CSS oficial.
- Soporta renderizado en línea (`inline = true`) y en bloque destacado (`inline = false` con `displayMode: true`).
- Incluye captura de errores (`throwOnError: false`) para garantizar que fórmulas no rompan la interfaz.

---

## 6. Decisiones Técnicas Clave

1. **Cero Dependencias Pesadas de Animación**: Se descartó `framer-motion` a favor de transiciones puras CSS (`transition: all 0.2s ease`, `@keyframes fadeIn`).
2. **Cero Dependencias de Graficadores Externos**: Las representaciones gráficas se realizaron con SVGs vectoriales nativos ligeros y tablas de valores numéricos vivos.
3. **Impresión Académica (`@media print`)**: Estilos dedicados en `src/styles/index.css` que ocultan topbar, pie y botones de acción, optimizando tipografía KaTeX a escala de grises para guías de estudio impresas.
4. **Enfoque Académico 100% Pre-Derivadas**: Prohibición explícita de la Regla de L'Hôpital y de IA generativa no determinística en tiempo de ejecución.
