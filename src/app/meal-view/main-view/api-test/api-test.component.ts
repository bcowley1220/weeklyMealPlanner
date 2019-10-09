import { Component, OnInit } from "@angular/core";
import { MealPlannerService } from "../../../services/meal-planner.service";
@Component({
  selector: "app-api-test",
  templateUrl: "./api-test.component.html",
  styleUrls: ["./api-test.component.css"]
})
export class ApiTestComponent implements OnInit {
  constructor(private mealPlannerService: MealPlannerService) {}
  recipeData: any;
  ngOnInit() {}

  getRecipe(): void {
    this.mealPlannerService.getRecipeSearch().subscribe(response => {
      this.recipeData = response.data;
      console.log(this.recipeData);
    });
  }
}
