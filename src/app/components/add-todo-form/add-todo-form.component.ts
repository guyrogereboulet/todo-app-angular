import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddFormError } from './add-form-error.model';
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
  //Controllo dati inserito negli input
  formError: AddFormError;
  constructor() {
    this.formError = new AddFormError();
  }

  ngOnInit(): void {}

  //Creaiamo il metodo per il controllo
  checkForm(desc: string, priority: any): void {
    this.formError.isError = true;
    if (desc == '') {
      this.formError.descError = true;
      this.formError.descErrorMsg = 'Devi inserire una descrizione';
    } else if (priority < 1 || priority > 5) {
      this.formError.priorityError = true;
      this.formError.priorityErrorMsg =
        'La priorità deve essre compresa tra 1 e 5';
    }
  }

  //Creiamo il metodo onAddTodo
  //Visto che usiamo typescript aggiungiamo il tipo delle vatiabili negli argomenti del metodo
  onAddTodo(desc: HTMLInputElement, priority: HTMLInputElement) {
    const descValue = desc.value;
    const priorityValue = priority.value;
    this.checkForm(descValue, priorityValue);

    if (!this.formError.isError) {
      const newTodo: any = {
        desc: descValue,
        priority: priorityValue,
      };
      //Svuoto i campi "Descrizione" e "Priorità" dopo aver cliccato su aggiungi
      desc.value = '';
      priority.value = '';
      //Utilizzo il metodo emit che ho creato nel decoratore
      this.newTodo.emit(newTodo);
    }
  }
}
