// this may become a factory

class TODO {
  constructor(title, description, dueDate, priority,project) {
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
    return this._completed
  }

  set completed(boolean){
    this._completed=boolean
  }

  get project(){
    return this._project
  }

  set project(val){
    this._project=val
    }

  get title() {
    return this._title;
  }
  set title(string) {
    this._title = string;
  }
  get description() {
    return this._description;
  }

  set description(string) {
    this._description = string;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(date) {
    this._dueDate = date;
  }
  get priority() {
    return this._dueDate;
  }
  set priority(status) {
    this._priority = status;
  }
}

export { TODO };
