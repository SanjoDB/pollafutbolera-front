
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import MatchesList from '@/components/MatchesList';
import { getMatches } from '@/services/matchService';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const { data: matches, isLoading, error } = useQuery({
    queryKey: ['matches'],
    queryFn: getMatches,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8 px-4 md:py-12 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Football Matches</h1>
          <p className="text-muted-foreground mb-8">View upcoming and past football matches from around the world</p>
          
          {isLoading ? (
            <div className="space-y-8">
              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  <Skeleton className="h-40 w-full rounded-xl" />
                  <Skeleton className="h-40 w-full rounded-xl" />
                </div>
              </div>
              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  <Skeleton className="h-40 w-full rounded-xl" />
                  <Skeleton className="h-40 w-full rounded-xl" />
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              An error occurred while loading matches. Please try again later.
            </div>
          ) : (
            matches && <MatchesList matches={matches} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
