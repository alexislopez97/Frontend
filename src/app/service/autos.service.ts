import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from '../models';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosUrl = 'https://catalogo-autos.herokuapp.com/api/autos/limit/100';
  private autosActionsURL = 'https://catalogo-autos.herokuapp.com/api/autos';
  //auto: Automovil = {} as Automovil;

  constructor(private http: HttpClient, private messagesServices: MessagesService) { 
  }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosUrl).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=> this.messagesServices.add('Autos Obtenido'))
    );
  }

  addAuto(auto: Automovil): Observable<any>{
    return this.http.post<any>(this.autosActionsURL, auto).pipe(
      catchError(this.handleError<any>('addAuto')),
      tap((result)=>{
        console.log(result);
        this.messagesServices.add(`Auto agregado con id: ${result.data._id}`)
      })
    )
  }

  updateAuto(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.autosActionsURL}/${auto._id}`, auto).pipe(
      catchError(this.handleError<any>('updateAuto')),
      tap((result)=>{
        console.log(result);
        this.messagesServices.add(`Auto Modificado con id: ${result.data._id}`)
      })
    );
  }

  delateAuto(auto: Automovil): Observable<any> {
    return this.http.delete<any>(`${this.autosActionsURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('delateAuto')),
      tap((result)=>{
        console.log(result);
        this.messagesServices.add(`Auto Eliminado con id: ${result.data._id}`)
      })
    );
  }

  private handleError<T>(operation = 'operacion', result?: T){
    return(error: any): Observable<T> => {
       this.messagesServices.add(`${operation} fallo: ${error.messages}`);
       return of(result as T);
    }
  }








}
