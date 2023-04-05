import _ from "lodash";
import { footer } from "./Dom_Modules/footer";
import { userForm, projectForm, toDoForm } from "./Dom_Modules/forms";
import { header } from "./Dom_Modules/header";
import { main } from "./Dom_Modules/main";
import { navBar } from "./Dom_Modules/navBar";
import { card, miniature } from "./Dom_Modules/card";
import { TODO } from "./Logic_Modules/todoObject";

//I have yet to define currentProject Maybe as object
//I have to define also a function to change the current project (subtitle of header)
// I have to find a way to keep track of the todos objects

let current_project="default_project"
let toDos=[]



const populatingDom = (() => {
  let Header = header();
  let Main = main();
  let Navbar = navBar();
  Navbar.id = "navbar";
  let Footer = footer();
  let body = document.getElementById("body");
  let formForUser = userForm();
  let formForProject = projectForm();
  let formForToDo = toDoForm();
  let arr = [
    Header,
    Main,
    Navbar,
    Footer,
    formForProject,
    formForUser,
    formForToDo,
  ];

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

const eventListener1 = (() => {
  let buttonNewTasks = document.getElementById("taskButton");
  let modalDiv = document.getElementById("todoForm");
  let form = document.getElementById("createTaskForm");
  let main = document.getElementsByTagName("main");

  buttonNewTasks.addEventListener("click", function () {
    modalDiv.showModal();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(form.title.value==''){form.title.value=toDos.length+'card'}
    let toDo = new TODO(
      form.title.value,
      form.description.value,
      form.duedate.value,
      form.priority.value,
      current_project
    );

    toDos.push(toDo);

    let miniatureNew = miniature(
      form.title.value,
      form.priority.value,
      current_project
    );


    let newcard = card(
      form.title.value,
      form.description.value,
      form.duedate.value,
      form.priority.value
    );

    miniatureNew.addEventListener('click',()=>{
      newcard.showModal()
    })

    let button=document.createElement('button')
    button.type='submit'
    button.classList.add('closeButton')
    button.innerText="Close"

    button.addEventListener('click',()=>{newcard.close()})

    newcard.appendChild(button)

    main[0].appendChild(newcard);
    main[0].appendChild(miniatureNew);

    form.reset()
    modalDiv.close();
  });


})();

const eventListener2=(()=>{
  let newProject=document.getElementById('buttonNavBar')
  let modalDiv=document.getElementById('projectForm')
  let form=document.getElementById('newProjectForm')

  newProject.onclick=()=>{modalDiv.showModal()}

  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let newButtonForNav=document.createElement('button')

    let navbar=document.getElementById('navbar')
    newButtonForNav.innerText=form.title.value
    newButtonForNav.classList.add('navbarButton')

    newButtonForNav.addEventListener('click',()=>{
      current_project=newButtonForNav.innerText
      let arrOfCards=document.getElementsByClassName('miniature')

      for(let i = 0;i<arrOfCards.length;i++){
        let p=arrOfCards[i].lastChild
        if(p.innerText==current_project){arrOfCards[i].classList.remove('hidden')}
        else{arrOfCards[i].classList.add('hidden')}
      }


    })

    navbar.appendChild(newButtonForNav)
    form.reset()
    modalDiv.close()
  })
})();

//this one does not work yet
const eventListener3=(()=>{
  let button=document.getElementById('buttonAll')
  button.addEventListener('click',()=>{
    let arrOfCards=document.getElementsByClassName('miniature');

    arrOfCards.forEach((e)=>{
      e.classList.remove('hidden')
    })

  })
})();

const defaultProject=(()=>{
  let newButtonForNav=document.createElement('button')
  newButtonForNav.classList.add('navbarButton')
  newButtonForNav.innerText='default_project'
  let navbar=document.getElementById('navbar')
 current_project='default_project'
  navbar.appendChild(newButtonForNav)
})();