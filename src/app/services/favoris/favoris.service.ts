import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Favoris} from "../../models/favoris.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FavorisService {

    private favorisUrl: string = '/api/favoris';

    public constructor(private http: HttpClient) {
    }

    public getFavoris(): Observable<Favoris[]> {
        return this.http.get<Favoris[]>(this.favorisUrl);
    }

    public getFavorisUser(currentUser: string): Observable<Favoris[]> {
        return this.http.get<Favoris[]>(`${this.favorisUrl}/user/${currentUser}`);
    }

    public getFavorisRecette(recette: string): Observable<Favoris[]> {

        return this.http.get<Favoris[]>(`${this.favorisUrl}/recette/${recette}`);
    }

    public getFavorisUserRecette(currentUser: string, recette: string): Observable<Favoris[]> {
        return this.http.get<Favoris[]>(`${this.favorisUrl}/user-recette/${currentUser}/${recette}`);
    }

    public addFavoris(newFavoris: Favoris): Observable<Favoris> {
        const jsonBody: string = JSON.stringify(newFavoris);
        return this.http.post<Favoris>(this.favorisUrl, jsonBody);
    }


    public delFavoris(newFavoris: Favoris): Observable<Favoris> {
        return this.http.delete<Favoris>(`${this.favorisUrl}/${newFavoris.user}/${newFavoris.favoris}`);
    }
}

