import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commentaire} from "../../models/comment.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommentaireService {
    private commentsUrl: string = '/api/comments';

    public constructor(private http: HttpClient) {
    }


    public getCommentsRecipe(currentRecipe: string): Observable<Commentaire[]> {
        return this.http.get<Commentaire[]>(`${this.commentsUrl}/${currentRecipe}`);
    }

    public addComment(newComment: Commentaire): Observable<Commentaire> {
        const jsonBody: string = JSON.stringify(newComment);
        return this.http.post<Commentaire>(this.commentsUrl, jsonBody);
    }

    public updateComment(idComment: number, newComment: string): Observable<Commentaire> {
        const jsonBody: string = JSON.stringify(newComment);

        return this.http.put<Commentaire>(`${this.commentsUrl}/${idComment}`, jsonBody);
    }

    public deleteComment(idComment: number): Observable<Commentaire> {
        return this.http.delete<Commentaire>(`${this.commentsUrl}/${idComment}`);
    }

}
