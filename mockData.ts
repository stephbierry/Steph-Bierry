
import type { Player, Team, Championship, User } from './types';
import { TrustLabelStatus, ChampionshipFormat } from './types';

export const MOCK_USER: User = {
    id: 'user-1',
    email: 'organisateur@example.com',
    organizationName: 'Ligue des Jeunes Talents'
};

export const MOCK_PLAYERS: Player[] = [
    {
        id: 'player-1',
        firstName: 'Jean',
        lastName: 'Dupont',
        dateOfBirth: '2006-03-15',
        position: 'Attaquant',
        teamId: 'team-1',
        photoUrl: 'https://picsum.photos/seed/player1/200',
        stats: { matchesPlayed: 5, minutesPlayed: 450, goals: 4, assists: 2, yellowCards: 1, redCards: 0, penaltiesScored: 1, penaltiesMissed: 0 }
    },
    {
        id: 'player-2',
        firstName: 'Pierre',
        lastName: 'Martin',
        dateOfBirth: '2005-08-22',
        position: 'Milieu',
        teamId: 'team-1',
        photoUrl: 'https://picsum.photos/seed/player2/200',
        stats: { matchesPlayed: 5, minutesPlayed: 480, goals: 1, assists: 5, yellowCards: 0, redCards: 0, penaltiesScored: 0, penaltiesMissed: 0 }
    },
    {
        id: 'player-3',
        firstName: 'Luc',
        lastName: 'Bernard',
        dateOfBirth: '2006-01-10',
        position: 'Défenseur',
        teamId: 'team-2',
        photoUrl: 'https://picsum.photos/seed/player3/200',
        stats: { matchesPlayed: 4, minutesPlayed: 360, goals: 0, assists: 1, yellowCards: 2, redCards: 0, penaltiesScored: 0, penaltiesMissed: 0 }
    },
    {
        id: 'player-4',
        firstName: 'Marc',
        lastName: 'Robert',
        dateOfBirth: '2007-11-05',
        position: 'Gardien',
        teamId: 'team-2',
        photoUrl: 'https://picsum.photos/seed/player4/200',
        stats: { matchesPlayed: 4, minutesPlayed: 360, goals: 0, assists: 0, yellowCards: 0, redCards: 0, penaltiesScored: 0, penaltiesMissed: 0, saves: 12 }
    },
];

export const MOCK_TEAMS: Team[] = [
    {
        id: 'team-1',
        name: 'AS Port-au-Prince',
        logoUrl: 'https://picsum.photos/seed/team1/100',
        city: 'Port-au-Prince',
        players: MOCK_PLAYERS.filter(p => p.teamId === 'team-1')
    },
    {
        id: 'team-2',
        name: 'FC Carrefour',
        logoUrl: 'https://picsum.photos/seed/team2/100',
        city: 'Carrefour',
        players: MOCK_PLAYERS.filter(p => p.teamId === 'team-2')
    },
    {
        id: 'team-3',
        name: 'Étoile de Pétion-Ville',
        logoUrl: 'https://picsum.photos/seed/team3/100',
        city: 'Pétion-Ville',
        players: []
    }
];

export const MOCK_CHAMPIONSHIPS: Championship[] = [
    {
        id: 'champ-1',
        name: 'Coupe des Talents U17',
        season: '2024',
        location: 'Port-au-Prince',
        logoUrl: 'https://picsum.photos/seed/champ1/200',
        format: ChampionshipFormat.HYBRID,
        organizerId: 'user-1',
        trustLabel: TrustLabelStatus.VERIFIED,
        teamIds: ['team-1', 'team-2', 'team-3']
    },
    {
        id: 'champ-2',
        name: 'Ligue Scolaire de l\'Ouest',
        season: '2024-2025',
        location: 'Département de l\'Ouest',
        logoUrl: 'https://picsum.photos/seed/champ2/200',
        format: ChampionshipFormat.LEAGUE,
        organizerId: 'user-2',
        trustLabel: TrustLabelStatus.UNVERIFIED,
        teamIds: ['team-1', 'team-2']
    }
];
