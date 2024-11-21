export interface Projet {
    idProjet?: number;
    nom_Projet: string;
    client: string;
    project_Manager: string;
    description_Projet: string;
    dateDebut_Projet: Date;
    dateFin_Projet: Date;
    type: Status;
  }
  
  export enum Status {
    NOT_STARTED = 'NOT_STARTED',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
  }
  