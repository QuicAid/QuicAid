import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiTestComponent } from './api-test/api-test.component';
import { HomeComponent } from './home/home.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { MapsComponent } from './maps/maps.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'test', component: ApiTestComponent },
  { path: 'symptoms', component: SymptomsComponent },
  { path: 'maps', component: MapsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
