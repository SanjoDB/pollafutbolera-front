import React from 'react';
import TeamFlag from './TeamFlag';
import { Team } from '../types/match';
import { cn } from '../lib/utils';

interface TeamDetailProps {
  team: Team;
  score?: number;
  isHome?: boolean;
  className?: string;
}

const TeamDetail: React.FC<TeamDetailProps> = ({ 
  team, 
  score, 
  isHome = false, 
  className 
}) => {
  return (
    <div className={cn(
      'flex items-center gap-4',
      isHome ? 'flex-row' : 'flex-row-reverse',
      className
    )}>
      <TeamFlag country={team.name} size="lg" />
      
      <div className={cn(
        'space-y-1',
        isHome ? 'text-left' : 'text-right'
      )}>
        <h3 className="font-bold text-xl">{team.name}</h3>
        {team.formation && (
          <p className="text-sm text-muted-foreground">Formation: {team.formation}</p>
        )}
      </div>
      
      {typeof score !== 'undefined' && (
        <div className="text-3xl font-bold mx-4">{score}</div>
      )}
    </div>
  );
};

export default TeamDetail;