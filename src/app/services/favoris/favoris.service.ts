import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commentaire} from "../../models/commentaire.model";
import {Favoris} from "../../models/favoris.model";

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  public favorisUrl = '/api/favoris';

  constructor(private http: HttpClient) {}

  public getFavoris() {
      return this.http.get<Favoris[]>(this.favorisUrl);
  }

  public getFavorisUser(currentUser: string) {
      return this.http.get<Favoris[]>(`${this.favorisUrl}/${currentUser}`);
    }

  public addFavoris(newFavoris: Favoris) {
      const jsonBody = JSON.stringify(newFavoris);
      return this.http.post(this.favorisUrl, jsonBody);
    }



    public delFavoris(newFavoris: Favoris) {
        const jsonBody = JSON.stringify(newFavoris);
        return this.http.delete(`${this.favorisUrl}/${newFavoris.user}/${newFavoris.favoris}`);
    }
}

