import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo-item/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
///Per semplicità ho spostato la lista di TODO nel model di app
export class TodoListComponent implements OnInit {
  @Input()
  todos!: Todo[];
  @Output() completeTodo: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onCompleteTodo(id: any) {
    this.completeTodo.emit(id);
  }
}
