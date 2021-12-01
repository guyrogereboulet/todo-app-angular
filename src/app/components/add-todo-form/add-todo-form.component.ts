import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent implements OnInit {
  //Con l'Output abbiamo la possibilità di fare uscire dei dati dal componente
  // Per emettere un evento dobbiamo inserire il decoratore @Output e dichiaro il metodo newTodo
  @Output() newTodo: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  //Creiamo il metodo onAddTask
  //Visto che usiamo typescript aggiungiamo il tipo delle vatiabili negli argomenti del metodo
  onAddTodo(desc: HTMLInputElement, priority: HTMLInputElement) {
    const newTodo: any = {
      desc: desc.value,
      priority: priority.value,
    };
    //Utilizzo il metodo emit che ho creato nel decoratore
    this.newTodo.emit(newTodo);
    // console.log(desc.value, 'Desc');
    // console.log(priority.value, 'Desc');
  }
}
