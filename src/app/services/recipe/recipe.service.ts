import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../../models/recipe.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesUrl: string = '/api/recipes';

  constructor(private http: HttpClient) {
  }

  public getAllRececipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

  public getRecipeByName(nomRecette: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.recipesUrl}/${nomRecette}`);
  }

  public getRecipeByCountry(countryName: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipesUrl}/country/${countryName}`);
  }
}
