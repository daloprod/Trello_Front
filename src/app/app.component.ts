import { Component } from '@angular/core';

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
    for (const key in this.tasks) {
      if (this.tasks.hasOwnProperty(key)) {
        const index = this.tasks[key as keyof TaskList].indexOf(task);
        if (index !== -1) {
          this.tasks[key as keyof TaskList].splice(index, 1);
        }
      }
    }
  }
}
