import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  url: string= 'http://localhost:3000/residence/'

  constructor(private http: HttpClient) { }

  addResidence(residence: Residence): Observable<Residence>{
    return this.http.post<Residence>(this.url, residence)
  }

  findAllResidences(): Observable<[Residence]>{
    return this.http.get<[Residence]>(this.url);
  }

  findResidenceById(id: number): Observable<Residence>{
    return this.http.get<Residence>(this.url+id);
  }

  updateResidence(id : number, residence: Residence): Observable<Residence>{
    return this.http.put<Residence>(this.url+id, residence)
  }

  deleteResidence(id: number): Observable<Residence>{
    return this.http.delete<Residence>(this.url+id)
  }
}
