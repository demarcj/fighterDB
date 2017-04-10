function createNav (){
  "use strict";
  let getPage = document.getElementById("pageValue").value;
  let menuList = ["Home", "Stats", "About", "Contact"];
  let statsList = ["Players"];
  let anchor = "./";
  if(getPage === "0"){
    anchor = "./src/www/";
  }
  let getMenu = document.getElementById("menu");
  let navList = createNavList(menuList, statsList, anchor, getPage);
  getMenu.innerHTML = "<ul>" + navList + "</ul>";
}

function createNavList(menuList, statsList, anchor, getPage){
  "use strict";
  let addMenu = "";
  let i;
  let j;
  for(i = 0; i < menuList.length; i += 1){
    let lowerMenuList = menuList[i].substring(0, 1).toLowerCase() + menuList[i].substring(1, menuList[i].length);
    let getHomeAnchor = anchor + lowerMenuList; 
    if(menuList[i] === "Stats"){
      addMenu += "<li>" + menuList[i] + "<ul>";
      for(j = 0; j < statsList.length; j += 1){
        let lowerStatsList = statsList[j].substring(0, 1).toLowerCase() + statsList[j].substring(1, statsList[j].length);
        let getAnchor = anchor + lowerStatsList;
        addMenu += "<li><a href='" + getAnchor + ".html'>" + statsList[j] + "</a></li>";
      }
      addMenu += "</ul>";
    } else {
      if(getPage === "1" && menuList[i] === "Home"){
        addMenu += "<li><a href='../../index.html'>" + menuList[i];
      } else {
        addMenu += "<li><a href='" + getHomeAnchor + ".html'>" + menuList[i];
      }
    }
    addMenu += "</a></li>"
  }
  return addMenu;
}
window.addEventListener("load", createNav);