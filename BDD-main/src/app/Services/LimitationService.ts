import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Limitation } from '../Models/Limitation';

@Injectable({
  providedIn: 'root'
})
export class LimitationService {

  private baseUrl = 'http://localhost:8080/Limitation';  // Base URL of your Spring Boot server

  constructor(private http: HttpClient) { }

  getAllLimitations(): Observable<Limitation[]> {
    return this.http.get<Limitation[]>(`${this.baseUrl}/getlimitation`);
  }

  getLimitationById(id: String): Observable<Limitation> {
    return this.http.get<Limitation>(`${this.baseUrl}/getlimitations/${id}`);
  }

  createLimitation(Limitation: Limitation): Observable<Limitation> {
    return this.http.post<Limitation>(`${this.baseUrl}/createlimitation`, Limitation);
  }

  deleteLimitation(id: String): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deletelimitation/${id}`);
  }
}
