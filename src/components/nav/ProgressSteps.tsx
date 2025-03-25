"use client";
import * as React from "react";

interface ProgressStepsProps {
  currentStep: number;
}

export function ProgressSteps({ currentStep }: ProgressStepsProps) {
  return (
    <div className="flex gap-2 self-center max-w-full w-full md:w-[370px]">
      <span className={`px-3.5 text-base font-medium leading-none text-white whitespace-nowrap rounded-full h-[34px] w-[34px] flex items-center justify-center ${currentStep >= 1 ? 'bg-indigo-600' : 'bg-gray-200 text-gray-500'}`}>
        1
      </span>
      <div className={`flex shrink-0 my-auto h-1.5 rounded-[40px] ${currentStep >= 2 ? 'bg-indigo-600 flex-1' : 'bg-gray-300 flex-1'}`} />
      <span className={`px-3.5 text-base font-medium leading-none whitespace-nowrap rounded-full h-[34px] w-[34px] flex items-center justify-center ${currentStep >= 2 ? 'bg-indigo-600' : 'bg-gray-200 text-gray-500'}`}>
        2
      </span>
      <div className={`flex shrink-0 my-auto h-1.5 rounded-[40px] ${currentStep >= 3 ? 'bg-indigo-600 flex-1' : 'bg-gray-300 flex-1'}`} />
      <span className={`px-3 text-base leading-none whitespace-nowrap rounded-full h-[34px] w-[34px] flex items-center justify-center ${currentStep >= 3 ? 'bg-indigo-600' : 'bg-gray-200 text-gray-500'}`}>
        3
      </span>
    </div>
  );
}
