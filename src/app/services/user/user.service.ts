import { Injectable } from '@angular/core';
import { User } from "../../models/user.model";
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public usersUrl = '/api/users/';
    public userSubject: Subject<User | null> = new Subject<User | null>();

    public constructor(private http: HttpClient) {
    }


    public getUser(email: string): Observable<User> {
        return this.http.get<User>(`${this.usersUrl}${email}`);
    }

    public createUser(user: User): Observable<Object> {
        const jsonBody = JSON.stringify(user);
        return this.http.post(this.usersUrl, jsonBody);
    }

    public updateUser(newUser : User) : Observable<User> {
      const jsonBody = JSON.stringify(newUser);
      return this.http.put<User>(this.usersUrl, jsonBody);
    }


    public isLogged(userLoggedId: User): void {
        sessionStorage.setItem("userLogged", JSON.stringify(userLoggedId));
        this.userSubject.next(userLoggedId);
    }

    public getDeconnected(): void {
        sessionStorage.removeItem("userLogged");
        this.userSubject.next(null);
    }

    public getUserSubject(): Subject<User | null> {
        return this.userSubject;
    }
}
