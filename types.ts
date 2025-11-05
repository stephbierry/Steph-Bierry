
export type Page = 'home' | 'dashboard' | 'search' | 'player' | 'team' | 'championship' | 'create_championship';

export enum TrustLabelStatus {
    UNVERIFIED = 'Non Vérifié',
    PENDING = 'En Attente de Vérification',
    VERIFIED = 'Vérifié'
}

export enum OrganizerCategory {
    SCHOOL = 'Établissement Scolaire / Université',
    CLUB = 'Club Sportif / Organisation Communautaire',
    ADHOC = 'Comité Ad Hoc (Non-vérifié)',
}

export interface User {
    id: string;
    email: string;
    organizationName: string;
}

export interface PlayerStats {
    matchesPlayed: number;
    minutesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    penaltiesScored: number;
    penaltiesMissed: number;
    saves?: number; // For goalkeepers
}

export interface Player {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    position: 'Gardien' | 'Défenseur' | 'Milieu' | 'Attaquant';
    photoUrl?: string;
    teamId: string;
    stats: PlayerStats;
}

export interface Team {
    id: string;
    name: string;
    logoUrl?: string;
    city: string;
    players: Player[];
}

export enum ChampionshipFormat {
    LEAGUE = 'Ligue',
    CUP = 'Coupe',
    HYBRID = 'Ligue + Phases Finales'
}

export interface Championship {
    id: string;
    name: string;
    season: string;
    location: string;
    logoUrl?: string;
    format: ChampionshipFormat;
    organizerId: string;
    trustLabel: TrustLabelStatus;
    teamIds: string[];
}