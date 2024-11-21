import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AjouterProjetComponent } from "./ajouter-projet.component";

const routes: Routes = [
    {path: 'AjouterProjet',component: AjouterProjetComponent,data: { animation: 'layout' }}
  ];
  
  @NgModule({
    declarations: [AjouterProjetComponent],
    imports: [ FormsModule, 
    ReactiveFormsModule]  })
  export class AjouterProjetModule {}