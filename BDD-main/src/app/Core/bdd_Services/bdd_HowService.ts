import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { How } from '../bdd_Models/bdd_How';

@Injectable({
  providedIn: 'root'
})
export class HowService {

  private baseUrl = 'http://localhost:8085/ManajeroBackend/How';  // Base URL of your Spring Boot server

  constructor(private http: HttpClient) { }

  getAllHows(): Observable<How[]> {
    return this.http.get<How[]>(`${this.baseUrl}/gethow`);
  }

  getHowById(id: string): Observable<How> {
    return this.http.get<How>(`${this.baseUrl}/gethows/${id}`);
  }

  createHow(how: How): Observable<How> {
    return this.http.post<How>(`${this.baseUrl}/createhow`, how);
  }

  deleteHow(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deletehow/${id}`);
  }
}
