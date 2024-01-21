// models.ts

export interface Commentaire {
  Id: number;
  Contenu: string;
  DateCreation: Date;
  IdCarte: Carte['Id'];
  Utilisateur: string; // Utilisateur associé au commentaire (à adapter selon tes besoins)
}

export interface Liste {
  Id: number;
  Nom: string;
  IdProjet: number;
  Cartes: Carte[];
  Projet: Projet;
}

export interface Carte {
  Id: number;
  Titre: string;
  Description: string;
  DateCreation: Date;
  IdListe: number;
  Commentaires: Commentaire[];
  Liste: Liste;
}

export interface Projet {
  Id: number;
  Nom: string;
  Description: string;
  DateCreation: Date;
  Listes: Liste[];
}
