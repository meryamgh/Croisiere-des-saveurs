import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recette} from "../../models/recette.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RecetteService {
    recettesUrl = '/api/recettes';

    constructor(private http: HttpClient) {
    }

    public getRecettes() {
        return this.http.get<Recette[]>(this.recettesUrl);
    }

    public getRecette(nomRecette: string) {
        console.log(nomRecette);
        return this.http.get<Recette>(`${this.recettesUrl}/${nomRecette}`);
    }


}
