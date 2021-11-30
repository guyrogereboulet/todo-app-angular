import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  //Inizializzo i todos come un array di any(qualsiasi dato in ingresso)
  todos: any[];

  constructor() {
    //Creo un componente contenente i dati del singolo todo
    this.todos = [
      {
        id: 1,
        desc: 'Task 1',
        date: new Date(),
        priority: 2,
        completed: false,
      },
      {
        id: 2,
        desc: 'Task 1',
        date: new Date(),
        priority: 5,
        completed: false,
      },
      {
        id: 3,
        desc: 'Task 1',
        date: new Date(),
        priority: 1,
        completed: false,
      },
    ];
  }

  ngOnInit(): void {}
}
