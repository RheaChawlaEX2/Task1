import { baseUrl, urlExtension } from "./baseUrl.js";
import { getElement } from "./dom.js";
import { isQueryParam } from "./isQueryParam.js";
import {populateUserData} from "./getUsers.js"

let page = 2;
let addUserBtn = getElement("addUserBtn");

//initial user
const initialFetch = (function () {
  let url = `${baseUrl}page=1&${urlExtension}`;
  populateUserData(url, page);
})();

//adding user
const addUser = function () {
  let url = `${baseUrl}page=${page}&${urlExtension}`;
  page++;
  populateUserData(url);
};

//addUser on Button Click
addUserBtn.addEventListener("click", () => {
  addUser();
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

isQueryParam(queryString, urlParams);
