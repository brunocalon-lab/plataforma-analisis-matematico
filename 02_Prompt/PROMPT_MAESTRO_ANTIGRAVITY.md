# PROYECTO — GUÍA INTERACTIVA DE LÍMITES INDETERMINADOS

## 1. ROL

Actuás como agente principal de desarrollo, diseño UX/UI, revisión técnica y organización del proyecto.

El objetivo es desarrollar un trabajo práctico universitario sobre límites indeterminados utilizando una aplicación web interactiva como producto final.

No quiero que simplemente generes una página visualmente atractiva.

Quiero que construyas una herramienta educativa funcional, clara, académica y matemáticamente correcta.

---

# 2. PRIMERA REGLA: NO EMPEZAR A PROGRAMAR INMEDIATAMENTE

Antes de modificar o crear archivos:

1. Inspeccioná el entorno del proyecto.
2. Identificá qué archivos existen.
3. Identificá qué tecnologías, herramientas, paquetes y recursos están disponibles.
4. Revisá las carpetas del proyecto.
5. Localizá los archivos de:
   - consigna;
   - apuntes;
   - materiales de referencia;
   - imágenes;
   - cualquier recurso adicional.
6. Determiná qué información podés leer directamente y cuál no.
7. Identificá cualquier acceso, credencial, API, archivo o decisión que todavía necesites.

NO supongas que tenés acceso a algo que no podés verificar.

Si falta información importante, preguntame antes de avanzar.

No inventes rutas, credenciales, servicios, APIs ni recursos.

---

# 3. FORMA DE TRABAJO

Trabajá por fases.

## Fase 1 — Análisis

Primero analizá:

- la consigna;
- los apuntes;
- los objetivos del trabajo;
- los materiales disponibles;
- el entorno técnico.

Después presentame:

1. qué entendiste del proyecto;
2. qué recursos encontraste;
3. qué falta;
4. qué arquitectura proponés;
5. qué decisiones necesitás que yo confirme.

No desarrolles la aplicación todavía.

Esperá mi aprobación.

---

# 4. FUENTES PRINCIPALES

La fuente principal para el contenido académico es el material existente dentro del proyecto.

La información matemática debe basarse prioritariamente en:

- la consigna oficial;
- los apuntes de límites;
- los apuntes de indeterminaciones;
- los apuntes de indeterminaciones parte II.

El material de asíntotas puede consultarse únicamente cuando resulte realmente relevante.

NO agregues contenido matemático simplemente porque lo conozcas de manera general.

NO inventes:

- fórmulas;
- procedimientos;
- ejemplos;
- condiciones;
- resultados;
- definiciones.

Si un contenido necesario no está respaldado por los materiales proporcionados, indicámelo antes de incorporarlo.

---

# 5. CONSIGNA ACADÉMICA

La aplicación debe responder visualmente a la pregunta:

> “Reemplacé el valor y obtuve una indeterminación. ¿Qué hago ahora?”

La lógica conceptual principal es:

SUSTITUCIÓN
↓
IDENTIFICACIÓN
↓
DIAGNÓSTICO
↓
ELECCIÓN DE ESTRATEGIA
↓
TRANSFORMACIÓN
↓
CÁLCULO DEL LÍMITE

Las formas principales del recorrido son:

- 0/0
- ∞/∞
- ∞ − ∞

El sistema debe funcionar como una guía de consulta y no como una exposición teórica extensa.

---

# 6. OBJETIVO DEL PRODUCTO

Crear una herramienta web interactiva donde un estudiante pueda:

1. identificar la forma obtenida;
2. comprender qué significa;
3. explorar estrategias posibles;
4. conocer cuándo puede ser útil cada estrategia;
5. consultar un ejemplo;
6. detectar errores frecuentes;
7. recorrer una resolución paso a paso.

La aplicación debe enseñar a analizar el problema, no simplemente mostrar respuestas.

---

# 7. ÁRBOL DE DECISIONES

El árbol de decisiones debe ser el concepto central de la experiencia.

El recorrido debe comenzar preguntando:

> ¿Puedo calcular el límite por sustitución directa?

Si la respuesta es afirmativa:

> calcular directamente.

Si aparece una indeterminación:

> identificar la forma.

A partir de allí, el usuario debe poder acceder a las ramas correspondientes.

El recorrido completo debe sentirse conectado.

No quiero una colección de tarjetas aisladas.

Las decisiones del usuario deben llevarlo naturalmente hacia el siguiente paso.

---

# 8. ESTRATEGIAS

Incorporar las estrategias trabajadas en los materiales.

Entre ellas:

- factorización y simplificación;
- racionalización;
- identidades algebraicas;
- identidades trigonométricas;
- cambio de variable;
- límites notables.

No incluir Regla de L'Hôpital porque todavía no fue estudiada.

Cada estrategia debe responder visualmente:

### Cuándo puede ser útil
### Cuál es la idea
### Ejemplo breve

No utilizar textos largos.

---

# 9. EJEMPLO INTEGRADOR

El ejemplo integrador debe ser una parte central de la experiencia.

Utilizar:

lim x→2 [(x² − 4)/(x − 2)]

Mostrar el proceso como una secuencia interactiva:

1. Sustitución directa.
2. Obtención de 0/0.
3. Identificación de la estrategia.
4. Factorización.
5. Simplificación.
6. Cálculo del límite.
7. Resultado.

La explicación debe indicar brevemente por qué se eligió factorización.

El usuario debería poder avanzar paso por paso.

---

# 10. ALERTAS

Incorporar alertas visuales contextuales.

Ejemplos:

- “0/0 no significa que el límite sea 0.”
- “Una indeterminación NO es el resultado del límite.”
- “No cancelar términos que no sean factores.”
- “Analizar la expresión antes de aplicar una técnica.”
- “No confundir forma indeterminada con límite infinito.”
- “Si los límites laterales son distintos, el límite no existe.”

No llenar la interfaz de advertencias.

Solo mostrar las necesarias en el contexto adecuado.

---

# 11. OTRAS FORMAS INDETERMINADAS

Los apuntes incluyen además:

- 0·∞
- 1^∞
- 0^0
- ∞^0

Estas formas pueden aparecer en una sección secundaria.

No convertirlas automáticamente en ramas principales del árbol.

Primero analizá los materiales y determiná cómo conviene presentarlas sin sobrecargar la experiencia.

---

# 12. ASISTENTE DE IA

La aplicación puede incorporar una funcionalidad de asistencia mediante IA.

Antes de implementarla, analizá técnicamente:

- qué modelo tendría sentido utilizar;
- cómo se accedería;
- qué credenciales serían necesarias;
- qué costos o limitaciones existen;
- cómo evitar que el sistema invente procedimientos.

No asumas que existe una API disponible.

Si se necesita una API key o configuración externa, preguntame antes de implementarla.

El asistente debe orientar el análisis de un límite y no reemplazar completamente el razonamiento del estudiante.

---

# 13. DISEÑO VISUAL

La estética debe ser:

- moderna;
- limpia;
- académica;
- minimalista;
- profesional;
- clara;
- visualmente atractiva;
- no infantil.

Utilizar una paleta limitada y neutra.

Preferencias:

- azul oscuro → navegación / estructura;
- verde → estrategias;
- naranja → ejemplos;
- rojo o coral → alertas.

Usar mucho espacio en blanco.

Priorizar legibilidad.

Las expresiones matemáticas deben tener tratamiento tipográfico profesional.

No deformar:

- fracciones;
- raíces;
- exponentes;
- símbolos;
- límites;
- signos matemáticos.

---

# 14. UX/UI

La aplicación debe ser cómoda para estudiantes.

Debe:

- funcionar correctamente en escritorio;
- ser responsive;
- tener navegación clara;
- evitar saturación;
- mostrar información progresivamente;
- utilizar microinteracciones únicamente cuando aporten claridad;
- mantener consistencia visual.

No agregar animaciones simplemente por estética.

---

# 15. ARQUITECTURA

No impongas una cantidad determinada de páginas, componentes o archivos.

Analizá el proyecto y decidí la arquitectura más adecuada.

Podés utilizar:

- una sola vista;
- varias vistas;
- componentes;
- rutas;
- modales;
- paneles;
- secciones dinámicas;

según lo que consideres técnicamente más apropiado.

La decisión debe responder a UX y mantenibilidad, no a cumplir una cantidad arbitraria de páginas.

---

# 16. STACK TECNOLÓGICO

Antes de elegir tecnologías:

1. inspeccioná el entorno;
2. revisá qué está disponible;
3. evaluá qué stack es más conveniente;
4. explicame brevemente la decisión.

No agregues dependencias innecesarias.

El proyecto deberá poder desplegarse en Vercel.

La implementación debe tener en cuenta desde el principio:

- build;
- variables de entorno;
- rutas;
- assets;
- configuración de producción;
- compatibilidad con Vercel.

---

# 17. DOCUMENTACIÓN

El proyecto deberá contemplar también la documentación del trabajo práctico.

La documentación debe poder explicar:

1. de qué trata el proyecto;
2. cómo surgió la idea;
3. cómo analizamos la consigna;
4. cómo investigamos y revisamos los contenidos;
5. cómo diseñamos la solución;
6. cómo utilizamos IA;
7. qué decisiones tomó el grupo;
8. qué errores o modificaciones detectamos;
9. cómo evolucionó el producto;
10. conclusión;
11. herramientas utilizadas;
12. fuentes consultadas.

La documentación no debe ser un agregado improvisado al final.

Tené en cuenta desde el comienzo qué evidencias del proceso conviene conservar.

---

# 18. USO CRÍTICO DE IA

Este trabajo evalúa específicamente el uso crítico de IA.

Por lo tanto:

NO copiar ciegamente resultados generados por IA.

Toda información matemática debe ser revisada.

Cuando encuentres una posible contradicción entre:

- la IA;
- los apuntes;
- la consigna;

detenete y señalámela.

No decidas silenciosamente cuál es correcta.

---

# 19. CALIDAD

Antes de considerar terminado el proyecto, realizá una revisión integral:

### Matemática
- fórmulas;
- procedimientos;
- ejemplos;
- resultados;
- condiciones de aplicación.

### UX
- navegación;
- claridad;
- legibilidad;
- coherencia.

### UI
- responsive;
- jerarquía;
- tipografía;
- espacios;
- consistencia.

### Técnica
- errores;
- consola;
- build;
- dependencias;
- rutas;
- producción.

### Académica
- cumplimiento de la consigna;
- uso crítico de IA;
- inclusión de los contenidos requeridos.

---

# 20. MODO DE INTERACCIÓN CONMIGO

Quiero trabajar de manera progresiva.

No avances automáticamente varios niveles del proyecto sin mostrarme lo realizado.

Después de cada etapa importante:

1. explicá qué hiciste;
2. mostrámelo;
3. indicá qué falta;
4. preguntame si avanzamos.

Si necesitás una decisión importante, preguntame antes de asumirla.

Si una decisión técnica tiene varias alternativas razonables, explicame brevemente las opciones y recomendá una en función del proyecto, sin implementar hasta que la apruebe.

---

# 21. REGLA PRINCIPAL

El resultado final debe sentirse como:

> una herramienta educativa interactiva diseñada por estudiantes universitarios,

no como una página genérica generada por IA.

La prioridad es:

MATEMÁTICA CORRECTA
>
CLARIDAD
>
USABILIDAD
>
DISEÑO
>
DECORACIÓN

---

# 22. PRIMERA ACCIÓN

Comenzá únicamente con la FASE 1:

- inspeccionar el entorno;
- revisar la estructura del proyecto;
- localizar la consigna y los apuntes;
- analizar los recursos disponibles;
- determinar qué necesitás;
- proponer una arquitectura inicial.

NO programes todavía.

Cuando termines ese análisis, presentame tus conclusiones y las preguntas que necesites resolver conmigo.