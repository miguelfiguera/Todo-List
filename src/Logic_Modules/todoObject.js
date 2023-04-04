// this may become a factory

class TODO {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed=false
    this.project=project;
  }

  //remember to create the date functions so date gets done
  //using the functions that it has to use.
  get completed(){
    return this.completed
  }

  set completed(boolean){
    this.completed=boolean
  }

  get project(){
    return this.project
  }

  get title() {
    return this.title;
  }
  set title(string) {
    this.title = string;
  }
  get description() {
    return this.description;
  }

  set description(string) {
    this.description = string;
  }

  get dueDate() {
    return this.dueDate;
  }

  set dueDate(date) {
    this.dueDate = date;
  }
  get priority() {
    return this.dueDate;
  }
  set priority(status) {
    this.priority = status;
  }
}

export { TODO };
