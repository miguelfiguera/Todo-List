import _ from "lodash";
import { footer } from "./Dom_Modules/footer";
import { userForm, projectForm, toDoForm } from "./Dom_Modules/forms";
import { header } from "./Dom_Modules/header";
import { main } from "./Dom_Modules/main";
import { navBar } from "./Dom_Modules/navBar";

const populatingDom = (() => {
  let Header = header();
  let Main = main();
  let Navbar = navBar();
  let Footer = footer();
  let body = document.getElementById("body");
  let arr = [Header, Main, Navbar, Footer];

  arr.forEach((e) => body.appendChild(e));
 
  return { body };
})();

const menuToggle=(()=>{
    let button=document.getElementById('menu')
    let NavBar=document.getElementById('navbar')
    button.addEventListener('click',function(){
        NavBar.classList.toggle("hidden");
    })
})();
