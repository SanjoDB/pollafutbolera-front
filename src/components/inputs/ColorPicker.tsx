"use client";
import * as React from "react";

export function ColorPicker() {
  const [hexValue, setHexValue] = React.useState("#4F46E5");
  const [percentage, setPercentage] = React.useState(100);

  const handleHexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHexValue(event.target.value);
  };

  const handlePercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(Number(event.target.value));
  };

  const handlePercentageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= 0 && value <= 100) {
      setPercentage(value);
    }
  };

  return (
    <div className="flex gap-4 items-center mt-3 max-w-full text-sm leading-none text-gray-700 w-full h-full justify-center">
      <div className="flex items-start flex-none w-[50px]">
        <div className="flex flex-1 gap-1 items-center px-1.5 py-1 w-full bg-white rounded border border-solid shadow-sm border-[color:var(--coolGray-200,#E5E7EB)]">
          <span className="flex-1">Hex</span>
        </div>
      </div>
      <div className="flex items-start flex-1">
        <input
          type="text"
          value={hexValue}
          onChange={handleHexChange}
          className="flex-1 px-1 py-1 w-full bg-white rounded border border-solid shadow-sm border-[color:var(--coolGray-200,#E5E7EB)]"
          style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
        />
      </div>
      <div className="flex items-center flex-1 justify-center h-full">
        <input
          type="range"
          value={percentage}
          onChange={handlePercentageChange}
          min="0"
          max="100"
          className="flex-1 w-full"
        />
        <input
          type="number"
          value={percentage}
          onChange={handlePercentageInputChange}
          min="0"
          max="100"
          className="ml-2 w-12 text-center bg-white rounded border border-solid shadow-sm border-[color:var(--coolGray-200,#E5E7EB)]"
        />
      </div>
      <div className="flex items-start flex-1 w-full h-full">
        <div
          className="flex-1 px-1.5 py-2.5 w-full h-full bg-white rounded border border-solid shadow-sm border-[color:var(--coolGray-200,#E5E7EB)]"
          style={{ backgroundColor: hexValue, opacity: percentage / 100 }}
        />
      </div>
    </div>
  );
}
