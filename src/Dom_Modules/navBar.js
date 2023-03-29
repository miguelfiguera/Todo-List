function navBar() {
  let navbar = document.createElement("nav");
  navbar.id="navbar"
  let buttonNewProject = document.createElement("button");
  buttonNewProject.innerText = "New Project";

  navbar.appendChild(buttonNewProject);

  return navbar;
}

export { navBar };
