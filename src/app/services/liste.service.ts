// liste.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Liste } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ListeService {
  private apiUrl = 'http://localhost:5136/api/Liste';

  constructor(private http: HttpClient) {}

  getListes(): Observable<Liste[]> {
    return this.http.get<Liste[]>(this.apiUrl);
  }

  getListeById(listeId: number): Observable<Liste> {
    const url = `${this.apiUrl}/${listeId}`;
    return this.http.get<Liste>(url);
  }

  ajouterListe(liste: Liste): Observable<Liste> {
    return this.http.post<Liste>(this.apiUrl, liste);
  }

  updateListe(listeId: number, listeModifie: Liste): Observable<Liste> {
    const url = `${this.apiUrl}/${listeId}`;
    return this.http.put<Liste>(url, listeModifie);
  }

  supprimerListe(listeId: number): Observable<void> {
    const url = `${this.apiUrl}/${listeId}`;
    return this.http.delete<void>(url);
  }

}
