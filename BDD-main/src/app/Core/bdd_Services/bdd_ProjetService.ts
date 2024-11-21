import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../bdd_Models/bdd_Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private baseUrl = 'http://localhost:8085/ManajeroBackend/Projet';  // Base URL of your Spring Boot server

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



  // New methods for counting projects by status
  countNotStartedProjects(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count/not-started`);
  }

  countInProgressProjects(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count/in-progress`);
  }

  countCompletedProjects(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count/completed`);
  }


  
  countTasksForProjet(id: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/${id}/tasks/count`);
  }
  // Add a method to get all projects with their task counts
getAllProjectsWithTaskCounts(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/all-projects-with-task-counts`);
}

}
