function footer() {
  let footer = document.createElement("footer");
  let footerText = document.createElement("p");
  let footerLink = document.createElement("a");

  footerLink.href = "https://github.com/miguelfiguera/Todo-List";
  footerText.innerText =
    "CopyRight2023 MiguelFiguera, you can check this code on ";
  footerLink.innerText = "gitHub.com";

  footer.appendChild(footerText);
  footerText.appendChild(footerLink);

  return footer;
}

export { footer };
