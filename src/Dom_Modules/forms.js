function userForm() {
  let userForm = document.createElement("form");
  let label = document.createElement("label");
  label.innerText = "what is your name?";
  let inputLabel = document.createElement("input");
  inputLabel.placeholder = "John Doe";
  let buttonSubmit = document.createElement("submit");
  buttonSubmit.type = "submit";
  buttonSubmit.innerText = "Submit";

  userForm.appendChild(label);
  userForm.appendChild(inputLabel);
  userForm.appendChild(buttonSubmit);

  return userForm;
}

function projectForm() {
  let projectForm = document.createElement("form");
  let label = document.createElement("label");
  let inputLabel = document.createElement("input");
  let buttonSubmit = document.createElement("submit");
  buttonSubmit.type = "submit";

  label.innerText = "Name for the project";

  projectForm.appendChild(label);
  projectForm.appendChild(inputLabel);
  projectForm.appendChild(buttonSubmit);
  return projectForm;
}

function toDoForm() {
  let arr = [];

  let todoForm = document.createElement("form");
  let titleLabel = document.createElement("label");
  let inputTitle = document.createElement("input");
  let descriptionLabel = document.createElement("label");
  let inputDescription = document.createElement("input");
  let dueDateLabel = document.createElement("label");
  let inputDueDate = document.createElement("input");
  let priorityLabel = document.createElement("label");
  let itCanWait = document.createElement("input");
  itCanWait.type = "radio";
  itCanWait.value = 0;
  let urgent = document.createElement("input");
  urgent.type = "radio";
  urgent.value = 1;
  let important = document.createElement("input");
  important.type = "radio";
  important.value = 2;
  let buttonSubmit = document.createElement("submit");
  buttonSubmit.type = "submit";

  arr.push(
    titleLabel,
    inputTitle,
    descriptionLabel,
    inputDescription,
    dueDateLabel,
    inputDueDate,
    priorityLabel,
    itCanWait,
    urgent,
    important,
    buttonSubmit
  );

  arr.forEach((e) => todoForm.appendchild(e));

  return todoForm;
}

export { userForm, projectForm, toDoForm };
