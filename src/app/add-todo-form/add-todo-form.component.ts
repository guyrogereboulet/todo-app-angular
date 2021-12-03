import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AddFormError} from './add-form-error.model';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodo: EventEmitter<any> = new EventEmitter<any>();
  formError: AddFormError;

  constructor() {
    this.formError = new AddFormError();
  }

  ngOnInit(): void {
  }

  getInputClass(): string {
    let toRet = 'input ';

    if (this.formError.isError) {
      toRet += 'is-danger';
    }

    return toRet;
  }

  checkForm(desc, priority): void {
    if (desc === '') {
      this.formError.isError = true;
      this.formError.descError = true;
      this.formError.descErrorMsg = 'Devi inserire una descrizione';
    } else if (desc !== '') {
      this.formError.isError = false;
      this.formError.descError = false;
      this.formError.descErrorMsg = '';
    }

    if (priority < 1 || priority > 5) {
      this.formError.isError = true;
      this.formError.priorityError = true;
      this.formError.priorityErrorMsg = 'La priorità deve essere compresa tra 1 e 5';
    } else {
      this.formError.isError = false;
      this.formError.priorityError = false;
      this.formError.priorityErrorMsg = '';
    }
  }

  onAddTodo(desc: HTMLInputElement, priority: HTMLInputElement) {
    const descValue = desc.value;
    const priorityValue = priority.value;
    this.checkForm(descValue, priorityValue);

    if (!this.formError.isError) {
      const newTodo: any = {
        desc: descValue,
        priority: priorityValue,
      };
      desc.value = '';
      priority.value = '';
      this.newTodo.emit(newTodo);
    }
  }

}
