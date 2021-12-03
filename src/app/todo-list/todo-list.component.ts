import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../todo-item/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() completeTodo: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCompleteTodo(id) {
    this.completeTodo.emit(id);
  }
}
