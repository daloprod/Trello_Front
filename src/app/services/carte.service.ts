// carte.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carte } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  private apiUrl = 'http://localhost:5136/api/Carte';

  constructor(private http: HttpClient) {}

  getCartes(): Observable<Carte[]> {
    return this.http.get<Carte[]>(this.apiUrl);
  }

  getCarteById(carteId: number): Observable<Carte> {
    const url = `${this.apiUrl}/${carteId}`;
    return this.http.get<Carte>(url);
  }

  ajouterCarte(carte: Carte): Observable<Carte> {
    return this.http.post<Carte>(this.apiUrl, carte);
  }

  updateCarte(carteId: number, carteModifiee: Carte): Observable<Carte> {
    const url = `${this.apiUrl}/${carteId}`;
    return this.http.put<Carte>(url, carteModifiee);
  }

  supprimerCarte(carteId: number): Observable<void> {
    const url = `${this.apiUrl}/${carteId}`;
    return this.http.delete<void>(url);
  }

}
