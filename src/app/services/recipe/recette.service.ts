import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recette} from "../../models/recipe.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RecetteService {
    private recipesUrl: string = '/api/recipes';

    constructor(private http: HttpClient) {
    }

    public getAllRececipes(): Observable<Recette[]> {
        return this.http.get<Recette[]>(this.recipesUrl);
    }

    public getRecipeByName(nomRecette: string): Observable<Recette> {
        return this.http.get<Recette>(`${this.recipesUrl}/${nomRecette}`);
    }

    public getRecipeByCountry(countryName: string): Observable<Recette[]> {
        return this.http.get<Recette[]>(`${this.recipesUrl}/country/${countryName}`);
    }

}
