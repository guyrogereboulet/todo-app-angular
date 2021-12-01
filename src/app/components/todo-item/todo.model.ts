//Modello per i nostri TODO
export class Todo {
  id: string;
  desc: string;
  date: Date;
  priority: number; // Se vogliamo mettere un proprietà facoltativa dobbiamo mettere il  => ?
  completed: boolean;
  //Passiamo solo questi 3 parametri nel construttore perché la data e la priorità sono assegnati di default
  constructor(id: string, desc: string, priority: string) {
    this.id = id;
    this.desc = desc;
    this.date = new Date();
    this.priority = parseInt(priority);
    this.completed = false;
  }
}
