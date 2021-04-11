import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutrition-details',
  templateUrl: './nutrition-details.component.html',
  styleUrls: ['./nutrition-details.component.scss']
})
export class NutritionDetailsComponent implements OnInit {

  public nutritionDetails:any;

  constructor(private router: Router) { }

  ngOnInit() {
    //getting data from the router
    this.nutritionDetails = history.state;
  }

  total() {
    //on click of total button navigating to the route /total-nutrition and also passing the data
    this.router.navigateByUrl('/total-nutrition', { state: this.nutritionDetails})
  }

}
