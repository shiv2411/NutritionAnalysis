import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NutritionDetailsComponent } from './nutrition-details/nutrition-details.component';
import { TotalNutritionComponent } from './total-nutrition/total-nutrition.component';

const routes: Routes = [
   {path: '', component: HomeComponent},                                  //by default home page for the user to enter ingredients
   { path : 'nutrition-details', component: NutritionDetailsComponent},   //router for summary of nutrition breakdown
   { path : 'total-nutrition', component: TotalNutritionComponent}        // router for total of all the nutrition
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
