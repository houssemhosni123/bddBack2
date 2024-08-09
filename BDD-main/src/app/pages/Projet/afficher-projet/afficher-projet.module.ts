import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AfficherProjetComponent } from "./afficher-projet.component";
import { CommonModule } from "@angular/common";
import { AjouterProjetComponent } from "../ajouter-projet/ajouter-projet.component";

const routes: Routes = [
    {path: 'AfficherProjet',component: AfficherProjetComponent,data: { animation: 'layout' }},
    {path: 'AjouterProjet',component: AjouterProjetComponent,data: { animation: 'layout' }}

  ];
  
  @NgModule({
    declarations: [AfficherProjetComponent],
    imports: [ FormsModule,   RouterModule , CommonModule,
    ReactiveFormsModule]
  })
  export class AfficherProjetModule {

  
  }