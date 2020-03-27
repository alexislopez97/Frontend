import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosUrl = 'https://catalogo-autos.herokuapp.com/api/autos/limit/70';

  constructor(private http: HttpClient) { 
  }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosUrl);
  }
}
