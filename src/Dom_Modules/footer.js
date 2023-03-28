function footer() {
  let footer = document.createElement("footer");
  let footerText = document.createElement("p");
  let footerLink = document.createElement("a");

  footer.appendChild(footerText);
  footerText.appendChild(footerLink);

  footerLink.href = "https://github.com/miguelfiguera/Todo-List";
  footerLink.innerText = "gitHub.com";
  footerText.innerText = `CopyRight2023 MiguelFiguera, you can check this code on ${footerLink}`;

  return { footer };
}

export { footer };
