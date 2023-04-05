function main() {
  let main = document.createElement("main");
  let buttonNew = document.createElement("button");
    buttonNew.innerText="Add Task"
    buttonNew.id='taskButton'

  let buttonAll=document.createElement("button");
  buttonAll.innerText='Show All'
  buttonAll.id='buttonAll'
  main.appendChild(buttonNew);
  main.appendChild(buttonAll)
  return main;
}

export { main };
