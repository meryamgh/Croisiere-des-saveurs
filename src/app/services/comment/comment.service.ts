import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../../models/comment.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommentService {
    private commentsUrl: string = '/api/comments';

    public constructor(private http: HttpClient) {
    }


    public getCommentsRecipe(currentRecipe: string): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${this.commentsUrl}/${currentRecipe}`);
    }

    public addComment(newComment: Comment): Observable<Comment> {
        const jsonBody: string = JSON.stringify(newComment);
        return this.http.post<Comment>(this.commentsUrl, jsonBody);
    }

    public updateComment(idComment: number, newComment: string): Observable<Comment> {
        const jsonBody: string = JSON.stringify(newComment);

        return this.http.put<Comment>(`${this.commentsUrl}/${idComment}`, jsonBody);
    }

    public deleteComment(idComment: number): Observable<Comment> {
        return this.http.delete<Comment>(`${this.commentsUrl}/${idComment}`);
    }

}
