import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avantage } from '../bdd_Models/bdd_Avantage';

@Injectable({
  providedIn: 'root'
})
export class AvantageService {

  private baseUrl = 'http://localhost:8085/ManajeroBackend/Avantage';  // Base URL of your Spring Boot server

  constructor(private http: HttpClient) { }

  getAllAvantages(): Observable<Avantage[]> {
    return this.http.get<Avantage[]>(`${this.baseUrl}/getavantage`);
  }

  getAvantageById(id: String): Observable<Avantage> {
    return this.http.get<Avantage>(`${this.baseUrl}/getavantages/${id}`);
  }

  createAvantage(avantage: Avantage): Observable<Avantage> {
    return this.http.post<Avantage>(`${this.baseUrl}/createavantage`, avantage);
  }

  deleteAvantage(id: String): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteavantage/${id}`);
  }
}
