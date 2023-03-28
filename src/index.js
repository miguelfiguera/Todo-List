import _ from "lodash";
import { footer } from "./Dom_Modules/footer";
import { userForm, projectForm, toDoForm } from "./Dom_Modules/forms";
import { header } from "./Dom_Modules/header";
import { main } from "./Dom_Modules/main";
import { navBar } from "./Dom_Modules/navBar";

const populatingDom = (() => {
  let header = header();
  let main = main();
  let navbar = navBar();
  let footer = footer();
  let body = document.getElementById("body");
  arr = [, header, main, navbar, footer];

  arr.forEach((e) => body.appendChild(e));

  return { body };
})();
