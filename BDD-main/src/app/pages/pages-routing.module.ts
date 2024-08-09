import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { BDDComponent } from './bdd/bdd.component';
import { AjouterProjetComponent } from './Projet/ajouter-projet/ajouter-projet.component';
import { AfficherProjetComponent } from './Projet/afficher-projet/afficher-projet.component';
import { AjouterTacheProjetComponent } from './GestionTacheProjet/ajouter-tache-projet/ajouter-tache-projet.component';
import { AfficherTacheProjetComponent } from './GestionTacheProjet/afficher-tache-projet/afficher-tache-projet.component';
import { ModifierTacheProjetComponent } from './GestionTacheProjet/modifier-tache-projet/modifier-tache-projet.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'Projet',
      loadChildren: () => import('./Projet/Projet.module').then(m => m.ProjetModule),
    },
    {
      path: 'Behavior_Driven_Development',
      component: BDDComponent,
    },
    {path: 'AjouterProjet',component: AjouterProjetComponent,data: { animation: 'layout' }},
    {path: 'AfficherProjet',component: AfficherProjetComponent,data: { animation: 'layout' }},
    {path: 'AjouterTacheProjet',component: AjouterTacheProjetComponent,data: { animation: 'layout' }},
    {path: 'AfficherTacheProjet',component: AfficherTacheProjetComponent,data: { animation: 'layout' }},
    { path: 'ModifierTacheProjet/:id', component: ModifierTacheProjetComponent, data: { animation: 'layout' } },

    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}