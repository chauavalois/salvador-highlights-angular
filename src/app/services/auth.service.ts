import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdminSubject.asObservable();

  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.isAdminSubject.next(currentUser.role === 'admin');
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.isAdminSubject.next(response.role === 'admin');
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
    this.isAdminSubject.next(false);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
