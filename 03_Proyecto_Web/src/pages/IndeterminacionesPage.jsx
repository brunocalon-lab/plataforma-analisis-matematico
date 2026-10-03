import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Compass, 
  Layers, 
  GitBranch, 
  BookOpen, 
  Sparkles, 
  AlertTriangle,
  TrendingUp
} from 'lucide-react';
import ContinuousFlowBar from '../components/ContinuousFlowBar';
import HeroBanner from '../components/HeroBanner';
import SubstitutionSection from '../components/SubstitutionSection';
import IdentificationSection from '../components/IdentificationSection';
import DecisionTreeSection from '../components/DecisionTreeSection';
import IntegrativeExampleSection from '../components/IntegrativeExampleSection';
import DiagnosticAssistant from '../components/DiagnosticAssistant';
import CommonErrorsSection from '../components/CommonErrorsSection';
import SecondaryFormsModal from '../components/SecondaryFormsModal';

export default function IndeterminacionesPage() {
  const [activeSubSection, setActiveSubSection] = useState('sustitucion');
  const [currentStage, setCurrentStage] = useState('sustitucion');
  const [selectedForm, setSelectedForm] = useState('0/0');
  const [isSecondaryModalOpen, setIsSecondaryModalOpen] = useState(false);

  // Navegación interna por anclas con scroll suave
  const scrollToSection = (sectionId) => {
    setActiveSubSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectStage = (stageId) => {
    setCurrentStage(stageId);
    if (stageId === 'sustitucion') scrollToSection('sustitucion');
    else if (stageId === 'identificacion') scrollToSection('identificacion');
    else if (stageId === 'diagnostico' || stageId === 'estrategia') scrollToSection('arbol');
    else if (stageId === 'transformacion' || stageId === 'resultado') scrollToSection('ejemplo');
  };

  const handleSelectForm = (formId) => {
    setSelectedForm(formId);
    setCurrentStage('diagnostico');
    scrollToSection('arbol');
  };

  const subNavItems = [
    { id: 'sustitucion', label: '1. Sustitución', icon: Compass },
    { id: 'identificacion', label: '2. Formas', icon: Layers },
    { id: 'arbol', label: '3. Árbol de Estrategias', icon: GitBranch },
    { id: 'ejemplo', label: '4. Ejemplo Integrador', icon: BookOpen },
    { id: 'asistente', label: '5. Diagnóstico', icon: Sparkles },
    { id: 'errores', label: '6. Errores', icon: AlertTriangle },
  ];

  return (
    <div className="indeterminaciones-page">
      {/* Barra de Migas de Pan y Contexto */}
      <div className="module-breadcrumb-bar">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          <span>Hub Principal</span>
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Módulo C · Indeterminaciones</span>
        <span className="module-badge-validated badge-green">Estrategias y Factorización</span>
      </div>

      {/* Sub-navegador de secciones internas de la Guía */}
      <div className="indeterminaciones-subnav">
        {subNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`subnav-pill ${activeSubSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              <Icon size={14} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Barra Continua de Diagnóstico (Pipeline 6 pasos) */}
      <ContinuousFlowBar 
        currentStage={currentStage} 
        onSelectStage={handleSelectStage} 
      />

      <div className="indeterminaciones-content">
        {/* Banner Hero con Alerta Crítica Principal */}
        <HeroBanner 
          onStartDiagnosis={() => scrollToSection('sustitucion')}
          onGoToExample={() => scrollToSection('ejemplo')}
        />

        {/* Etapa 1: Sustitución Directa (con puente a Asíntotas) */}
        <SubstitutionSection 
          onProceedToIdentification={() => {
            setCurrentStage('identificacion');
            scrollToSection('identificacion');
          }}
        />

        {/* Etapa 2: Identificación de la Indeterminación */}
        <IdentificationSection 
          selectedForm={selectedForm}
          onSelectForm={handleSelectForm}
          onOpenSecondaryModal={() => setIsSecondaryModalOpen(true)}
        />

        {/* Etapa 3 y 4: Diagnóstico y Árbol de Decisiones (con acordeón en mobile) */}
        <DecisionTreeSection 
          selectedForm={selectedForm}
          onSelectForm={setSelectedForm}
        />

        {/* Etapa 5 y 6: Laboratorio del Ejemplo Integrador */}
        <IntegrativeExampleSection />

        {/* Asistente Diagnóstico Determinístico */}
        <DiagnosticAssistant 
          onNavigateToTree={(formId) => {
            setSelectedForm(formId);
            scrollToSection('arbol');
          }}
        />

        {/* Alertas, Errores Frecuentes y Enlaces de Salida Suaves */}
        <CommonErrorsSection />
      </div>

      {/* Modal / Vista de Formas Secundarias */}
      <SecondaryFormsModal 
        isOpen={isSecondaryModalOpen} 
        onClose={() => setIsSecondaryModalOpen(false)} 
      />
    </div>
  );
}
