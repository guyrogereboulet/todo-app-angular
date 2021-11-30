import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  //Creiamo il metodo onAddTask
  onAddTask(desc: any, priority: any) {
    console.log(desc.value, 'Desc');
    console.log(priority.value, 'Desc');
  }
}
