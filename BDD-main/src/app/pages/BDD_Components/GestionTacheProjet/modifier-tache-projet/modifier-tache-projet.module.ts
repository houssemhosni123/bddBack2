import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ModifierTacheProjetComponent } from "./modifier-tache-projet.component";


const routes: Routes = [
    { path: 'ModifierTacheProjet/:id', component: ModifierTacheProjetComponent, data: { animation: 'layout' } }
];

@NgModule({
    declarations: [ModifierTacheProjetComponent],
    imports: [RouterModule.forChild(routes), FormsModule,CommonModule,ReactiveFormsModule],
    exports: [ModifierTacheProjetComponent],
    providers: [] 
})
export class ModifierTacheProjetModule {}