
import { userTemplate } from "./userTemplate.js";
import { sortUserByName } from "./sortData.js";
import { getElement } from "./dom.js";
import { baseUrl, urlExtension } from "./baseUrl.js";
import { getUserData } from "./dataFetch.js";

var userArray = new Array();
let userData = getElement("userData");

export const populateUserData = function (url) {
    getUserData(url).then((data) => {
      userArray.push(data);
      let html = "";
  
      for (let user of sortUserByName(userArray)) {
        html += userTemplate(
          user.results[0].picture.thumbnail,
          user.results[0].name.title,
          user.results[0].name.first,
          user.results[0].name.last
        );
      }
      userData.innerHTML = html;
    });
  };

export const getAllUsers = function (param, page) {
    for (let i = 2; i <= param; i++) {
      let url = `${baseUrl}page=${i}&${urlExtension}`;
      page++;
      populateUserData(url);
    }
  };