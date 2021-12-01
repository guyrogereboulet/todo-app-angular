import { Component } from '@angular/core';
import { Todo } from './components/todo-item/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Inizializzo i todos come un array di TODO(IL modello di TODO che ho creato nella cartella )
  listOfTodo: Todo[];

  constructor() {
    //Creo nel construttoreun array di TODOs contenente i dati del singolo TODO
    this.listOfTodo = [
      new Todo('1', 'Task 1', '2'),
      new Todo('2', 'Task 2', '2'),
      new Todo('3', 'Task 3', '2'),
      new Todo('4', 'Task 4', '2'),
      new Todo('5', 'Task 5', '2'),
    ];
  }

  onAddTodo({ desc, priority }: { desc: string; priority: string }) {
    console.log({ desc, priority });
    const newId = (this.listOfTodo.length + 1).toString();
    this.listOfTodo.push(new Todo(newId, desc, priority));
  }
}
