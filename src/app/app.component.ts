import { Component } from '@angular/core';
import { Commentaire, Liste, Carte, Projet } from './models';


interface TaskList {
  todo: string[];
  inProgress: string[];
  done: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projets: Projet[] = [
    // Initialise les projets comme tu le faisais auparavant
  ];
  tasks: TaskList = {
    todo: ['Task 1', 'Task 2', 'Task 3'],
    inProgress: ['Task 4', 'Task 5'],
    done: ['Task 6']
  };

  onDragStart(event: DragEvent, task: string): void {
    event.dataTransfer?.setData('text/plain', task);
  }

  onDrop(event: DragEvent, status: keyof TaskList): void {
    event.preventDefault();
    const task = event.dataTransfer?.getData('text/plain');
    if (task && status) {
      this.tasks[status].push(task);
      this.removeTask(task);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  private removeTask(task: string): void {
    Object.keys(this.tasks).forEach(key => {
      const index = this.tasks[key as keyof TaskList].indexOf(task);
      if (index !== -1) {
        this.tasks[key as keyof TaskList].splice(index, 1);
      }
    });
  }
  // CRUD sur les Tâches (Cartes)
  ajouterTache(liste: Liste): void {
    const nouvelleTache: Carte = {
      Id: this.generateId(),
      Titre: prompt("Entrez le titre de la nouvelle tâche :") || '',
      Description: prompt("Entrez la description de la nouvelle tâche :") || '',
      DateCreation: new Date(),
      IdListe: liste.Id,
      Commentaires: [],
      Liste: liste,
    };
    liste.Cartes.push(nouvelleTache);
  }

  modifierTache(tache: Carte): void {
    tache.Titre = prompt("Entrez le nouveau titre de la tâche :", tache.Titre) || tache.Titre;
    tache.Description = prompt("Entrez la nouvelle description de la tâche :", tache.Description) || tache.Description;
  }

  supprimerTache(liste: Liste, tache: Carte): void {
    const index = liste.Cartes.findIndex(c => c.Id === tache.Id);
    if (index !== -1) {
      liste.Cartes.splice(index, 1);
    }
  }

  // CRUD sur les Commentaires
  ajouterCommentaire(tache: Carte): void {
    const nouveauCommentaire: Commentaire = {
      Id: this.generateId(),
      Contenu: prompt("Entrez le contenu du nouveau commentaire :") || '',
      DateCreation: new Date(),
      IdCarte: tache.Id,
      Utilisateur: 'UtilisateurTest', // À adapter selon tes besoins
    };
    tache.Commentaires.push(nouveauCommentaire);
  }

  modifierCommentaire(commentaire: Commentaire): void {
    commentaire.Contenu = prompt("Entrez le nouveau contenu du commentaire :", commentaire.Contenu) || commentaire.Contenu;
  }

  supprimerCommentaire(tache: Carte, commentaire: Commentaire): void {
    const index = tache.Commentaires.findIndex(c => c.Id === commentaire.Id);
    if (index !== -1) {
      tache.Commentaires.splice(index, 1);
    }
  }

  // CRUD sur les Projets
  ajouterProjet(): void {
    const nouveauProjet: Projet = {
      Id: this.generateId(),
      Nom: prompt("Entrez le nom du nouveau projet :") || '',
      Description: prompt("Entrez la description du nouveau projet :") || '',
      DateCreation: new Date(),
      Listes: [],
    };
    this.projets.push(nouveauProjet);
  }

  modifierProjet(projet: Projet): void {
    projet.Nom = prompt("Entrez le nouveau nom du projet :", projet.Nom) || projet.Nom;
    projet.Description = prompt("Entrez la nouvelle description du projet :", projet.Description) || projet.Description;
  }

  supprimerProjet(projet: Projet): void {
    const index = this.projets.findIndex(p => p.Id === projet.Id);
    if (index !== -1) {
      this.projets.splice(index, 1);
    }
  }

  private generateId(): number {
    // Génère un identifiant unique (à adapter selon tes besoins)
    return Math.floor(Math.random() * 1000);
  }
}
