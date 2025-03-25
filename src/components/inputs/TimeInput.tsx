"use client";
import * as React from "react";

export function TimeInput() {
  const [time, setTime] = React.useState(30);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(Number(event.target.value));
  };

  return (
    <div className="flex mt-4 max-w-full whitespace-nowrap w-[239px]">
      <div className="flex overflow-hidden flex-col justify-center px-5 py-3.5 text-sm font-medium leading-snug text-center text-black bg-white">
        <div className="flex gap-4 items-center">
          <button
            className="flex shrink-0 self-stretch my-auto w-6 h-6"
            aria-label="Decrease time"
          />
          <input
            type="text"
            value={time}
            onChange={handleChange}
            className="overflow-hidden self-stretch p-4 my-auto bg-white border border-sky-700 border-solid w-[55px] text-center"
          />
          <button
            className="flex shrink-0 self-stretch my-auto w-6 h-6"
            aria-label="Increase time"
          />
        </div>
      </div>
      <span className="my-auto text-lg leading-none text-slate-500">
        Minutos
      </span>
    </div>
  );
}
