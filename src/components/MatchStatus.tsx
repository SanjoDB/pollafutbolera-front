import React from 'react';
import { cn } from '../lib/utils';

type MatchStatusType = 'live' | 'upcoming' | 'finished';

interface MatchStatusProps {
  status: MatchStatusType;
  className?: string;
}

const MatchStatus: React.FC<MatchStatusProps> = ({ status, className }) => {
  const statusConfig = {
    live: {
      label: 'Live',
      bgColor: 'bg-match-live',
      textColor: 'text-white',
      animation: 'animate-pulse-soft',
    },
    upcoming: {
      label: 'Upcoming',
      bgColor: 'bg-match-upcoming',
      textColor: 'text-white',
      animation: '',
    },
    finished: {
      label: 'Finished',
      bgColor: 'bg-match-finished',
      textColor: 'text-gray-700',
      animation: '',
    },
  };

  const { label, bgColor, textColor, animation } = statusConfig[status];

  return (
    <div 
      className={cn(
        'px-3 py-1 text-xs font-medium rounded-full inline-flex items-center justify-center',
        bgColor,
        textColor,
        animation,
        className
      )}
    >
      {status === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-pulse-soft"></span>
      )}
      {label}
    </div>
  );
};

export default MatchStatus;