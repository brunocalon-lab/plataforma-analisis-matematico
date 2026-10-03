import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import HubPage from './pages/HubPage';
import RecorridoPage from './pages/RecorridoPage';
import LimitesPage from './pages/LimitesPage';
import IndeterminacionesPage from './pages/IndeterminacionesPage';
import AsintotasPage from './pages/AsintotasPage';
import PartidasPage from './pages/PartidasPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

// Componente para restablecer el scroll al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HubPage />} />
          <Route path="/recorrido" element={<RecorridoPage />} />
          <Route path="/recorrido/:paso" element={<RecorridoPage />} />
          <Route path="/limites" element={<LimitesPage />} />
          <Route path="/indeterminaciones" element={<IndeterminacionesPage />} />
          <Route path="/asintotas" element={<AsintotasPage />} />
          <Route path="/partidas" element={<PartidasPage />} />
          <Route path="/acerca" element={<AboutPage />} />
          {/* 404 personalizada */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
