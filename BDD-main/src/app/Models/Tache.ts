import { Projet } from "./Projet";

export interface Tache {
    idTache?: number; // Made optional for creation
    description: string;
    dateCreation: string; // Changed to string
    user: string; // Changed to string

    dateDebutTache: string; // Changed to string
    dateFinTache: string; // Changed to string
    tacheProjet: RoleProjet;
    projet: Projet;
}

export enum RoleProjet {
    DEVELOPER = 'DEVELOPER',
    MANAGER = 'MANAGER',
    TESTER = 'TESTER',
}
