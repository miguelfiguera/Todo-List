function diaLog(id) {
  let div = document.createElement("dialog");
  div.id = id;
  return div;
}

function genericLabel(text) {
  let label = document.createElement("label");
  label.innerText = text;
  return label;
}

function userForm() {
  let div = diaLog("userForm");

  let userForm = document.createElement("form");
  let label = document.createElement("label");
  label.innerText = "what is your name?";
  let inputLabel = document.createElement("input");
  inputLabel.placeholder = "John Doe";
  let buttonSubmit = document.createElement("button");
  buttonSubmit.type = "submit";
  buttonSubmit.innerText = "Submit";

  userForm.appendChild(label);
  userForm.appendChild(inputLabel);
  userForm.appendChild(buttonSubmit);

  div.appendChild(userForm);
  return div;
}

function projectForm() {
  let div = diaLog("projectForm");
  let projectForm = document.createElement("form");
  let label = document.createElement("label");
  let inputLabel = document.createElement("input");
  inputLabel.id = "projectFormInput";
  inputLabel.name='title'
  let buttonSubmit = document.createElement("button");
  buttonSubmit.type = "submit";
  buttonSubmit.innerText="Create Project"

  label.innerText = "Name for the project";

  projectForm.appendChild(label);
  projectForm.appendChild(inputLabel);
  projectForm.appendChild(buttonSubmit);
  projectForm.id = "newProjectForm";

  div.appendChild(projectForm);

  return div;
}

function toDoForm() {
  let div = diaLog("todoForm");
  let todoForm = document.createElement("form");

  let titleLabel = document.createElement("label");
  titleLabel.innerText = "Title";
  let inputTitle = document.createElement("input");
  inputTitle.name='title'

  let descriptionLabel = document.createElement("label");
  descriptionLabel.innerText = "Description";
  let inputDescription = document.createElement("input");
  inputDescription.name='description'

  let dueDateLabel = document.createElement("label");
  dueDateLabel.innerText = "Deadline";
  let inputDueDate = document.createElement("input");
  inputDueDate.name='duedate'

  let priorityLabel = document.createElement("label");
  priorityLabel.innerText = "Set Priority: ";
  let itCanWait = document.createElement("input");

  let divForRadio = document.createElement("div");

  let label1 = genericLabel("it can wait");
  label1.style.color = "green";
  itCanWait.type = "radio";
  itCanWait.value = 0;
  let urgent = document.createElement("input");
  let label2 = genericLabel("Urgent");
  label2.style.color = "orange";
  urgent.type = "radio";
  urgent.value = 1;
  let important = document.createElement("input");
  let label3 = genericLabel("Important!");
  label3.style.color = "red";
  important.type = "radio";
  important.value = 2;

  itCanWait.name='priority'
  urgent.name='priority'
  important.name='priority'

  let buttonSubmit = document.createElement("button");
  buttonSubmit.type = "submit";
  buttonSubmit.innerText = "Create Task";

  let radioArr = [label1, itCanWait, label2, urgent, label3, important];

  radioArr.forEach((e) => divForRadio.appendChild(e));

  todoForm.id = "createTaskForm";

  let arr = [
    titleLabel,
    inputTitle,
    descriptionLabel,
    inputDescription,
    dueDateLabel,
    inputDueDate,
    priorityLabel,
    divForRadio,
    buttonSubmit,
  ];

  arr.forEach((e) => todoForm.appendChild(e));

  div.appendChild(todoForm);
  return div;
}

export { userForm, projectForm, toDoForm };
