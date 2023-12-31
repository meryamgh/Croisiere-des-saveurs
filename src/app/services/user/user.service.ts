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


  public constructor(private http: HttpClient) {
  }

  public getUser(email: string): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}${email}`);
  }

  public createUser(user: User): Observable<Object> {
    user.boardingTicketNumber = `${Math.floor(Math.random() * (200 - 100 + 1)) + 100}${String.fromCharCode(Math.floor(Math.random() * 26) + 65)}`;
    user.highScore = 0;
    const jsonBody: string = JSON.stringify(user);

    return this.http.post(this.usersUrl, jsonBody);
  }

  public updateUser(newUser: User): Observable<User> {
    const jsonBody: string = JSON.stringify(newUser);
    sessionStorage.setItem("userLogged", JSON.stringify(newUser));
    this.userSubject.next(newUser);
    return this.http.put<User>(this.usersUrl, jsonBody);
  }

  public getUserWithHighestScore(): Observable<User> {
    return this.http.get<User>(this.usersUrl + 'highestScore');
  }

  public loggedUser(userLoggedId: User): void {
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

  public setUserSubject(newUser: User): void {
    this.userSubject.next(newUser);
  }

}
