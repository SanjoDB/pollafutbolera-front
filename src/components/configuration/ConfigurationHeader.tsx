"use client";
import * as React from "react";

export function ConfigurationHeader() {
  return (
    <header className="flex flex-wrap gap-10 items-start pr-20 pl-6 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex-auto self-start max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[29%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/382bb3b543dae9158c0f0f688df1ed77319f3d86b8e631c12198a5985ce186d8?placeholderIfAbsent=true"
              alt="Logo"
              className="object-contain grow shrink-0 max-w-full aspect-[1.28] w-[141px] max-md:mt-10"
            />
          </div>

        </div>
      </div>
  
    </header>
  );
}
