import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CallbackComponent} from "./callback/callback.component";
import { SalesComponent } from './sales/sales.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: '', component: HomeComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'travel', component: TravelComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
