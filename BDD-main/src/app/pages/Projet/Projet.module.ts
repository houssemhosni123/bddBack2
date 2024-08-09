import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AjouterProjetModule } from "./ajouter-projet/ajouter-projet.module";
import { ModfierProjetModule } from "./modifier-projet/modifier-projet.module";
import { AfficherProjetModule } from "./afficher-projet/afficher-projet.module";




@NgModule({
    declarations: [
    
  ],
    imports: [
        AjouterProjetModule,
        AfficherProjetModule,
        ModfierProjetModule,
        FormsModule,
        ReactiveFormsModule

      ]
  })
  export class ProjetModule {
  }