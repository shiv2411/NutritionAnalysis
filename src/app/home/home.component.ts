import { Component, OnInit } from "@angular/core";
import { Ingredients } from "../ingredients.model";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title = "Nutrient Analysis Application";
  public nutritionDetails: any;
  public errorMessage: string;
  public ingredients: Ingredients = {
    ingr: "",
  };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {}
  analyse() {
    const body = {
      ingr: this.ingredients.ingr.split("\n"),
    };
    this.errorMessage = "";
    //consuming data from the apiservice and passing the data to the router /nutrition-details on successful subscription
    this.apiService.analyzeNutrition(body).subscribe(
      (data) => {
        this.nutritionDetails = data;
        this.router.navigateByUrl("/nutrition-details", {
          state: this.nutritionDetails,
        });
      },
      (error) => {
        this.errorMessage = "Server error";
      }
    );
  }
}
