export type Game = {
  maxPoints: number;
  minPointsByStat: number;
  maxPointsByStat: number;
  characters: Character[];
};

export type Character = {
  name: unknown | string;
  img?: unknown | string;
  stats: Stat[];
};

export type Stat = {
  name: string;
  value: number;
};
