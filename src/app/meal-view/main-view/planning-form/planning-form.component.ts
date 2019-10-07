import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "planning-form",
  templateUrl: "./planning-form.component.html",
  styleUrls: ["./planning-form.component.css"]
})
export class PlanningFormComponent implements OnInit {
  constructor() {}
  // todayDate = new FormControl("");
  todayDate = new Date();

  ngOnInit() {}
}
