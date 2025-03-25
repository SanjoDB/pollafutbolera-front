import React from 'react';
import { format } from 'date-fns';
import MatchCard from './MatchCard';
import { Match } from '../types/match';
import { cn } from '../lib/utils';

interface MatchesListProps {
  matches: Match[];
  className?: string;
}

const MatchesList: React.FC<MatchesListProps> = ({ matches, className }) => {
  // Group matches by date
  const matchesByDate: Record<string, Match[]> = matches.reduce((acc, match) => {
    const dateKey = format(new Date(match.date), 'yyyy-MM-dd');
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(match);
    return acc;
  }, {} as Record<string, Match[]>);

  // Sort dates
  const sortedDates = Object.keys(matchesByDate).sort();

  return (
    <div className={cn('space-y-8', className)}>
      {sortedDates.map((dateKey) => (
        <div key={dateKey} className="animate-fade-in">
          <h2 className="text-xl font-medium mb-4">
            {format(new Date(dateKey), 'EEEE d MMMM yyyy')}
          </h2>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {matchesByDate[dateKey].map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchesList;