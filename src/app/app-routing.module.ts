import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {TravelCalculationComponent} from './travel-calculation/travel-calculation.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'travel-calculation', component: TravelCalculationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
