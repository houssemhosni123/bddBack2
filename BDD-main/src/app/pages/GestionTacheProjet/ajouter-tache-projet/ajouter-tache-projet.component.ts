import { User } from './../../../@core/data/users';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Projet, Status } from '../../../Models/Projet';
import { Tache } from '../../../Models/Tache';
import { ProjetService } from '../../../Services/ProjetService';
import { TacheService } from '../../../Services/TacheService';

@Component({
  selector: 'app-ajouter-tache-projet',
  templateUrl: './ajouter-tache-projet.component.html',
  styleUrls: ['./ajouter-tache-projet.component.scss']
})
export class AjouterTacheProjetComponent implements OnInit{
  projets: Projet[];
  taskDetailsForm: FormGroup;
  searchText: string = '';
  showProjectCard: boolean = false;
  constructor(
    private router: Router,
    private _projetService: ProjetService,
    private formBuilder: FormBuilder,
    private _tacheService: TacheService
  ) {
    this.taskDetailsForm = this.formBuilder.group({
      description: ['', Validators.required],
      tacheProjet: ['', Validators.required],
      selectedProject: ['', Validators.required],
      projet: ['', Validators.required],
      dateDebutTache: ['', Validators.required],
      dateFinTache: ['', Validators.required],
      user: ['', Validators.required] // New user field
    });
  }
  ngOnInit(): void {
    this.loadProjets();
  }
  
  loadProjets(): void {
    this._projetService.getAllProjets().subscribe(
      (data: Projet[]) => {
        this.projets = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
  addProjectToTask(projet: Projet): void {
    const dateDebutTache = new Date(projet.dateDebut_Projet);
    const dateFinTache = new Date(projet.dateFin_Projet);

    this.taskDetailsForm.patchValue({
      selectedProject: `${projet.nom_Projet}`,
      projet: projet.idProjet,
      dateDebutTache: dateDebutTache,
      dateFinTache: dateFinTache
    });
  }
  addTask(): void {
    const formValue = this.taskDetailsForm.value;
    const tache: Tache = {
        description: formValue.description,
        user:formValue.user,
        dateCreation: new Date().toISOString(),
        dateDebutTache: new Date(formValue.dateDebutTache).toISOString(),
        dateFinTache: new Date(formValue.dateFinTache).toISOString(),
        tacheProjet: formValue.tacheProjet,
        projet: {
          idProjet: formValue.projet,
          nom_Projet: 'Default Name', // Replace with actual value or handle it properly
          client: 'Default Client', // Replace with actual value or handle it properly
          project_Manager: 'Default Manager', // Replace with actual value or handle it properly
          description_Projet: 'Default Description', // Replace with actual value or handle it properly
          dateDebut_Projet: new Date(), // Replace with actual value or handle it properly
          dateFin_Projet: new Date(),
          type: Status.NOT_STARTED
        }
    };

    console.log('Task Data:', tache);

    this._tacheService.addTache(tache).subscribe(
        (response) => {
            console.log('Task added successfully:', response);
            this.taskDetailsForm.reset();
        },
        (error) => {
            console.error('Error adding task:', error);
        }
    );
}

  
  
  
  

  showProjectList() {
    this.showProjectCard = true;
  }
}