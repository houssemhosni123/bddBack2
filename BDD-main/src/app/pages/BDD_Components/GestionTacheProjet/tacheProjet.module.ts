import { NgModule } from "@angular/core";
import { AfficherTacheProjetComponent } from './afficher-tache-projet/afficher-tache-projet.component';
import { AfficherTacheProjetModule } from "./afficher-tache-projet/afficher-tache-projet-module";
import { AjouterTacheProjetModule } from "./ajouter-tache-projet/ajouter-tache-projet.module";
import { ModifierTacheProjetModule } from "./modifier-tache-projet/modifier-tache-projet.module";

@NgModule({
  declarations: [  
  
  
  ],
  imports: [
    ModifierTacheProjetModule,
    AjouterTacheProjetModule,
    AfficherTacheProjetModule
  ],
  exports: [

    // Add the modules you want to export here
  ]
})
export class TacheProjetModule {}