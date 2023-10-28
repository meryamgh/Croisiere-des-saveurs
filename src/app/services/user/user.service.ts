import {Injectable} from '@angular/core';
import {User} from "../../models/user.model";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    usersUrl = '/api/users/';

    constructor(private http: HttpClient) {
    }

    public getUsers() {
        return this.http.get<User[]>(this.usersUrl);
    }

    public getUser(email: string) {
        return this.http.get(`${this.usersUrl}${email}`);
    }


    public createUser(user: User): Observable<Object> {
        const jsonBody = JSON.stringify(user);
        return this.http.post(this.usersUrl, jsonBody);
    }


    public isLogged(userLoggedId: User) {
        const userJSON = JSON.stringify(userLoggedId);
        sessionStorage.setItem("userLogged", userJSON);
    }

    public getDeconnected() {
        sessionStorage.removeItem("userLogged");
    }


}
