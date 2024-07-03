import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Erro ao realizar login:', error);
        return of(false);
      })
    );
  }

  register(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, password }).pipe(
      map(response => {
        if (response && response.success) {
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Erro ao registrar:', error);
        return of(false);
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
