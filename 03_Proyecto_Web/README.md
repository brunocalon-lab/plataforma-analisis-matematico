# Plataforma Integral de Análisis Matemático I (Versión 2.0)

**Cátedra de Análisis Matemático I — Universidad de Palermo**  
*Plataforma interactiva de consulta, diagnóstico analítico y cálculo riguroso paso a paso.*

---

## 🎯 Visión del Producto 2.0

La Plataforma 2.0 escala la Guía Interactiva de Límites Indeterminados 1.0 (validada por la cátedra) a una herramienta integral organizada en un Hub de Bienvenida y 5 módulos estructurados:

1. **Hub Principal (`/`)**: Puerta de entrada con diagnóstico rápido "¿Qué necesitás ahora?" y persistencia de avance.
2. **Módulo A · Recorrido Guiado (`/recorrido[/:paso]`)**: Secuencia de 10 pasos con barra de progreso, ideas fuerza, ejemplos cortos y alertas.
3. **Módulo B · ¿Qué es un Límite? (`/limites`)**: Idea fundamental, tabla viva de aproximación, límites laterales, condición de existencia y propiedades algebraicas.
4. **Módulo C · Indeterminaciones (`/indeterminaciones`)**: Migración 1:1 de la V1 (árbol determinístico con 11 estrategias algebraicas, stepper de 6 etapas y asistente guiado).
5. **Módulo D · Asíntotas (`/asintotas`)**: Cálculo analítico de Asíntotas Verticales (AV), Horizontales (AH) y Oblicuas (AO) con checklist metódico de 5 pasos y stepper interactivo.
6. **Módulo E · Funciones Partidas (`/partidas`)**: Protocolo riguroso en 5 pasos para funciones por tramos, puntos de empalme, y comportamiento en ambos infinitos con selector de casos de cátedra.
7. **Acerca del Proyecto (`/acerca`)**: Metodología académica, enfoque pre-derivadas y créditos de autores (Bruno Calón y Agustín Blumenkranc).

---

## 📐 Rigor Matemático de Cátedra

- **Fuente primaria:** Basado 100% en los apuntes oficiales de la Universidad de Palermo.
- **Enfoque pre-derivadas:** Resolución mediante métodos algebraicos y analíticos rigurosos sin derivadas.
- **Sin alucinaciones:** Asistente y árboles de decisión determinísticos.
- **Renderizado tipográfico:** Motor KaTeX para máxima fidelidad matemática en fórmulas en línea y en bloque.

---

## 🛠️ Stack Tecnológico

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Enrutamiento:** React Router 7 (`react-router-dom`)
- **Renderizado Matemático:** KaTeX 0.18
- **Iconografía:** Lucide React
- **Estilos:** Vanilla CSS con variables semánticas, responsive (optimizado para 390px) y `@media print` de alta legibilidad académica.
- **Persistencia:** `localStorage` nativo bajo namespace `am1.progress.v2`.

---

## 🚀 Puesta en Marcha Local

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Compilación para producción (Build)
npm run build
```

---

## 📂 Arquitectura de Carpetas (`src/`)

```text
src/
├── components/
│   ├── layout/             # AppShell, Topbar, Footer
│   ├── math/               # MathView (renderizador KaTeX)
│   ├── v1/                 # Componentes originales V1
│   └── ...                 # Componentes interactivos modulares
├── content/                # Datasets matemáticos canónicos desacoplados
│   ├── limites.js          # Datos del Módulo B
│   ├── indeterminaciones.js# Datos del Módulo C (11 estrategias)
│   ├── asintotas.js        # Datos del Módulo D (AV, AH, AO)
│   ├── partidas.js         # Datos del Módulo E (Protocolo y tramos)
│   └── recorrido.js        # Pasos del Recorrido A (1 a 10)
├── lib/
│   └── progress.js         # Persistencia en localStorage (am1.progress.v2)
├── pages/                  # Vistas por ruta (Hub, Recorrido, Limites, etc.)
│   ├── HubPage.jsx
│   ├── RecorridoPage.jsx
│   ├── LimitesPage.jsx
│   ├── IndeterminacionesPage.jsx
│   ├── AsintotasPage.jsx
│   ├── PartidasPage.jsx
│   ├── AboutPage.jsx
│   └── NotFoundPage.jsx
└── styles/
    └── index.css           # Design tokens y estilos globales
```
