import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from './user.model';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:3000/users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        const headers = new HttpHeaders({ "Custom-Header": "Hello World!" });
        const params = new HttpParams().append('key1', 'value1').append('key2', 'value2');
        return this.http.get<User[]>(this.apiUrl, { headers, params, observe: 'events', responseType: 'json' }).pipe(
            map(event => {
                console.log(event);
                if (event.type === HttpEventType.Response) {
                    return event.body as User[];
                }
                return [];
            }),
            catchError(errorRes => {
                return throwError(() => new Error(errorRes.message));
            })
        );
    }

    getUserById(id: number): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<any>(url);
    }

    createUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user);
    }

    updateUser(id: number, user: any): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<any>(url, user);
    }

    deleteUser(id: number): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<any>(url);
    }

    getLatestId(): Observable<number> {
        return this.http.get<User[]>(`${this.apiUrl}?_sort=id&_order=desc&_limit=1`).pipe(
            map(users => users[0].id)
        );
    }
}