function navBar() {
  let navbar = document.createElement("nav");
  let buttonNewProject = document.createElement("button");
  buttonNewProject.innerText = "New Project";

  navbar.appendChild(buttonNewProject);

  return { navbar };
}

export { navBar };
