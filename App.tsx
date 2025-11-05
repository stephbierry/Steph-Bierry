
import React, { useState, useCallback, useMemo } from 'react';
import { HomePage, DashboardPage, PublicSearchPage, PlayerProfilePage, TeamProfilePage, ChampionshipPage } from './pages';
import type { Page, Player, Team, Championship, User } from './types';
import { MOCK_PLAYERS, MOCK_TEAMS, MOCK_CHAMPIONSHIPS, MOCK_USER } from './mockData';

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('home');
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    const navigateTo = useCallback((newPage: Page, id: string | null = null) => {
        setPage(newPage);
        setSelectedItemId(id);
        window.scrollTo(0, 0);
    }, []);

    const handleLogin = () => {
        setUser(MOCK_USER);
        navigateTo('dashboard');
    };
    
    const handleCreateChampionshipRequest = useCallback(() => {
        if (!user) {
            setUser(MOCK_USER);
        }
        setPage('create_championship');
        window.scrollTo(0, 0);
    }, [user]);

    const handleLogout = () => {
        setUser(null);
        navigateTo('home');
    };

    const players = MOCK_PLAYERS;
    const teams = MOCK_TEAMS;
    const championships = MOCK_CHAMPIONSHIPS;

    const selectedPlayer = useMemo(() => players.find(p => p.id === selectedItemId), [players, selectedItemId]);
    const selectedTeam = useMemo(() => teams.find(t => t.id === selectedItemId), [teams, selectedItemId]);
    const selectedChampionship = useMemo(() => championships.find(c => c.id === selectedItemId), [championships, selectedItemId]);

    const renderPage = () => {
        const publicProps = {
            navigateTo,
            login: handleLogin,
            createChampionship: handleCreateChampionshipRequest,
        };
        
        const searchPage = <PublicSearchPage players={players} teams={teams} championships={championships} {...publicProps} />;

        switch (page) {
            case 'home':
                return <HomePage {...publicProps} />;
            case 'create_championship':
                 return user ? <DashboardPage user={user} logout={handleLogout} initialView="create_championship" /> : <HomePage {...publicProps} />;
            case 'dashboard':
                return user ? <DashboardPage user={user} logout={handleLogout} /> : <HomePage {...publicProps} />;
            case 'search':
                return searchPage;
            case 'player':
                return selectedPlayer ? <PlayerProfilePage player={selectedPlayer} team={teams.find(t => t.id === selectedPlayer.teamId)} {...publicProps} /> : searchPage;
            case 'team':
                return selectedTeam ? <TeamProfilePage team={selectedTeam} players={players.filter(p => p.teamId === selectedTeam.id)} {...publicProps} /> : searchPage;
            case 'championship':
                 return selectedChampionship ? <ChampionshipPage championship={selectedChampionship} teams={teams.filter(t => selectedChampionship.teamIds.includes(t.id))} {...publicProps} /> : searchPage;
            default:
                return <HomePage {...publicProps} />;
        }
    };

    return <div className="min-h-screen flex flex-col">{renderPage()}</div>;
};

export default App;