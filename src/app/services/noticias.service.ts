import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { INoticia } from '../models/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = 'http://localhost:3000/noticias'; // local da api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obter todas as notícias
  getAllNoticias(): Observable<INoticia[]> {
    return this.httpClient.get<INoticia[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obter uma notícia pelo id
  getNoticiaById(id: number): Observable<INoticia> {
    return this.httpClient.get<INoticia>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salvar uma noticia
  saveNoticia(noticia: INoticia): Observable<INoticia> {
    return this.httpClient.post<INoticia>(this.url, JSON.stringify(noticia), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualizar uma notícia
  updateNoticia(noticia: INoticia): Observable<INoticia> {
    return this.httpClient.put<INoticia>(this.url + '/' + noticia.noticia_int_id, JSON.stringify(noticia), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deletar uma notícia
  deleteNoticia(noticia: INoticia) {
    return this.httpClient.delete<INoticia>(this.url + '/' + noticia.noticia_int_id, this.httpOptions)
      .pipe(
        retry(1),
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
