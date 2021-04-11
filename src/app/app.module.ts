import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NutritionDetailsComponent } from './nutrition-details/nutrition-details.component';
import { HomeComponent } from './home/home.component';
import { TotalNutritionComponent } from './total-nutrition/total-nutrition.component';
@NgModule({
  declarations: [
    AppComponent,
    NutritionDetailsComponent,
    HomeComponent,
    TotalNutritionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
