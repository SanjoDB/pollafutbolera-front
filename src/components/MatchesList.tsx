import React from 'react';
import { format } from 'date-fns'; // Usamos date-fns para formatear las fechas
import MatchCard from './MatchCard'; // Importamos MatchCard para mostrar los partidos

interface MatchesListProps {
  matches: any[]; // Ajusta el tipo de acuerdo con los datos reales que recibes
}

const MatchesList: React.FC<MatchesListProps> = ({ matches }) => {
  // Agrupar partidos por fecha
  const matchesByDate: Record<string, any[]> = matches.reduce((acc, match) => {
    const dateKey = format(new Date(match.date), 'yyyy-MM-dd'); // Agrupar por fecha
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(match);
    return acc;
  }, {} as Record<string, any[]>);

  // Ordenar fechas
  const sortedDates = Object.keys(matchesByDate).sort();

  return (
    <div className="space-y-8">
      {sortedDates.map((dateKey) => (
        <div key={dateKey}>
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