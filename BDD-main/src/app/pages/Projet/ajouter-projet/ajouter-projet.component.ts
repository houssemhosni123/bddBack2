import { Component, OnInit } from '@angular/core';
import { Projet } from '../../../Models/Projet';
import { ProjetService } from '../../../Services/ProjetService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.scss']
})
export class AjouterProjetComponent implements OnInit{
  projets: Projet[] = [];
  constructor(    private router: Router  // Inject Router
  ,private projetService: ProjetService) { }
  ngOnInit(): void {
    
  }
  validateDates(form: NgForm) {
    const startDate = form.value.dateDebut_Projet;
    const endDate = form.value.dateFin_Projet;

    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      // Setting a custom error message in the form control
      form.controls['dateFin_Projet'].setErrors({ 'dateInvalid': true });
    }
  }
  saveProjet(projet: Projet): void {
    
    this.projetService.createProjet(projet).subscribe(
      (data: Projet) => {
        console.log(data); // Log the returned data object
        this.router.navigate(['/pages/AfficherProjet']); // Redirect to the specified URL
      },
      (error: any) => {
        console.error('Error saving projet', error);
      }
    );
  }
  navigateToAfficher(): void {
    this.router.navigate(['/AfficherProjet']); // Navigate to '/afficher' route
    // Replace '/afficher' with your actual route path
  }
  
}
