import React from 'react';
import Link from 'next/link'; // Usar Link de Next.js
import { format } from 'date-fns';
import TeamFlag from './TeamFlag';
import MatchStatus from './MatchStatus';
import { Match } from '../types/match'; // Ajusta la importación según tu tipo de datos
import { cn } from '../lib/utils';

interface MatchCardProps {
  match: Match;
  className?: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, className }) => {
  const isFinished = match.status === 'finished';
  const isLive = match.status === 'live';
  
  return (
    <Link 
      href={`/matchesCalendar/${match.id}`} // Usamos el href adecuado para Next.js
      className={cn(
        'match-card block rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition-all',
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-muted-foreground">
          {format(new Date(match.date), 'EEEE d MMMM yyyy')}
        </div>
        <MatchStatus status={match.status} />
      </div>
      
      <div className="flex items-center justify-between py-3">
        <div className="flex flex-1 items-center">
          <TeamFlag country={match.homeTeam.name} size="md" />
          <div className="ml-3">
            <h3 className="font-medium">{match.homeTeam.name}</h3>
          </div>
        </div>
        
        <div className="mx-4 text-center">
          {isFinished || isLive ? (
            <div className="flex items-center space-x-1 font-semibold text-lg">
              <span>{match.score?.home ?? 0}</span>
              <span className="mx-1">-</span>
              <span>{match.score?.away ?? 0}</span>
            </div>
          ) : (
            <div className="text-sm text-muted-foreground">
              {format(new Date(match.date), 'HH:mm')}
            </div>
          )}
        </div>
        
        <div className="flex flex-1 items-center justify-end text-right">
          <div className="mr-3">
            <h3 className="font-medium">{match.awayTeam.name}</h3>
          </div>
          <TeamFlag country={match.awayTeam.name} size="md" />
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-3">
        <div className="text-xs text-muted-foreground">
          {match.tournament} - {match.group}
        </div>
        <div className="text-xs font-medium text-primary">
          {isFinished ? 'View result' : 'View details'}
        </div>
      </div>
    </Link>
  );
};

export default MatchCard;