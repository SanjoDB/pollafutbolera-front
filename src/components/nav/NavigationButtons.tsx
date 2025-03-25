"use client";
import * as React from "react";
import { PollaService } from "../../services/polla.service";

interface NavigationButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
  currentStep: number;
  formData: any;
}

export function NavigationButtons({ onNext, onPrevious, currentStep, formData }: NavigationButtonsProps) {
  const pollaService = new PollaService("https://api.example.com");

  const handleCreatePolla = async () => {
    try {
      await pollaService.createPolla(formData);
      alert("Torneo creado exitosamente");
    } catch (error) {
      console.error("Error creando el torneo", error);
      alert("Hubo un error al crear el torneo");
    }
  };

  return (
    <nav className="flex flex-wrap gap-5 justify-between self-center mt-10 max-w-full text-lg leading-none text-center whitespace-nowrap w-[768px] max-md:mt-10">
      <button
        className="px-10 pt-5 pb-5 text-indigo-600 border border-indigo-800 border-solid rounded-[66px] max-md:px-5 hover:bg-indigo-100"
        onClick={onPrevious}
        disabled={currentStep === 1}
      >
        Anterior
      </button>
      <button
        className="gap-2 self-stretch px-10 pt-5 pb-5 font-bold text-white bg-indigo-800 rounded-[56px] shadow-[0px_3px_12px_rgba(74,58,255,0.18)] max-md:px-5 hover:bg-indigo-600"
        onClick={currentStep === 3 ? handleCreatePolla : onNext}
      >
        {currentStep === 3 ? "Crear Polla" : "Siguiente"}
      </button>
    </nav>
  );
}
