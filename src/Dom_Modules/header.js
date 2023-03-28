function header() {
  let header = document.createElement("header");
  let divForTitle = document.createElement("div");
  let buttonMenu = document.createElement("button");
  let title = document.createElement("h1");
  let userInfo = document.createElement("div");
  let img = document.createElement("img");
  let h2UserName = document.createElement("h2");

  header.appendChild(buttonMenu);
  header.appendChild(divForTitle);
  divForTitle.appendChild(title);

  userInfo.appendChild(img);
  userInfo.appendChild(h2UserName);
  header.appendChild(userInfo);

  return { header };
}

export { header };
