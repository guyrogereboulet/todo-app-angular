export class AddFormError {
  isError: boolean;
  descError: boolean;
  descErrorMsg: string;
  priorityError: boolean;
  priorityErrorMsg: string;

  constructor() {
    this.isError = false;
    this.descError = false;
    this.descErrorMsg = '';
    this.priorityError = false;
    this.priorityErrorMsg = '';
  }
}
