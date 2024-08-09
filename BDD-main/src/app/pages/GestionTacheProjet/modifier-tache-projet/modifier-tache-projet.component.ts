import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from '../../../Models/Tache';
import { Projet } from '../../../Models/Projet';
import { ProjetService } from '../../../Services/ProjetService';
import { TacheService } from '../../../Services/TacheService';


@Component({
  selector: 'app-modifier-tache-projet',
  templateUrl: './modifier-tache-projet.component.html',
  styleUrls: ['./modifier-tache-projet.component.scss']
})
export class ModifierTacheProjetComponent implements OnInit {
  projets: Projet[];
  selectedRole: string = 'All';
  taskDetailsForm: FormGroup;
  searchText: string = '';
  showUserCard: boolean = false;
  showProjectCard: boolean = false;
  tache: Tache; 
  TacheForm : FormGroup;
  
  constructor(
    private _projetService: ProjetService,
    private _TacheService:TacheService,
    private route: ActivatedRoute,
    private router: Router ,
    private formbuilder:FormBuilder) {


      this.taskDetailsForm = this.formbuilder.group({
        description: [''],
        tacheProjet: [''],
        user: [''],
        selectedProject: [''],
        projet: [''],
        dateDebutTache: [''],
        dateFinTache: ['']
      });
     }



    
  ngOnInit(): void {

    this.loadProjets();

    

    this._TacheService.getTacheById(this.route.snapshot.params.id).subscribe(data => {
    const projet=data.projet
      this.taskDetailsForm.patchValue({
        description: data.description,
        dateDebutTache: data.dateDebutTache,
        user:data.user,
        tacheProjet: data.tacheProjet,
        dateFinTache: data.dateFinTache,
        projet: projet.idProjet, // Assigning the project ID here
        selectedProject: projet.nom_Projet ,// Displaying project name here
      });
      console.log(data);
    });
    
  }
  
  updateTask(): void {
    const id = this.route.snapshot.params.id;
    const updatedTache = this.taskDetailsForm.value as Tache;
  
    this.updateTacheById(id, updatedTache);
    this.router.navigateByUrl('/pages/AfficherTacheProjet');

  }
  
  updateTacheById(id: number, updatedTache: Tache): void {
    this._TacheService.updateTache(id, updatedTache)
      .subscribe(updated => {
        // Handle success
        console.log('Task updated successfully:', updated);
        // Optionally, update the local data if needed
      }, error => {
        // Handle error
        console.error('Error updating task:', error);
      });
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
    const tache = this.taskDetailsForm.value as Tache;
  
    this._TacheService.addTache(tache).subscribe(
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
