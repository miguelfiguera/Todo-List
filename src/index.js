import _ from "lodash";
import { footer } from "./Dom_Modules/footer";
import { userForm, projectForm, toDoForm } from "./Dom_Modules/forms";
import { header } from "./Dom_Modules/header";
import { main } from "./Dom_Modules/main";
import { navBar } from "./Dom_Modules/navBar";
import { card, navbarButton } from "./Dom_Modules/card";

let current_project = "";

const populatingDom = (() => {
  let Header = header();
  let Main = main();
  let Navbar = navBar();
  Navbar.id = "navbar";
  let Footer = footer();
  let body = document.getElementById("body");
  let formForUser=userForm()
  let formForProject=projectForm()
  let formForToDo=toDoForm()
  let arr = [Header, Main, Navbar, Footer,formForProject,formForUser,formForToDo];

  arr.forEach((e) => body.appendChild(e));

  return { body };
})();

const menuToggle = (() => {
  let button = document.getElementById("menu");
  let NavBar = document.getElementById("navbar");
  button.addEventListener("click", function () {
    NavBar.classList.toggle("hidden");
  });
})();

/*const eventListener2 = (() => {
  let addTask = document.getElementById("taskButton");

  addTask.addEventListener('click',function(){
  let form=document.getElementById('newTaskForm');
})

})();*/  

const eventListener1 = (() => {
  let newProject = document.getElementById("buttonNavBar");

  newProject.addEventListener("click", function () {
    let form=document.getElementById('newProjectForm')
    form.classList.remove('hidden')
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let input = document.getElementById("projectFormInput");
      let newProject = navbarButton(input.value);
      let navbar = document.getElementById("navbar");
      newProject.onclick((current_project = newProject));
      navbar.appendChild(newProject);
      form.classList.add("hidden");
    });
  });
})();
