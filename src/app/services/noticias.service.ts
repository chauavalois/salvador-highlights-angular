import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { INoticia } from '../models/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private endpointBase: string = 'http://localhost:3000/noticias'; // local da api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  
  getAllNoticias(): Observable<INoticia[]> {
    return this.httpClient.get<INoticia[]>(this.endpointBase)
      .pipe(
        catchError(this.handleError))
  }


  excluir(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.endpointBase}/${id}`);
  }


  salvar(noticia: INoticia): Observable<INoticia> {
    return this.httpClient.post<INoticia>(this.endpointBase, noticia)
      .pipe(
        catchError(this.handleError)
      )
  }

  
  editar(noticia: INoticia): Observable<INoticia> {
    return this.httpClient.put<INoticia>(`${this.endpointBase}/${noticia.noticia_int_id}`,noticia)
      .pipe(
        catchError(this.handleError)
      )
  }

  
  getNoticiaById(id: number): Observable<INoticia> {
    return this.httpClient.get<INoticia>(this.endpointBase + '/' + id)
      .pipe(
        catchError(this.handleError)
      )
  }

  
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
