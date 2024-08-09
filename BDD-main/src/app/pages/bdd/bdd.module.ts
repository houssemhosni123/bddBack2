import { NgModule } from '@angular/core';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbListModule, NbMenuModule, NbRouteTabsetModule, NbStepperModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ECommerceModule } from '../e-commerce/e-commerce.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { PagesRoutingModule } from '../pages-routing.module';
import { PagesComponent } from '../pages.component';
import { BDDComponent } from './bdd.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
const routes: Routes = [
  ];
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,

  ],
  declarations: [BDDComponent],
})
export class bddModule {
}
