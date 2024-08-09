import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { AjouterTacheProjetComponent } from "./ajouter-tache-projet.component";


const routes: Routes = [
    {path: 'AjouterTacheProjet',component: AjouterTacheProjetComponent,data: { animation: 'layout' }},
];

@NgModule({
    declarations: [AjouterTacheProjetComponent],
    imports: [RouterModule.forChild(routes), FormsModule,CommonModule,    ReactiveFormsModule,
    ],
    exports: [AjouterTacheProjetComponent],
    providers: [] 
})
export class AjouterTacheProjetModule {}