import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commentaire} from "../../models/commentaire.model";
import {Recette} from "../../models/recette.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommentaireService {
    public commentaireUrl:string = '/api/commentaires';

    public constructor(private http: HttpClient) {
    }

    public getComments(): Observable<Commentaire[]> {
        return this.http.get<Commentaire[]>(this.commentaireUrl);
    }

    public getUserComments(user : string):Observable<Commentaire[]>{
      return this.http.get<Commentaire[]>(`${this.commentaireUrl}/user/${user}`);
  }

    public getCommentsRecipie(currentReciepie: string):Observable<Commentaire[]> {
        return this.http.get<Commentaire[]>(`${this.commentaireUrl}/${currentReciepie}`);
    }

    public addComment(newComment: Commentaire) {
        const jsonBody:string = JSON.stringify(newComment);
        return this.http.post(this.commentaireUrl, jsonBody);
    }

}
