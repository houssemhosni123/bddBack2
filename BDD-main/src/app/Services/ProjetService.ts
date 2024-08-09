import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../Models/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private baseUrl = 'http://localhost:8080/Projet';  // Base URL of your Spring Boot server

  constructor(private http: HttpClient) { }

  getAllProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.baseUrl}/getprojet`);
  }

  getProjetById(id: number): Observable<Projet> {
    return this.http.get<Projet>(`${this.baseUrl}/getprojets/${id}`);
  }

  createProjet(projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(`${this.baseUrl}/createprojet`, projet);
  }

  deleteProjet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteprojet/${id}`);
  }
}
