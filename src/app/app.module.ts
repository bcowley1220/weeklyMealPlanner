import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MainViewComponent } from "./meal-view/main-view/main-view.component";
import { HeaderComponent } from "./meal-view/header/header.component";
import { MealViewComponent } from "./meal-view/meal-view.component";
import { NavBarComponent } from "./meal-view/nav-bar/nav-bar.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { PlanningFormComponent } from "./meal-view/main-view/planning-form/planning-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ApiTestComponent } from "./meal-view/main-view/api-test/api-test.component";

let appRoutes: Routes = [
  { path: "planning-form", component: PlanningFormComponent },
  { path: "api-test", component: ApiTestComponent }
  // { path: "scores", component: ScoresComponent },
  // { path: "", redirectTo: "planning-form", pathMatch: "full" }
];
@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderComponent,
    MealViewComponent,
    NavBarComponent,
    PlanningFormComponent,
    ApiTestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
