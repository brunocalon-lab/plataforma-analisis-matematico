/**
 * GESTOR DE PROGRESO Y PERSISTENCIA (LOCALSTORAGE)
 * Namespace obligatorio: am1.progress.v2
 * Sin backend, seguro contra corrupción o almacenamiento bloqueado.
 */

const STORAGE_KEY = 'am1.progress.v2';

const DEFAULT_STATE = {
  recorridoStep: 1,
  maxStepReached: 1,
  lastRoute: '/',
  visitedModules: ['hub'],
  timestamp: Date.now()
};

export function getStoredProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATE, ...parsed };
  } catch (err) {
    console.warn('Error leyendo localStorage am1.progress.v2:', err);
    return DEFAULT_STATE;
  }
}

export function saveRecorridoStep(stepNumber) {
  try {
    const current = getStoredProgress();
    const updated = {
      ...current,
      recorridoStep: stepNumber,
      maxStepReached: Math.max(current.maxStepReached || 1, stepNumber),
      timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.warn('Error guardando progreso en am1.progress.v2:', err);
    return DEFAULT_STATE;
  }
}

export function saveLastRoute(routePath) {
  try {
    const current = getStoredProgress();
    const updated = {
      ...current,
      lastRoute: routePath,
      timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    return DEFAULT_STATE;
  }
}

export function resetProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn('Error reiniciando progreso:', err);
  }
  return DEFAULT_STATE;
}
