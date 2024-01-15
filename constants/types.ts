export type TeamMember = {
  name: string;
  intro: string;
  photoUrl: string;
  department: string;
};

export interface Metadata {
  'player _name': string;
  gaming_platform: string;
  game_level: number;
  achievements: string[];
  total_score: number;
  preferred_game_mode: string;
  'collected items': {
    weapon: string;
    armor: string;
    pet: string;
  };
}

export interface User {
  img: string;
  name: string;
  player_metadata: Metadata;
}
