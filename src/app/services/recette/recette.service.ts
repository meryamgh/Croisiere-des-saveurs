import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recette} from "../../models/recette.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RecetteService {
    private recettesUrl: string = '/api/recettes';

    constructor(private http: HttpClient) {
    }

    public getRecettes(): Observable<Recette[]> {
        return this.http.get<Recette[]>(this.recettesUrl);
    }

    public getRecette(nomRecette: string): Observable<Recette> {
        return this.http.get<Recette>(`${this.recettesUrl}/${nomRecette}`);
    }

    public getRecettesByCountry(countryName: string): Observable<Recette[]> {
        return this.http.get<Recette[]>(`${this.recettesUrl}/country/${countryName}`);
    }


}
