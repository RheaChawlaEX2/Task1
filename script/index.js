import { baseUrl, urlExtension } from "./baseUrl.js";
import DataFetch from "./dataFetch.js";
import DomService from "./dom.js";
import { Template } from "./template.js";

let dom = new DomService();

let page = 2;
var userArray = new Array();
let users = new DataFetch();
let addUserBtn = dom.getElement("addUserBtn");
let userData = dom.getElement("userData");
let div = dom.createElement("div");

//fetching user
const fetchUser = function (url) {
  users.getUserData(url).then((data) => {
    userArray.push(data);
    dom.emptyElement(div);
    let html = "";

    for (let user of sortUserByName(userArray)) {
      html += Template(
        user.results[0].picture.thumbnail,
        user.results[0].name.title,
        user.results[0].name.first,
        user.results[0].name.last
      );
    }

    div.innerHTML = html;
    dom.appendChild(userData, div);
  });
};

//initial user
const initialFetch = (function () {
  let url = `${baseUrl}page=1&${urlExtension}`;
  fetchUser(url);
})();

//adding user
const addUser = function () {
  let url = `${baseUrl}page=${page}&${urlExtension}`;
  page++;
  fetchUser(url);
};

//getAll users according to param
const getAllUsers = function (param) {
  for (let i = 2; i <= param; i++) {
    let url = `${baseUrl}page=${i}&${urlExtension}`;
    page++;
    fetchUser(url);
  }
};

//addUser on Button Click
addUserBtn.addEventListener("click", () => {
  addUser();
});

//sorting data by user first name
function sortUserByName(users) {
  return users.sort((a, b) =>
    a.results[0].name.first < b.results[0].name.first ? -1 : 1
  );
}

//fetching queryparams
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const isQueryParam = function (queryString) {
    if (queryString) {
      let pages = urlParams.get("page");
      getAllUsers(pages);
    }
  };
isQueryParam(queryString);

