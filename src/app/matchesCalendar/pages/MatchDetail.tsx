
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import MatchDetailHeader from '@/components/MatchDetailHeader';
import TeamDetail from '@/components/TeamDetail';
import MatchEvents from '@/components/MatchEvents';
import MatchStatus from '@/components/MatchStatus';
import { getMatchById } from '@/services/matchService';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

const MatchDetail = () => {
  const { matchId } = useParams<{ matchId: string }>();
  
  const { data: match, isLoading, error } = useQuery({
    queryKey: ['match', matchId],
    queryFn: () => getMatchById(matchId || ''),
    enabled: !!matchId,
  });

  if (!matchId) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8 px-4 md:py-12 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            <div className="space-y-8">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-64 w-full rounded-xl" />
              <Skeleton className="h-48 w-full rounded-xl" />
            </div>
          ) : error || !match ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              Match not found or an error occurred. Please try again later.
            </div>
          ) : (
            <div className="space-y-8">
              <MatchDetailHeader match={match} />
              
              <Card className="overflow-hidden border-0 shadow-lg animate-scale-in">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold">Match Details</h2>
                      <MatchStatus status={match.status} />
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
                      <TeamDetail 
                        team={match.homeTeam} 
                        score={match.score?.home} 
                        isHome={true} 
                      />
                      
                      <div className="text-xl md:text-2xl font-light text-muted-foreground">
                        vs
                      </div>
                      
                      <TeamDetail 
                        team={match.awayTeam} 
                        score={match.score?.away} 
                        isHome={false} 
                      />
                    </div>
                  </div>
                  
                  {match.events && match.events.length > 0 && (
                    <div className="p-6 md:p-8">
                      <MatchEvents events={match.events} />
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card className="animate-slide-in">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold mb-4">Head to Head History</h2>
                  <p className="text-muted-foreground">
                    Previous matches between {match.homeTeam.name} and {match.awayTeam.name} 
                    will be displayed here. This section is under development.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MatchDetail;
