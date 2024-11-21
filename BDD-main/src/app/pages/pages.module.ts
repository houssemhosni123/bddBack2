import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { Routes } from '@angular/router';
import { AjouterProjetComponent } from './BDD_Components/Projet/ajouter-projet/ajouter-projet.component';
import { bddModule } from './BDD_Components/bdd/bdd.module';
import { TacheProjetModule } from './BDD_Components/GestionTacheProjet/tacheProjet.module';
import { ProjetModule } from './BDD_Components/Projet/Projet.module';
const routes: Routes = [
  {path: 'AjouterProjet',component: AjouterProjetComponent,data: { animation: 'layout' }}
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    bddModule,
    ProjetModule,
    TacheProjetModule
  ],
  declarations: [
    PagesComponent,
    
  ],
})
export class PagesModule {
}
