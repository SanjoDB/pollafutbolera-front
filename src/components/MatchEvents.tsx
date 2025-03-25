import React from 'react';
import { MatchEvent } from '../types/match';
import { cn } from '../lib/utils';

interface MatchEventsProps {
  events: MatchEvent[];
  className?: string;
}

const MatchEvents: React.FC<MatchEventsProps> = ({ events, className }) => {
  if (!events || events.length === 0) {
    return null;
  }

  // Sort events by minute
  const sortedEvents = [...events].sort((a, b) => a.minute - b.minute);

  return (
    <div className={cn('space-y-4', className)}>
      <h3 className="text-lg font-semibold">Match Events</h3>
      
      <div className="space-y-2">
        {sortedEvents.map((event, index) => (
          <div 
            key={index} 
            className="flex items-center py-2 border-b last:border-0"
          >
            <div className="w-12 font-medium text-muted-foreground">
              {event.minute}'
            </div>
            
            <div className="mx-2">
              {event.type === 'goal' && (
                <span className="text-green-500 text-lg">⚽</span>
              )}
              {event.type === 'yellow-card' && (
                <span className="text-yellow-500 text-lg">🟨</span>
              )}
              {event.type === 'red-card' && (
                <span className="text-red-500 text-lg">🟥</span>
              )}
              {event.type === 'substitution' && (
                <span className="text-blue-500 text-lg">↔️</span>
              )}
            </div>
            
            <div className="flex-1">
              <div className="font-medium">{event.player}</div>
              {event.detail && (
                <div className="text-sm text-muted-foreground">{event.detail}</div>
              )}
            </div>
            
            <div className="text-sm font-medium text-right">
              {event.team}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchEvents;