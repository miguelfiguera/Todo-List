function navBar() {
  let navbar = document.createElement("nav");
  navbar.id="navbar"
  let buttonNewProject = document.createElement("button");
  buttonNewProject.innerText = "New Project";
  buttonNewProject.id='buttonNavBar'

  navbar.appendChild(buttonNewProject);

  return navbar;
}

export { navBar };
