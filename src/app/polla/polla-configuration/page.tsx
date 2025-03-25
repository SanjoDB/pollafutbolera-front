"use client";
import * as React from "react";
import { ConfigurationHeader } from "../../../components/configuration/ConfigurationHeader";
import { ConfigurationForm } from "../../../components/configuration/ConfigurationForm";

export default function PollaConfiguration() {
  return (
    <div className="overflow-hidden">
      <div className="w-full bg-slate-100 max-md:max-w-full">
        <ConfigurationHeader />
        <ConfigurationForm />

        <div
          className="object-contain mt-16 w-full aspect-[4.12] max-md:mt-10 max-md:max-w-full"
        />
        
      </div>
    </div>
  );
}

