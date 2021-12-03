import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from './todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() completeTodo: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onCompleteTodo() {
    this.completeTodo.emit(this.todo.id);
  }
}
