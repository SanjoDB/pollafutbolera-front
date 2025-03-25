import { Match } from "../types/match";

// Mock data for upcoming matches
export const MOCK_MATCHES: Match[] = [
  {
    id: "1",
    tournament: "World Cup 2026",
    group: "Group A",
    date: "2023-11-18T18:00:00Z",
    venue: "Santiago Bernabéu",
    status: "finished",
    homeTeam: { id: "eng", name: "England" },
    awayTeam: { id: "bra", name: "Brazil" },
    score: { home: 1, away: 2 },
    events: [
      { type: "goal", minute: 23, player: "Harry Kane", team: "England", detail: "Penalty" },
      { type: "goal", minute: 45, player: "Vinicius Jr", team: "Brazil", detail: "Assisted by Neymar" },
      { type: "yellow-card", minute: 56, player: "Casemiro", team: "Brazil" },
      { type: "goal", minute: 78, player: "Rodrygo", team: "Brazil", detail: "Counter-attack" }
    ]
  },
  {
    id: "2",
    tournament: "World Cup 2026",
    group: "Group A",
    date: "2023-11-18T20:00:00Z",
    venue: "Camp Nou",
    status: "finished",
    homeTeam: { id: "arg", name: "Argentina" },
    awayTeam: { id: "esp", name: "Spain" },
    score: { home: 0, away: 0 }
  },
  {
    id: "3",
    tournament: "World Cup 2026",
    group: "Group A",
    date: "2023-11-18T20:00:00Z",
    venue: "Allianz Arena",
    status: "finished",
    homeTeam: { id: "cro", name: "Croatia" },
    awayTeam: { id: "ger", name: "Germany" },
    score: { home: 0, away: 3 }
  },
  {
    id: "4",
    tournament: "World Cup 2026",
    group: "Group A",
    date: "2023-11-20T15:00:00Z",
    venue: "Wembley Stadium",
    status: "upcoming",
    homeTeam: { id: "eng", name: "England" },
    awayTeam: { id: "cro", name: "Croatia" }
  },
  {
    id: "5",
    tournament: "World Cup 2026",
    group: "Group A",
    date: "2023-11-20T18:00:00Z",
    venue: "Maracanã",
    status: "upcoming",
    homeTeam: { id: "bra", name: "Brazil" },
    awayTeam: { id: "esp", name: "Spain" }
  },
  {
    id: "6",
    tournament: "World Cup 2026",
    group: "Group A",
    date: "2023-11-22T20:00:00Z",
    venue: "Stade de France",
    status: "upcoming",
    homeTeam: { id: "arg", name: "Argentina" },
    awayTeam: { id: "cro", name: "Croatia" }
  },
  {
    id: "7",
    tournament: "World Cup 2026 - Quarter finals",
    group: "Quarter-finals",
    date: "2023-11-28T18:00:00Z",
    venue: "Camp Nou",
    status: "upcoming",
    homeTeam: { id: "net", name: "Netherlands" },
    awayTeam: { id: "arg", name: "Argentina" }
  }
];

export const getMatches = async (): Promise<Match[]> => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_MATCHES);
    }, 500);
  });
};

export const getMatchById = async (id: string): Promise<Match | undefined> => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const match = MOCK_MATCHES.find(match => match.id === id);
      resolve(match);
    }, 500);
  });
};