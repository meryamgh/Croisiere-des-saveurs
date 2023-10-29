import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commentaire} from "../../models/commentaire.model";
import {Recette} from "../../models/recette.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommentaireService {
    public commentaireUrl = '/api/commentaires';

    constructor(private http: HttpClient) {
    }

    public getComments() {
        return this.http.get<Commentaire[]>(this.commentaireUrl);
    }

    public getUserComments(user : string){
      return this.http.get<Commentaire[]>(`${this.commentaireUrl}/user/${user}`);
  }

    public getCommentsRecipie(currentReciepie: string) {
        return this.http.get<Commentaire[]>(`${this.commentaireUrl}/${currentReciepie}`);
    }

    public addComment(newComment: Commentaire) {
        const jsonBody = JSON.stringify(newComment);
        return this.http.post(this.commentaireUrl, jsonBody);
    }

}
