function main() {
  let main = document.createElement("main");
  let buttonNew = document.createElement("button");
    buttonNew.innerText="Add Task"
    buttonNew.id='taskButton'
  main.appendChild(buttonNew);
  return main;
}

export { main };
