import {Injectable} from '@angular/core';
import {User} from "../../models/user.model";
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string = '/api/users/';
  private userSubject: Subject<User | null> = new Subject<User | null>();
  public userLogged !: User;

  public constructor(private http: HttpClient) {
  }


  public getUser(email: string): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}${email}`);
  }

  public createUser(user: User): Observable<Object> {
    user.embarquementTicketNumber = `${Math.floor(Math.random() * (200 - 100 + 1)) + 100}${String.fromCharCode(Math.floor(Math.random() * 26) + 65)}`;
    user.highScore = 0;
    const jsonBody: string = JSON.stringify(user);

    return this.http.post(this.usersUrl, jsonBody);
  }

  public updateUser(newUser: User): Observable<User> {
    const jsonBody: string = JSON.stringify(newUser);
    return this.http.put<User>(this.usersUrl, jsonBody);
  }

  public getUserWithHighestScore(): Observable<User> {
    return this.http.get<User>(this.usersUrl + 'highestScore');
  }


  public isLogged(userLoggedId: User): void {
    sessionStorage.setItem("userLogged", JSON.stringify(userLoggedId));
    this.userSubject.next(userLoggedId);
    this.userLogged = userLoggedId;
  }

  public getDeconnected(): void {
    sessionStorage.removeItem("userLogged");
    this.userSubject.next(null);
  }

  public getUserSubject(): Subject<User | null> {
    return this.userSubject;
  }

  public setUserSubject(newUser: User): void {
    this.userSubject.next(newUser);
  }
}
