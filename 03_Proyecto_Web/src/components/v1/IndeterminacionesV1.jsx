import React, { useState } from 'react';
import Navbar from '../Navbar';
import ContinuousFlowBar from '../ContinuousFlowBar';
import HeroBanner from '../HeroBanner';
import SubstitutionSection from '../SubstitutionSection';
import IdentificationSection from '../IdentificationSection';
import DecisionTreeSection from '../DecisionTreeSection';
import IntegrativeExampleSection from '../IntegrativeExampleSection';
import DiagnosticAssistant from '../DiagnosticAssistant';
import CommonErrorsSection from '../CommonErrorsSection';
import SecondaryFormsModal from '../SecondaryFormsModal';

/**
 * Componente original V1 preservado intacto para migración 1:1 en Fase 2.
 */
export default function IndeterminacionesV1() {
  const [activeSection, setActiveSection] = useState('sustitucion');
  const [currentStage, setCurrentStage] = useState('sustitucion');
  const [selectedForm, setSelectedForm] = useState('0/0');
  const [isSecondaryModalOpen, setIsSecondaryModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
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

  return (
    <div className="v1-container">
      <Navbar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />
      <ContinuousFlowBar 
        currentStage={currentStage} 
        onSelectStage={handleSelectStage} 
      />
      <div className="main-content">
        <HeroBanner 
          onStartDiagnosis={() => scrollToSection('sustitucion')}
          onGoToExample={() => scrollToSection('ejemplo')}
        />
        <SubstitutionSection 
          onProceedToIdentification={() => {
            setCurrentStage('identificacion');
            scrollToSection('identificacion');
          }}
        />
        <IdentificationSection 
          selectedForm={selectedForm}
          onSelectForm={handleSelectForm}
          onOpenSecondaryModal={() => setIsSecondaryModalOpen(true)}
        />
        <DecisionTreeSection 
          selectedForm={selectedForm}
          onSelectForm={setSelectedForm}
        />
        <IntegrativeExampleSection />
        <DiagnosticAssistant 
          onNavigateToTree={(formId) => {
            setSelectedForm(formId);
            scrollToSection('arbol');
          }}
        />
        <CommonErrorsSection />
      </div>
      <SecondaryFormsModal 
        isOpen={isSecondaryModalOpen} 
        onClose={() => setIsSecondaryModalOpen(false)} 
      />
    </div>
  );
}
