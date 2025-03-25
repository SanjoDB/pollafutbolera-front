import React from 'react';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Match } from '../types/match';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';

interface MatchDetailHeaderProps {
  match: Match;
  className?: string;
}

const MatchDetailHeader: React.FC<MatchDetailHeaderProps> = ({ match, className }) => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={cn('space-y-4', className)}>
      <Button 
        variant="ghost" 
        size="sm" 
        className="flex items-center text-muted-foreground hover:text-foreground" 
        onClick={goBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to matches
      </Button>
      
      <div className="space-y-1">
        <div className="text-sm font-medium text-primary">
          {match.tournament}
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          {match.homeTeam.name} vs {match.awayTeam.name}
        </h1>
        <p className="text-sm text-muted-foreground">
          {format(new Date(match.date), 'EEEE d MMMM yyyy • HH:mm')} • 
          {match.venue && ` ${match.venue} • `}
          {match.group}
        </p>
      </div>
    </div>
  );
};

export default MatchDetailHeader;