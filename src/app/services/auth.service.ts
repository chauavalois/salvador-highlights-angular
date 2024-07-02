import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://sua-api-fake.com/login'; // Substitua pela URL da sua API fake

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      map(response => {
        // Simular lógica de sucesso do login (geralmente, você receberia um token JWT aqui)
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response)); // Salva o usuário no localStorage
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

  logout() {
    // Remove o usuário do localStorage ao fazer logout
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    // Verifica se há um usuário logado verificando o localStorage
    return !!localStorage.getItem('currentUser');
  }
}
