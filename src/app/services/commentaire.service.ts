// commentaire.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiUrl = 'http://localhost:5136/api/Commentaire';
  constructor(private http: HttpClient) {}

  getCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(this.apiUrl);
  }

  getCommentaireById(commentaireId: number): Observable<Commentaire> {
    const url = `${this.apiUrl}/${commentaireId}`;
    return this.http.get<Commentaire>(url);
  }

  ajouterCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(this.apiUrl, commentaire);
  }

  updateCommentaire(commentaireId: number, commentaireModifie: Commentaire): Observable<Commentaire> {
    const url = `${this.apiUrl}/${commentaireId}`;
    return this.http.put<Commentaire>(url, commentaireModifie);
  }

  supprimerCommentaire(commentaireId: number): Observable<void> {
    const url = `${this.apiUrl}/${commentaireId}`;
    return this.http.delete<void>(url);
  }

}
