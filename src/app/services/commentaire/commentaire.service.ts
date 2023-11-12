import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commentaire} from "../../models/commentaire.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommentaireService {
    private commentaireUrl: string = '/api/commentaires';

    public constructor(private http: HttpClient) {
    }


    public getCommentsRecipie(currentReciepie: string): Observable<Commentaire[]> {
        return this.http.get<Commentaire[]>(`${this.commentaireUrl}/${currentReciepie}`);
    }

    public addComment(newComment: Commentaire): Observable<Commentaire> {
        const jsonBody: string = JSON.stringify(newComment);
        return this.http.post<Commentaire>(this.commentaireUrl, jsonBody);
    }

    public updateComment(idComment: number, newComment: string): Observable<Commentaire> {
        const jsonBody: string = JSON.stringify(newComment);

        return this.http.put<Commentaire>(`${this.commentaireUrl}/${idComment}`, jsonBody);
    }

    public deleteComment(idCommentaire: number): Observable<Commentaire> {
        return this.http.delete<Commentaire>(`${this.commentaireUrl}/${idCommentaire}`);
    }

}
