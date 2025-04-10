"use client";
import React from 'react';
import Navbar from '@/components/Navbar';

const Statistics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8 px-4 md:py-12 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Statistics</h1>
          <p className="text-muted-foreground mb-8">View comprehensive statistics for teams and players</p>
          
          <div className="bg-muted/50 rounded-lg p-12 text-center">
            <h2 className="text-xl font-medium mb-2">Coming Soon</h2>
            <p className="text-muted-foreground">
              The statistics section is currently under development.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Statistics;
