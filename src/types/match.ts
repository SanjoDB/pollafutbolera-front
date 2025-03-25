export interface Team {
    id: string;
    name: string;
    formation?: string;
    coach?: string;
  }
  
  export interface Score {
    home: number;
    away: number;
  }
  
  export interface MatchEvent {
    type: 'goal' | 'yellow-card' | 'red-card' | 'substitution';
    minute: number;
    player: string;
    team: string;
    detail?: string;
  }
  
  export interface Match {
    id: string;
    tournament: string;
    group: string;
    date: string;
    venue?: string;
    status: 'upcoming' | 'live' | 'finished';
    homeTeam: Team;
    awayTeam: Team;
    score?: Score;
    events?: MatchEvent[];
  }