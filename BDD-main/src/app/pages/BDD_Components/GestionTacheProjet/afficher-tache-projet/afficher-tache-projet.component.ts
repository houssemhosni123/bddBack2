import { Component, OnInit } from '@angular/core';
import { Tache } from '../../../../Core/bdd_Models/bdd_Tache';
import { TacheService } from '../../../../Core/bdd_Services/bdd_TacheService';


@Component({
  selector: 'ngx-afficher-tache-projet',
  templateUrl: './afficher-tache-projet.component.html',
  styleUrls: ['./afficher-tache-projet.component.scss']
})
export class AfficherTacheProjetComponent implements OnInit{


  taches: Tache[] = [];

  constructor(private tacheService: TacheService) {}

  ngOnInit(): void {
    this.getAllTaches();
  }
  deleteTache(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.tacheService.deleteTache(id).subscribe(
        () => {
          this.taches = this.taches.filter(tache => tache.idTache !== id);
        },
        (error) => {
          console.error('Error deleting tache', error);
          alert('Failed to delete task');
        }
      );
    }
  }

  getAllTaches(): void {
    this.tacheService.getAllTaches().subscribe(
      (data: Tache[]) => {
        this.taches = data;
      },
      (error) => {
        console.error('Error fetching taches', error);
      }
    );
  }
}


