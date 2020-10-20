import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiTestComponent } from './api-test/api-test.component';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'test', component: ApiTestComponent },
  { path: 'results', component: ResultsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
