import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MealPlannerService {
  constructor(private http: HttpClient) {}

  getRecipeSearch(): Observable<any> {
    return this.http.get(
      `https://api.edamam.com/search?q=chicken&app_id=84cf87a5&app_key=286bb5928295c6590d91963813db2669`
    );
  }
}
