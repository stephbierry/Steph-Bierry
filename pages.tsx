import React, { useState, useEffect } from 'react';
import type { Page, Player, Team, Championship, User } from './types';
import { OrganizerCategory, TrustLabelStatus } from './types';
import { Header, Footer, Button, Card, Input, Select, TrophyIcon, ShieldCheckIcon, UserGroupIcon, UserIcon, TrustBadge, LockIcon, BackButton } from './components';
import { MOCK_TEAMS } from './mockData';

// --- HOME PAGE ---
interface HomePageProps {
    navigateTo: (page: Page) => void;
    login: () => void;
    createChampionship: () => void;
}
export const HomePage: React.FC<HomePageProps> = ({ navigateTo, login, createChampionship }) => {
    return (
        <>
            <Header isLoggedIn={false} navigateTo={navigateTo} login={login} createChampionship={createChampionship} />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-primaire text-white text-center py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <TrophyIcon className="mx-auto h-16 w-16 text-white mb-4" />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">AYITIDATASPÒ</h1>
                        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
                            Notre mission est de permettre aux organisateurs de professionnaliser la gestion de leurs championnats, afin d'offrir une vitrine de visibilité puissante et <span className="font-bold text-yellow-300">crédible</span> aux jeunes footballeurs.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <Button onClick={createChampionship} variant="secondary">Créer un Championnat</Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-12 text-texte-principal">Une Plateforme Complète pour le Football de Demain</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 bg-white rounded-lg shadow-md">
                                <UserGroupIcon className="mx-auto h-12 w-12 text-primaire mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Gestion Simplifiée</h3>
                                <p className="text-texte-secondaire">Créez championnats, équipes et joueurs en quelques clics. Suivez tout depuis un dashboard intuitif.</p>
                            </div>
                            <div className="p-8 bg-white rounded-lg shadow-md">
                                <TrophyIcon className="mx-auto h-12 w-12 text-secondaire mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Statistiques Avancées</h3>
                                <p className="text-texte-secondaire">Saisissez les buts, passes, minutes jouées, pénalités et arrêts pour des profils de joueurs détaillés.</p>
                            </div>
                            <div className="p-8 bg-white rounded-lg shadow-md">
                                <ShieldCheckIcon className="mx-auto h-12 w-12 text-succes mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Label de Confiance</h3>
                                <p className="text-texte-secondaire">Faites vérifier votre organisation pour garantir la crédibilité de vos données auprès des recruteurs.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* How it works Section */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-16 text-texte-principal">Comment ça marche ?</h2>
                        
                        {/* Desktop Timeline */}
                        <div className="hidden md:block relative">
                            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-primaire transform -translate-x-1/2 z-0"></div>
                            <div className="space-y-24">
                                {/* Step 1 */}
                                <div className="flex justify-end items-center relative">
                                    <div className="w-1/2 pr-16 text-right">
                                        <h3 className="text-2xl font-bold text-primaire">Étape 1: Créez votre Compte</h3>
                                        <p className="text-texte-secondaire mt-2">Inscrivez-vous en tant qu'organisateur pour accéder à votre tableau de bord personnel.</p>
                                    </div>
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primaire text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl ring-8 ring-fond-page z-10">1</div>
                                    <div className="w-1/2"></div>
                                </div>
                                {/* Step 2 */}
                                <div className="flex items-center relative">
                                    <div className="w-1/2"></div>
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primaire text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl ring-8 ring-fond-page z-10">2</div>
                                    <div className="w-1/2 pl-16 text-left">
                                        <h3 className="text-2xl font-bold text-primaire">Étape 2: Lancez votre Championnat</h3>
                                        <p className="text-texte-secondaire mt-2">Définissez les paramètres de votre ligue ou coupe, et soumettez vos documents pour obtenir le <span className="font-semibold">Label de Confiance</span>.</p>
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <div className="flex justify-end items-center relative">
                                    <div className="w-1/2 pr-16 text-right">
                                        <h3 className="text-2xl font-bold text-primaire">Étape 3: Gérez et Publiez</h3>
                                        <p className="text-texte-secondaire mt-2">Ajoutez équipes, joueurs, et résultats de matchs. Les classements et statistiques sont mis à jour automatiquement et visibles publiquement.</p>
                                    </div>
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primaire text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl ring-8 ring-fond-page z-10">3</div>
                                    <div className="w-1/2"></div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Timeline */}
                        <div className="md:hidden max-w-sm mx-auto">
                            <div className="relative">
                                <div className="absolute top-0 left-6 w-0.5 h-full bg-primaire transform -translate-x-1/2 z-0"></div>
                                <div className="space-y-12">
                                     {/* Step 1 */}
                                    <div className="flex items-start">
                                        <div className="bg-primaire text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 ring-4 ring-fond-page">1</div>
                                        <div className="ml-6">
                                            <h3 className="text-xl font-bold text-primaire">Étape 1: Créez votre Compte</h3>
                                            <p className="text-texte-secondaire mt-1">Inscrivez-vous en tant qu'organisateur pour accéder à votre tableau de bord personnel.</p>
                                        </div>
                                    </div>
                                    {/* Step 2 */}
                                    <div className="flex items-start">
                                        <div className="bg-primaire text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 ring-4 ring-fond-page">2</div>
                                        <div className="ml-6">
                                            <h3 className="text-xl font-bold text-primaire">Étape 2: Lancez votre Championnat</h3>
                                            <p className="text-texte-secondaire mt-1">Définissez les paramètres de votre ligue ou coupe, et soumettez vos documents pour obtenir le <span className="font-semibold">Label de Confiance</span>.</p>
                                        </div>
                                    </div>
                                    {/* Step 3 */}
                                    <div className="flex items-start">
                                        <div className="bg-primaire text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 ring-4 ring-fond-page">3</div>
                                        <div className="ml-6">
                                            <h3 className="text-xl font-bold text-primaire">Étape 3: Gérez et Publiez</h3>
                                            <p className="text-texte-secondaire mt-1">Ajoutez équipes, joueurs, et résultats de matchs. Les classements et statistiques sont mis à jour automatiquement et visibles publiquement.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

// --- CREATE CHAMPIONSHIP FORM (Used inside Dashboard) ---
const CreateChampionshipForm = ({ onCancel }: { onCancel: () => void }) => {
    const [category, setCategory] = useState<OrganizerCategory | ''>('');

    const getIncentiveMessage = () => {
        switch(category) {
            case OrganizerCategory.ADHOC:
                return (
                    <div className="p-4 border border-yellow-400 bg-yellow-50 rounded-md text-yellow-800">
                        <p className="font-semibold">Votre championnat sera créé avec un statut "Non-vérifié".</p>
                        <p className="text-sm">Les championnats organisés par des comités ad hoc ne sont pas éligibles au Label de Confiance.</p>
                    </div>
                );
            case OrganizerCategory.SCHOOL:
            case OrganizerCategory.CLUB:
                return (
                    <div className="p-4 border border-primaire bg-blue-50 rounded-md text-primaire">
                        <p className="font-bold">Soumettez votre document pour obtenir le badge 'Vérifié'.</p>
                        <p className="text-sm mt-1">Cela assure la crédibilité de vos données. Vos documents restent confidentiels.</p>
                    </div>
                );
            default:
                return null;
        }
    };
    
    const getFileUploadField = () => {
        let labelText = '';
        switch(category) {
            case OrganizerCategory.SCHOOL:
                labelText = "Carte d'identité de l'établissement ou Autorisation de l’établissement ou MENFP (Optionnel)";
                break;
            case OrganizerCategory.CLUB:
                labelText = "Documents officiels de reconnaissance (Licence de club, Permis de Mairie, ou Statuts - Optionnel)";
                break;
            default:
                return null;
        }
        return <Input label={labelText} id="docUpload" type="file" />;
    };

    return (
        <Card className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-texte-principal mb-6">Créer un nouveau championnat</h2>
            <form className="space-y-6">
                <section>
                    <h3 className="text-lg font-semibold text-primaire border-b pb-2 mb-4">1. Catégorie d'Organisation</h3>
                    <Select label="Veuillez choisir votre catégorie" id="orgCategory" value={category} onChange={(e) => setCategory(e.target.value as OrganizerCategory)}>
                        <option value="">Sélectionnez une catégorie...</option>
                        <option value={OrganizerCategory.SCHOOL}>Établissement Scolaire / Université</option>
                        <option value={OrganizerCategory.CLUB}>Club Sportif / Organisation Communautaire</option>
                        <option value={OrganizerCategory.ADHOC}>Comité Ad Hoc (Non-vérifié)</option>
                    </Select>
                </section>
                
                {category && (
                <>
                    <section>
                        <h3 className="text-lg font-semibold text-primaire border-b pb-2 mb-4">2. Informations Générales</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Nom du championnat" id="champName" type="text" placeholder="Coupe des Espoirs U17" />
                            <Input label="Saison" id="season" type="text" placeholder="2024-2025" />
                            <Input label="Lieu" id="location" type="text" placeholder="Port-au-Prince" />
                            <Select label="Format" id="format">
                                <option>Ligue (classement par points)</option>
                                <option>Coupe (élimination directe)</option>
                                <option>Ligue + phases finales</option>
                            </Select>
                            <div className="md:col-span-2">
                                <Input label="Logo du championnat (URL)" id="logo" type="text" placeholder="https://example.com/logo.png" />
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <h3 className="text-lg font-semibold text-primaire border-b pb-2 mb-4">3. Label de Confiance</h3>
                        <div className="space-y-4">
                            {getIncentiveMessage()}
                            {getFileUploadField()}
                        </div>
                         <div className="mt-4 p-4 border-l-4 border-secondaire bg-red-50">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <LockIcon className="h-5 w-5 text-secondaire" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-bold text-secondaire">Garantie de Confiance AyitiDataSpò</h3>
                                    <div className="mt-2 text-sm text-red-700">
                                        <p>En soumettant vos documents officiels, vous achetez de la crédibilité pour l'avenir de vos joueurs. L'obtention du Label de Confiance apposera un badge de vérification sur vos pages, garantissant aux recruteurs que les données proviennent d'une source accréditée. Vos documents sont utilisés uniquement pour la vérification et sont traités confidentiellement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                )}

                <div className="flex justify-end space-x-4 pt-6">
                    <Button type="button" onClick={onCancel} className="bg-neutre-active">Annuler</Button>
                    <Button type="submit" variant="success" onClick={(e) => { e.preventDefault(); alert('Championnat créé ! (Simulation)'); onCancel(); }}>Enregistrer le Championnat</Button>
                </div>
            </form>
        </Card>
    );
};

// --- TEAMS MANAGEMENT VIEW ---
const TeamsManagementView: React.FC<{ teams: Team[]; onAdd: () => void; onCancel: () => void }> = ({ teams, onAdd, onCancel }) => {
    return (
        <Card>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-texte-principal">Gestion des Équipes</h2>
                <div className="flex space-x-2">
                    <Button variant="secondary" onClick={onAdd}>+ Ajouter une Équipe</Button>
                    <Button className="bg-neutre-active" onClick={onCancel}>Retour à l'aperçu</Button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Logo</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Nom</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Ville</th>
                            <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {teams.map(team => (
                            <tr key={team.id} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4">
                                    <img src={team.logoUrl} alt={team.name} className="w-10 h-10 rounded-full object-cover" />
                                </td>
                                <td className="py-3 px-4 font-medium">{team.name}</td>
                                <td className="py-3 px-4">{team.city}</td>
                                <td className="py-3 px-4">
                                    <div className="flex justify-center space-x-2">
                                        <Button onClick={() => alert(`La modification de '${team.name}' sera bientôt disponible.`)} variant="primary" className="text-sm py-1 px-3">Modifier</Button>
                                        <Button onClick={() => alert(`La suppression de '${team.name}' sera bientôt disponible.`)} variant="secondary" className="text-sm py-1 px-3 bg-gray-600 hover:bg-gray-700">Supprimer</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

// --- ADD PLAYER FORM ---
const AddPlayerForm = ({ onCancel }: { onCancel: () => void }) => {
    return (
        <Card className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-texte-principal mb-6">Ajouter un nouveau joueur</h2>
            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Prénom" id="firstName" type="text" placeholder="Jean" />
                    <Input label="Nom" id="lastName" type="text" placeholder="Dupont" />
                </div>
                <Input label="Date de naissance" id="dob" type="date" />
                <Select label="Poste" id="position">
                    <option>Gardien</option>
                    <option>Défenseur</option>
                    <option>Milieu</option>
                    <option>Attaquant</option>
                </Select>
                <Select label="Équipe" id="team">
                    <option value="">Sélectionnez une équipe...</option>
                   {MOCK_TEAMS.map(team => <option key={team.id} value={team.id}>{team.name}</option>)}
                </Select>
                <Input label="URL de la photo (Optionnel)" id="photoUrl" type="text" placeholder="https://example.com/photo.png" />
                <div className="flex justify-end space-x-4 pt-4">
                    <Button type="button" onClick={onCancel} className="bg-neutre-active">Annuler</Button>
                    <Button type="submit" variant="success" onClick={(e) => { e.preventDefault(); alert('Joueur ajouté ! (Simulation)'); onCancel(); }}>Enregistrer le Joueur</Button>
                </div>
            </form>
        </Card>
    );
};

// --- ADD MATCH FORM ---
const AddMatchForm = ({ onCancel }: { onCancel: () => void }) => {
    return (
        <Card className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-texte-principal mb-6">Ajouter un nouveau match</h2>
            <form className="space-y-6">
                <section>
                    <h3 className="text-lg font-semibold text-primaire border-b pb-2 mb-4">Informations sur le match</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Select label="Équipe A" id="teamA">
                           <option value="">Sélectionnez l'équipe à domicile...</option>
                           {MOCK_TEAMS.map(team => <option key={team.id} value={team.id}>{team.name}</option>)}
                        </Select>
                        <Select label="Équipe B" id="teamB">
                           <option value="">Sélectionnez l'équipe à l'extérieur...</option>
                           {MOCK_TEAMS.map(team => <option key={team.id} value={team.id}>{team.name}</option>)}
                        </Select>
                        <Input label="Score Équipe A" id="scoreA" type="number" min="0" placeholder="0" />
                        <Input label="Score Équipe B" id="scoreB" type="number" min="0" placeholder="0" />
                        <div className="md:col-span-2">
                            <Input label="Date et heure du match" id="matchDate" type="datetime-local" />
                        </div>
                    </div>
                </section>
                <section>
                    <h3 className="text-lg font-semibold text-primaire border-b pb-2 mb-4">Statistiques du match (Simplifié)</h3>
                    <p className="text-texte-secondaire text-sm">
                        La saisie détaillée des statistiques par joueur (buts, passes, cartons, etc.) sera bientôt disponible. 
                        Pour l'instant, seul le score final est enregistré.
                    </p>
                </section>
                <div className="flex justify-end space-x-4 pt-4">
                    <Button type="button" onClick={onCancel} className="bg-neutre-active">Annuler</Button>
                    <Button type="submit" variant="success" onClick={(e) => { e.preventDefault(); alert('Match ajouté ! (Simulation)'); onCancel(); }}>Enregistrer le Match</Button>
                </div>
            </form>
        </Card>
    );
};


// --- DASHBOARD PAGE ---
interface DashboardPageProps {
    user: User;
    logout: () => void;
    initialView?: string;
}
export const DashboardPage: React.FC<DashboardPageProps> = ({ user, logout, initialView = 'overview' }) => {
    const [view, setView] = useState(initialView);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    const renderContent = () => {
        switch (view) {
            case 'create_championship':
                return <CreateChampionshipForm onCancel={() => setView('overview')} />;
            
            case 'teams':
                return <TeamsManagementView 
                            teams={MOCK_TEAMS} 
                            onAdd={() => alert('Le formulaire pour ajouter une nouvelle équipe sera bientôt disponible.')}
                            onCancel={() => setView('overview')} 
                        />;
            
            case 'add_player':
                return <AddPlayerForm onCancel={() => setView('overview')} />;
                
            case 'add_match':
                return <AddMatchForm onCancel={() => setView('overview')} />;

            case 'overview':
            default:
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-texte-principal mb-6">Tableau de Bord</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card onClick={() => setView('create_championship')} className="flex items-start space-x-4 p-5">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <TrophyIcon className="h-8 w-8 text-primaire" />
                                </div>
                                <div>
                                    <p className="text-sm text-texte-secondaire">Compétitions</p>
                                    <p className="text-2xl font-bold text-texte-principal">2</p>
                                    <p className="text-sm text-primaire font-semibold mt-1">Gérer vos compétitions</p>
                                </div>
                            </Card>
                             <Card onClick={() => setView('teams')} className="flex items-start space-x-4 p-5">
                                <div className="bg-red-100 p-3 rounded-full">
                                    <UserGroupIcon className="h-8 w-8 text-secondaire" />
                                </div>
                                <div>
                                    <p className="text-sm text-texte-secondaire">Équipes</p>
                                    <p className="text-2xl font-bold text-texte-principal">3</p>
                                    <p className="text-sm text-secondaire font-semibold mt-1">Gérer vos effectifs</p>
                                </div>
                            </Card>
                            <Card onClick={() => setView('add_player')} className="flex items-start space-x-4 p-5">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <UserIcon className="h-8 w-8 text-succes" />
                                </div>
                                <div>
                                    <p className="text-sm text-texte-secondaire">Joueurs</p>
                                    <p className="text-2xl font-bold text-texte-principal">180</p>
                                    <p className="text-sm text-succes font-semibold mt-1">Suivez les talents</p>
                                </div>
                            </Card>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Actions Rapides</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button onClick={() => setView('create_championship')} variant="secondary">+ Créer un Championnat</Button>
                                <Button onClick={() => setView('teams')}>Gérer les Équipes</Button>
                                <Button onClick={() => setView('add_player')} >+ Ajouter un Joueur</Button>
                                <Button onClick={() => setView('add_match')} >+ Ajouter un Match</Button>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="font-bold text-xl text-primaire">Dashboard Organisateur</div>
                    <div className="flex items-center">
                        <span className="text-texte-secondaire mr-4">{user.email}</span>
                        <Button onClick={logout} variant="secondary" className="text-sm py-1 px-3">Déconnexion</Button>
                    </div>
                </div>
            </header>
            <main className="container mx-auto px-6 py-8">
                {renderContent()}
            </main>
        </div>
    );
};

// --- PUBLIC PAGES ---
// For brevity, the following pages are simplified. A real app would have more complex layouts.

interface PublicSearchPageProps {
    players: Player[];
    teams: Team[];
    championships: Championship[];
    navigateTo: (page: Page, id?: string) => void;
    login: () => void;
    createChampionship: () => void;
}
export const PublicSearchPage: React.FC<PublicSearchPageProps> = ({ players, teams, championships, navigateTo, login, createChampionship }) => (
    <>
    <Header isLoggedIn={false} navigateTo={navigateTo} login={login} createChampionship={createChampionship} />
    <main className="container mx-auto px-6 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Recherche Publique</h1>
        {/* Simplified display, no active search logic */}
        <section>
            <h2 className="text-2xl font-semibold mb-4 text-primaire">Joueurs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {players.map(p => (
                <Card key={p.id} onClick={() => navigateTo('player', p.id)}>
                    <img src={p.photoUrl} alt={`${p.firstName} ${p.lastName}`} className="w-20 h-20 rounded-full mx-auto mb-2" />
                    <p className="font-bold text-center">{p.firstName} {p.lastName}</p>
                    <p className="text-sm text-texte-secondaire text-center">{p.position}</p>
                </Card>
            ))}
            </div>
        </section>
        <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-primaire">Équipes</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teams.map(t => (
                    <Card key={t.id} onClick={() => navigateTo('team', t.id)}>
                        <img src={t.logoUrl} alt={t.name} className="w-16 h-16 mx-auto mb-2" />
                        <p className="font-bold text-center">{t.name}</p>
                        <p className="text-sm text-texte-secondaire text-center">{t.city}</p>
                    </Card>
                ))}
            </div>
        </section>
    </main>
    <Footer />
    </>
);

interface PlayerProfilePageProps { player: Player; team?: Team; navigateTo: (page: Page, id?: string) => void; login: () => void; createChampionship: () => void; }
export const PlayerProfilePage: React.FC<PlayerProfilePageProps> = ({ player, team, navigateTo, login, createChampionship }) => (
    <>
    <Header isLoggedIn={false} navigateTo={navigateTo} login={login} createChampionship={createChampionship} />
    <main className="container mx-auto px-6 py-8 flex-grow">
        <BackButton onClick={() => navigateTo('search')} text="Retour à la recherche" />
        <Card>
            <div className="flex flex-col md:flex-row items-center">
                <img src={player.photoUrl} alt={`${player.firstName} ${player.lastName}`} className="w-40 h-40 rounded-full mr-8 mb-4 md:mb-0 border-4 border-primaire" />
                <div>
                    <h1 className="text-4xl font-bold">{player.firstName} {player.lastName}</h1>
                    <p className="text-xl text-texte-secondaire">{player.position}</p>
                    <p className="text-lg">Date de naissance: {player.dateOfBirth}</p>
                    {team && <p className="text-lg">Équipe: <span className="text-primaire font-semibold cursor-pointer" onClick={() => navigateTo('team', team.id)}>{team.name}</span></p>}
                </div>
            </div>
            <div className="mt-8 border-t pt-6">
                <h2 className="text-2xl font-bold mb-4">Statistiques</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-2xl font-bold">{player.stats.matchesPlayed}</p>
                        <p className="text-texte-secondaire">Matchs Joués</p>
                    </div>
                     <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-2xl font-bold text-succes">{player.stats.goals}</p>
                        <p className="text-texte-secondaire">Buts</p>
                    </div>
                     <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-2xl font-bold text-primaire">{player.stats.assists}</p>
                        <p className="text-texte-secondaire">Passes Décisives</p>
                    </div>
                     <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-2xl font-bold">{player.stats.minutesPlayed}'</p>
                        <p className="text-texte-secondaire">Minutes Jouées</p>
                    </div>
                </div>
            </div>
        </Card>
    </main>
    <Footer />
    </>
);

interface TeamProfilePageProps { team: Team; players: Player[]; navigateTo: (page: Page, id?: string) => void; login: () => void; createChampionship: () => void; }
export const TeamProfilePage: React.FC<TeamProfilePageProps> = ({ team, players, navigateTo, login, createChampionship }) => (
     <>
    <Header isLoggedIn={false} navigateTo={navigateTo} login={login} createChampionship={createChampionship} />
    <main className="container mx-auto px-6 py-8 flex-grow">
        <BackButton onClick={() => navigateTo('search')} text="Retour à la recherche" />
        <Card>
             <div className="flex items-center mb-6">
                <img src={team.logoUrl} alt={team.name} className="w-24 h-24 mr-6" />
                <div>
                    <h1 className="text-4xl font-bold">{team.name}</h1>
                    <p className="text-xl text-texte-secondaire">{team.city}</p>
                </div>
             </div>
             <div className="mt-8 border-t pt-6">
                <h2 className="text-2xl font-bold mb-4">Effectif</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {players.map(p => (
                    <Card key={p.id} className="text-center" onClick={() => navigateTo('player', p.id)}>
                        <img src={p.photoUrl} alt={`${p.firstName} ${p.lastName}`} className="w-16 h-16 rounded-full mx-auto mb-2" />
                        <p className="font-semibold">{p.firstName} {p.lastName}</p>
                        <p className="text-sm text-texte-secondaire">{p.position}</p>
                    </Card>
                ))}
                </div>
             </div>
        </Card>
    </main>
    <Footer />
    </>
);

interface ChampionshipPageProps { championship: Championship, teams: Team[], navigateTo: (page: Page, id?: string) => void; login: () => void; createChampionship: () => void; }
export const ChampionshipPage: React.FC<ChampionshipPageProps> = ({ championship, teams, navigateTo, login, createChampionship }) => (
     <>
    <Header isLoggedIn={false} navigateTo={navigateTo} login={login} createChampionship={createChampionship} />
    <main className="container mx-auto px-6 py-8 flex-grow">
        <BackButton onClick={() => navigateTo('search')} text="Retour à la recherche" />
        <Card>
            <div className="flex items-center mb-6">
                <img src={championship.logoUrl} alt={championship.name} className="w-24 h-24 mr-6 rounded-md" />
                <div>
                    <div className="flex items-center space-x-4">
                        <h1 className="text-4xl font-bold">{championship.name}</h1>
                        <TrustBadge status={championship.trustLabel} />
                    </div>
                    <p className="text-xl text-texte-secondaire">{championship.season} - {championship.location}</p>
                    <p className="text-lg font-medium">{championship.format}</p>
                </div>
            </div>
            <div className="mt-8 border-t pt-6">
                <h2 className="text-2xl font-bold mb-4">Classement (Exemple)</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Pos</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Équipe</th>
                                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">J</th>
                                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">G</th>
                                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">N</th>
                                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">P</th>
                                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Pts</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                        {teams.map((team, index) => (
                            <tr key={team.id} className="border-b hover:bg-gray-50">
                                <td className="text-left py-3 px-4">{index + 1}</td>
                                <td className="text-left py-3 px-4 flex items-center">
                                    <img src={team.logoUrl} alt={team.name} className="w-6 h-6 mr-2" />
                                    <span className="font-medium cursor-pointer hover:text-primaire" onClick={() => navigateTo('team', team.id)}>{team.name}</span>
                                </td>
                                <td className="text-center py-3 px-4">{Math.floor(Math.random() * 5)}</td>
                                <td className="text-center py-3 px-4">{Math.floor(Math.random() * 5)}</td>
                                <td className="text-center py-3 px-4">{Math.floor(Math.random() * 2)}</td>
                                <td className="text-center py-3 px-4">{Math.floor(Math.random() * 2)}</td>
                                <td className="text-center py-3 px-4 font-bold">{Math.floor(Math.random() * 15)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Card>
    </main>
    <Footer />
    </>
);