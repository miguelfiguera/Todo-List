function main() {
  let main = document.createElement("main");
  let buttonNew = document.createElement("button");
    buttonNew.innerText="Add Task"
  main.appendChild(buttonNew);
  return main;
}

export { main };
