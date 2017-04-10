/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createNav() {
  "use strict";

  var getPage = document.getElementById("pageValue").value;
  var menuList = ["Home", "Stats", "About", "Contact"];
  var statsList = ["Players"];
  var anchor = "./";
  if (getPage === "0") {
    anchor = "./src/www/";
  }
  var getMenu = document.getElementById("menu");
  var navList = createNavList(menuList, statsList, anchor, getPage);
  getMenu.innerHTML = "<ul>" + navList + "</ul>";
}

function createNavList(menuList, statsList, anchor, getPage) {
  "use strict";

  var addMenu = "";
  var i = void 0;
  var j = void 0;
  for (i = 0; i < menuList.length; i += 1) {
    var lowerMenuList = menuList[i].substring(0, 1).toLowerCase() + menuList[i].substring(1, menuList[i].length);
    var getHomeAnchor = anchor + lowerMenuList;
    if (menuList[i] === "Stats") {
      addMenu += "<li>" + menuList[i] + "<ul>";
      for (j = 0; j < statsList.length; j += 1) {
        var lowerStatsList = statsList[j].substring(0, 1).toLowerCase() + statsList[j].substring(1, statsList[j].length);
        var getAnchor = anchor + lowerStatsList;
        addMenu += "<li><a href='" + getAnchor + ".html'>" + statsList[j] + "</a></li>";
      }
      addMenu += "</ul>";
    } else {
      if (getPage === "1" && menuList[i] === "Home") {
        addMenu += "<li><a href='../../index.html'>" + menuList[i];
      } else {
        addMenu += "<li><a href='" + getHomeAnchor + ".html'>" + menuList[i];
      }
    }
    addMenu += "</a></li>";
  }
  return addMenu;
}
window.addEventListener("load", createNav);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var header = __webpack_require__(0);

/***/ })
/******/ ]);