import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { AfficherTacheProjetComponent } from "./afficher-tache-projet.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";


const routes: Routes = [
    {path: 'AfficherTacheProjet',component: AfficherTacheProjetComponent,data: { animation: 'layout' }},
];

@NgModule({
    declarations: [AfficherTacheProjetComponent],
    imports: [RouterModule.forChild(routes), FormsModule,CommonModule,      NgxDatatableModule
        ,  ReactiveFormsModule,
    ],
    exports: [AfficherTacheProjetComponent],
    providers: [] 
})
export class AfficherTacheProjetModule {}