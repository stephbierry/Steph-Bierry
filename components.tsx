import React from 'react';
import type { Page } from './types';
import { TrustLabelStatus } from './types';

// --- ICONS ---
export const TrophyIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.983 1.907a1 1 0 00-1.966 0l-1.425 4.39a1 1 0 01-.95.69h-4.622a1 1 0 00-.97 1.242l1.39 4.862a1 1 0 01.03.116m5.534-11.302a1 1 0 011.966 0l1.425 4.39a1 1 0 00.95.69h4.622a1 1 0 01.97 1.242l-1.39 4.862a1 1 0 00-.03.116m-16.177 4.846A12.003 12.003 0 0112 21.75c2.662 0 5.138-.863 7.14-2.334m-14.28 0a11.96 11.96 0 00-2.333-7.14M12 21.75v-9.75m0 0a2.25 2.25 0 012.25 2.25v0a2.25 2.25 0 01-2.25-2.25v0a2.25 2.25 0 01-2.25-2.25v0A2.25 2.25 0 0112 12z" />
    </svg>
);

export const ShieldCheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.607 11.955 11.955 0 019 2.607 12.02 12.02 0 00-2.382-9.984z" />
    </svg>
);

export const UserGroupIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const UserIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


export const LockIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${className}`}>
        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
    </svg>
);


// --- HEADER & FOOTER ---
interface HeaderProps {
    isLoggedIn: boolean;
    navigateTo: (page: Page) => void;
    login: () => void;
    logout?: () => void;
    createChampionship?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, navigateTo, login, logout, createChampionship }) => {
    return (
        <header className="bg-primaire text-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="font-bold text-2xl cursor-pointer flex items-center" onClick={() => navigateTo('home')}>
                    <TrophyIcon className="mr-2 h-8 w-8" />
                    AYITIDATASPÒ
                </div>
                <nav className="flex items-center space-x-4">
                    <a onClick={() => navigateTo('search')} className="hover:text-gray-300 cursor-pointer">Recherche</a>
                    {isLoggedIn ? (
                        <>
                            <Button onClick={() => navigateTo('dashboard')} variant="secondary" className="bg-transparent border border-white hover:bg-white hover:text-primaire">Dashboard</Button>
                            <Button onClick={logout} variant="secondary">Déconnexion</Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={login} variant="primary" className="bg-transparent border border-white hover:bg-white hover:text-primaire">Se connecter</Button>
                            <Button onClick={createChampionship} variant="secondary">Créer un championnat</Button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export const Footer = () => (
    <footer className="bg-texte-principal text-white mt-auto">
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h3 className="font-bold text-xl">AYITIDATASPÒ</h3>
                    <p className="text-sm text-gray-400">Professionnaliser le sport, valoriser les talents.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-gray-300">À propos</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                    <a href="#" className="hover:text-gray-300">Conditions d'utilisation</a>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-6">
                &copy; {new Date().getFullYear()} AyitiDataSpò. Tous droits réservés.
            </div>
        </div>
    </footer>
);

// --- FORM ELEMENTS ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'success';
}

export const Button: React.FC<ButtonProps> = ({ children, className, variant = 'primary', ...props }) => {
    const baseClasses = 'px-6 py-2 rounded-md font-semibold text-white transition-transform duration-150 ease-in-out hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
        primary: 'bg-primaire hover:bg-blue-800 focus:ring-primaire',
        secondary: 'bg-secondaire hover:bg-red-700 focus:ring-secondaire',
        success: 'bg-succes hover:bg-green-600 focus:ring-succes',
    };
    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, ...props }) => (
    <div className="w-full">
        <label htmlFor={id} className="block text-sm font-medium text-texte-secondaire mb-1">{label}</label>
        <input id={id} className="w-full px-3 py-2 border border-neutre-active rounded-md shadow-sm focus:ring-primaire focus:border-primaire" {...props} />
    </div>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ label, id, children, ...props }) => (
    <div className="w-full">
        <label htmlFor={id} className="block text-sm font-medium text-texte-secondaire mb-1">{label}</label>
        <select id={id} className="w-full px-3 py-2 border border-neutre-active rounded-md shadow-sm focus:ring-primaire focus:border-primaire bg-white" {...props}>
            {children}
        </select>
    </div>
);


// --- UI ELEMENTS ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  const isClickable = !!onClick;
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden p-6 border border-gray-200 ${isClickable ? 'cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};


export const TrustBadge: React.FC<{ status: TrustLabelStatus }> = ({ status }) => {
    if (status !== TrustLabelStatus.VERIFIED) return null;
    return (
        <div className="flex items-center text-primaire font-semibold text-sm" title="Organisation Vérifiée">
            <ShieldCheckIcon className="w-5 h-5 mr-1" />
            Vérifié
        </div>
    );
};

// --- NAVIGATION ELEMENTS ---
interface BackButtonProps {
    onClick: () => void;
    text: string;
}
export const BackButton: React.FC<BackButtonProps> = ({ onClick, text }) => (
    <button 
        onClick={onClick} 
        className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primaire bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaire transition-colors"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {text}
    </button>
);