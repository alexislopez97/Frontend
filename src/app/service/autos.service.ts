import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosUrl = 'https://catalogo-autos.herokuapp.com/api/autos/limit/100';
  private autosActionsURL = 'https://catalogo-autos.herokuapp.com/api/autos';
  //auto: Automovil = {} as Automovil;

  constructor(private http: HttpClient) { 
  }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosUrl);
  }

  addAuto(auto: Automovil): Observable<any>{
    return this.http.post<any>(this.autosActionsURL, auto);
  }

  updateAuto(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.autosActionsURL}/${auto._id}`, auto);
  }

  delateAuto(auto: Automovil): Observable<any> {
    return this.http.delete<any>(`${this.autosActionsURL}/${auto._id}`);
  }








}
