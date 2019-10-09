import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "planning-form",
  templateUrl: "./planning-form.component.html",
  styleUrls: ["./planning-form.component.css"]
})
export class PlanningFormComponent implements OnInit {
  constructor() {}
  // todayDate = new FormControl("");
  planningForm = new FormGroup({
    amountOfPeople: new FormControl(""),
    howManyMealsPerDay: new FormControl("")
    // lowCarb: new FormControl(""),
    // lowFat: new FormControl(""),
    // highProtein: new FormControl("")
  });
  ngOnInit() {}

  onPlanningFormSubmit() {
    return this.planningForm.value;
  }
}
