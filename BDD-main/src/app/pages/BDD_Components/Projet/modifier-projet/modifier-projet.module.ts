import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ModifierProjetComponent } from "./modifier-projet.component";

const routes: Routes = [
    {path: 'ModifierProjet',component: ModifierProjetComponent,data: { animation: 'layout' }}
  ];
  
  @NgModule({
    declarations: [ModifierProjetComponent],
    imports: [FormsModule]
  })
  export class ModfierProjetModule {}