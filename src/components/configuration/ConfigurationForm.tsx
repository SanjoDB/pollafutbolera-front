"use client";
import * as React from "react";
import { useState } from "react";
import { ProgressSteps } from "../nav/ProgressSteps";
import { UploadArea } from "../inputs/UploadArea";
import { ColorPicker } from "../inputs/ColorPicker";
import { TimeInput } from "../inputs/TimeInput";
import { NavigationButtons } from "../nav/NavigationButtons";

export function ConfigurationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [points, setPoints] = useState({
    tournamentChampion: 0,
    teamWithMostGoals: 0,
    exactScore: 0,
    teamScore: 0,
    matchWinner: 0,
    subchampion: 0,
  });
  const [formData, setFormData] = useState({
    pollaName: "",
    additionalRules: "",
    visibility: "public",
    startDate: "",
    endDate: "",
    firstPrizeTitle: "",
    firstPrizeDescription: "",
    secondPrizeTitle: "",
    secondPrizeDescription: "",
    thirdPrizeTitle: "",
    thirdPrizeDescription: "",
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [firstPrizeFile, setFirstPrizeFile] = useState<File | null>(null);
  const [secondPrizeFile, setSecondPrizeFile] = useState<File | null>(null);
  const [thirdPrizeFile, setThirdPrizeFile] = useState<File | null>(null);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const incrementPoints = (rule: keyof typeof points) => {
    setPoints((prevPoints) => ({
      ...prevPoints,
      [rule]: prevPoints[rule] + 1,
    }));
  };

  const decrementPoints = (rule: keyof typeof points) => {
    setPoints((prevPoints) => ({
      ...prevPoints,
      [rule]: prevPoints[rule] > 0 ? prevPoints[rule] - 1 : 0,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main className="flex flex-col px-14 mt-16 w-full h-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h1 className="self-start text-3xl font-bold text-black max-md:ml-2">
        Configuracion de la Polla
      </h1>
      <div className="shrink-0 mt-3 h-1.5 bg-black max-md:max-w-full" />

      <section className="flex flex-col items-center self-center px-16 pt-3 pb-10 mt-11 max-w-full bg-white border border-solid shadow-lg border-[color:var(--Neutral-300,#EFF0F6)] rounded-[34px] w-[768px] max-md:px-5 max-md:mt-10">
        <ProgressSteps currentStep={currentStep} />

        {currentStep === 1 && (
          <div className="flex flex-col w-full">
            <h2 className="self-start mt-16 text-3xl font-bold leading-none text-black max-md:mt-10">
              Datos de la polla
            </h2>
            <label className="self-start mt-9 text-lg font-semibold leading-none text-black">
              Logo de la Polla Personalizada
            </label>
            <div className="self-center w-full mt-5">
              <UploadArea file={logoFile} setFile={setLogoFile} />
            </div>
            <label className="self-start mt-12 text-lg font-semibold leading-none text-black max-md:mt-10">
              Color Polla Personalizada
            </label>
            <div className="self-start w-full mt-5">
              <ColorPicker />
            </div>
            <label className="self-start mt-10 text-lg font-semibold leading-none text-black">
              Visibilidad de la polla
            </label>
            <div className="self-start mt-5">
              <input
                type="radio"
                id="public"
                name="visibility"
                value="public"
                checked={formData.visibility === "public"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="public" className="mr-5 text-black">Pública</label>
              <input
                type="radio"
                id="private"
                name="visibility"
                value="private"
                checked={formData.visibility === "private"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="private" className="text-black">Privada</label>
            </div>

            <label className="self-start mt-10 text-lg font-semibold leading-none text-black">
              Fecha y hora de inicio
            </label>
            <input
              type="datetime-local"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="flex shrink-0 self-start mt-5 max-w-full bg-white text-black border border-solid shadow-sm border-[color:var(--Neutral-300,#EFF0F6)] h-[66px] rounded-[46px] w-[600px] p-4"
            />
            <label className="self-start mt-10 text-lg font-semibold leading-none text-black">
              Fecha y hora de finalización
            </label>
            <input
              type="datetime-local"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="flex shrink-0 self-start mt-5 max-w-full bg-white text-black border border-solid shadow-sm border-[color:var(--Neutral-300,#EFF0F6)] h-[66px] rounded-[46px] w-[600px] p-4"
            />
            
          </div>
        )}

        {currentStep === 2 && (
          <div className="flex flex-col w-full">
            <h2 className="self-start mt-16 text-3xl font-bold leading-none text-black max-md:mt-10">
              Sistema de puntos
            </h2>
            <div className="flex items-center justify-between mt-7 w-full">
              <label className="text-lg font-semibold leading-none text-black">
                Campeón del torneo
              </label>
              <div className="flex items-center">
                <button onClick={() => decrementPoints('tournamentChampion')} className="w-8 h-8 bg-white border border-black text-black rounded-full">-</button>
                <span className="px-4 py-1 bg-white text-black">{points.tournamentChampion}</span>
                <button onClick={() => incrementPoints('tournamentChampion')} className="w-8 h-8 bg-white border border-black text-black rounded-full">+</button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-7 w-full">
              <label className="text-lg font-semibold leading-none text-black">
                Equipo con más goles
              </label>
              <div className="flex items-center">
                <button onClick={() => decrementPoints('teamWithMostGoals')} className="w-8 h-8 bg-white border border-black text-black rounded-full">-</button>
                <span className="px-4 py-1 bg-white text-black">{points.teamWithMostGoals}</span>
                <button onClick={() => incrementPoints('teamWithMostGoals')} className="w-8 h-8 bg-white border border-black text-black rounded-full">+</button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-7 w-full">
              <label className="text-lg font-semibold leading-none text-black">
                Marcador exacto
              </label>
              <div className="flex items-center">
                <button onClick={() => decrementPoints('exactScore')} className="w-8 h-8 bg-white border border-black text-black rounded-full">-</button>
                <span className="px-4 py-1 bg-white text-black">{points.exactScore}</span>
                <button onClick={() => incrementPoints('exactScore')} className="w-8 h-8 bg-white border border-black text-black rounded-full">+</button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-7 w-full">
              <label className="text-lg font-semibold leading-none text-black">
                Goles de un equipo
              </label>
              <div className="flex items-center">
                <button onClick={() => decrementPoints('teamScore')} className="w-8 h-8 bg-white border border-black text-black rounded-full">-</button>
                <span className="px-4 py-1 bg-white text-black">{points.teamScore}</span>
                <button onClick={() => incrementPoints('teamScore')} className="w-8 h-8 bg-white border border-black text-black rounded-full">+</button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-7 w-full">
              <label className="text-lg font-semibold leading-none text-black">
                Ganador del partido
              </label>
              <div className="flex items-center">
                <button onClick={() => decrementPoints('matchWinner')} className="w-8 h-8 bg-white border border-black text-black rounded-full">-</button>
                <span className="px-4 py-1 bg-white text-black">{points.matchWinner}</span>
                <button onClick={() => incrementPoints('matchWinner')} className="w-8 h-8 bg-white border border-black text-black rounded-full">+</button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-7 w-full">
              <label className="text-lg font-semibold leading-none text-black">
                Subcampeón
              </label>
              <div className="flex items-center">
                <button onClick={() => decrementPoints('subchampion')} className="w-8 h-8 bg-white border border-black text-black rounded-full">-</button>
                <span className="px-4 py-1 bg-white text-black">{points.subchampion}</span>
                <button onClick={() => incrementPoints('subchampion')} className="w-8 h-8 bg-white border border-black text-black rounded-full">+</button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="flex flex-col w-full justifyitems-center">
            <h2 className="self-center mt-16 text-3xl font-bold leading-none text-black max-md:mt-10">
              Premio primer puesto
            </h2>
            <p className="self-center mt-2 text-lg leading-none text-black">
              Ingrese información del premio para el primer puesto
            </p>
            <div className="flex justify-between mt-7 w-full">
              <input
                type="text"
                name="firstPrizeTitle"
                value={formData.firstPrizeTitle}
                onChange={handleInputChange}
                placeholder="Título"
                className="flex shrink-0 bg-white text-black border border-solid shadow-sm border-[color:var(--Neutral-300,#EFF0F6)] h-[66px] rounded-[46px] w-[48%] p-4"
              />
              <input
                type="text"
                name="firstPrizeDescription"
                value={formData.firstPrizeDescription}
                onChange={handleInputChange}
                placeholder="Descripción"
                className="flex shrink-0 bg-white text-black border border-solid shadow-sm border-[color:var(--Neutral-300,#EFF0F6)] h-[66px] rounded-[46px] w-[48%] p-4"
              />
            </div>
            <div className="self-center w-full mt-5">
              <UploadArea file={firstPrizeFile} setFile={setFirstPrizeFile} />
            </div>
            <div className="shrink-0 mt-7 h-0.5 bg-black w-full" />

            <h2 className="self-center mt-16 text-3xl font-bold leading-none text-black max-md:mt-10">
              Premio segundo puesto
            </h2>
            <p className="self-center mt-2 text-lg leading-none text-black">
              Ingrese información del premio para el segundo puesto
            </p>
            <div className="flex justify-between mt-7 w-full">
              <input
                type="text"
                name="secondPrizeTitle"
                value={formData.secondPrizeTitle}
                onChange={handleInputChange}
                placeholder="Título"
                className="flex shrink-0 bg-white text-black border border-solid shadow-sm border-[color:var(--Neutral-300,#EFF0F6)] h-[66px] rounded-[46px] w-[48%] p-4"
              />
              <input
                type="text"
                name="secondPrizeDescription"
                value={formData.secondPrizeDescription}
                onChange={handleInputChange}
                placeholder="Descripción"
                className="flex shrink-0 bg-white text-black border border-solid shadow-sm border-[color:var(--Neutral-300,#EFF0F6)] h-[66px] rounded-[46px] w-[48%] p-4"
              />
            </div>
            <div className="self-center w-full mt-5">
              <UploadArea file={secondPrizeFile} setFile={setSecondPrizeFile} />
            </div>
            <div className="shrink-0 mt-7 h-0.5 bg-black w-full" />

            <h2 className="self-center mt-16 text-3xl font-bold leading-none text-black max-md:mt-10">
              Premio tercer puesto
            </h2>
            <p className="self-center mt-2 text-lg leading-none text-black">
              Ingrese información del premio para el tercer puesto
            </p>
            <div className="flex justify-between mt-7 w-full">
              <input
                type="text"
                name="thirdPrizeTitle"
                value={formData.thirdPrizeTitle}
                onChange={handleInputChange}
                placeholder="Título"
                className="flex shrink-0 bg-white text-black border border-solid shadow-sm border-[color:var(--Neutral-300,#EFF0F6)] h-[66px] rounded-[46px] w-[48%] p-4"
              />
              <input
                type="text"
                name="thirdPrizeDescription"
                value={formData.thirdPrizeDescription}
                onChange={handleInputChange}
                placeholder="Descripción"
                className="flex shrink-0 bg-white text-black border border-solid shadow-sm border-[color:var(--Neutral-300,#EFF0F6)] h-[66px] rounded-[46px] w-[48%] p-4"
              />
            </div>
            <div className="self-center w-full mt-5">
              <UploadArea file={thirdPrizeFile} setFile={setThirdPrizeFile} />
            </div>
          </div>
        )}
      </section>

      <NavigationButtons onNext={handleNext} onPrevious={handlePrevious} currentStep={currentStep} formData={formData} />
    </main>
  );
}
