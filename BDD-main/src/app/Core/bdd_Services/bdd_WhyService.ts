import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Why } from '../bdd_Models/bdd_Why';

@Injectable({
  providedIn: 'root'
})
export class WhyService {

  private baseUrl = 'http://localhost:8085/ManajeroBackend/Why';  // Base URL of your Spring Boot server

  constructor(private http: HttpClient) { }

  getAllWhys(): Observable<Why[]> {
    return this.http.get<Why[]>(`${this.baseUrl}/getwhy`);
  }

  getWhyById(id: String): Observable<Why> {
    return this.http.get<Why>(`${this.baseUrl}/getwhys/${id}`);
  }

  createWhy(why: Why): Observable<Why> {
    return this.http.post<Why>(`${this.baseUrl}/createwhy`, why);
  }

  deleteWhy(id: String): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deletewhy/${id}`);
  }
}
