import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { roles, User } from './user'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private usersUrl = 'api/users';  // URL to web api
  constructor(
    private http: HttpClient,
  ) { }

  /** GET users from the server */
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  /** PUT: update the user on the server */
  updateUser (user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.usersUrl, user, httpOptions).pipe(
      catchError(this.handleError<any>('updateUser'))
    );
  }

  /** POST: add a new user to the server */
  addUser (user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
      catchError(this.handleError<User>('addUser'))
    );
  }

  getNotConfirmedUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.usersUrl}/?confirmed=${false}`);
  }

  getConfirmedUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.usersUrl}/?confirmed=${true}`);
  }

  getResponsibleUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.usersUrl}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote loetging infrastructure
      console.error(error); // log to console instead
   
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
