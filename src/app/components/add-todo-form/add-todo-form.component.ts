import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddFormError } from './add-form-error.model';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent implements OnInit {
  //Con l'Output abbiamo la possibilit√† di fare uscire dei dati dal componente
  // Per emettere un evento dobbiamo inserire il decoratore @Output e dichiaro il metodo newTodo
  @Output() newTodo: EventEmitter<any> = new EventEmitter<any>();
  //Controllo dati inserito negli input
  formError: AddFormError;
  constructor() {
    this.formError = new AddFormError();
  }

  ngOnInit(): void {}
  getInputClass(): string {
    let toRet = 'input ';

    if (this.formError.isError) {
      toRet += 'is-danger';
    }

    return toRet;
  }

  //Creiamo il metodo per il controllo
  checkForm(desc: string, priority: any): void {
    if (desc == '') {
      this.formError.isError = true;
      this.formError.descError = true;
      this.formError.descErrorMsg = 'Devi inserire una descrizione';
    } else if (desc == '') {
      this.formError.isError = false;
      this.formError.descError = false;
      this.formError.descErrorMsg = '';
    }

    if (priority < 1 || priority > 5) {
      this.formError.isError = true;
      this.formError.priorityError = true;
      this.formError.priorityErrorMsg =
        'La priorit√† deve essere compresa tra 1 e 5';
    } else {
      this.formError.isError = false;
      this.formError.priorityError = false;
      this.formError.priorityErrorMsg = '';
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
      //Svuoto i campi "Descrizione" e "Priorit√†" dopo aver cliccato su aggiungi
      desc.value = '';
      priority.value = '';
      //Utilizzo il metodo emit che ho creato nel decoratore
      this.newTodo.emit(newTodo);
    }
  }
}
