import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet, Liste } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  private apiUrl = 'http://localhost:5136/api/Projet'; // Remplace par l'URL de ton backend

  constructor(private http: HttpClient) {}

  getProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.apiUrl);
  }

  ajouterProjet(projet: Projet): Observable<any> {
    return this.http.post<any>(this.apiUrl, projet);
  }

  updateProjet(projetId: number, projetModifie: Projet): Observable<Projet> {
    const url = `${this.apiUrl}/${projetId}`;
    return this.http.put<Projet>(url, projetModifie);
  }

  deleteProjet(projetId: number): Observable<void> {
    const url = `${this.apiUrl}/${projetId}`;
    return this.http.delete<void>(url);
  }

  // Mettre à jour une liste
  updateListe(listeId: number, liste: Liste): Observable<Liste> {
    const url = `${this.apiUrl}/listes/${listeId}`;
    return this.http.put<Liste>(url, liste);
  }

  // Supprimer une liste
  deleteListe(listeId: number): Observable<void> {
    const url = `${this.apiUrl}/listes/${listeId}`;
    return this.http.delete<void>(url);
  }
}
