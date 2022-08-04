import { getAllUsers } from "./getUsers.js";

export function isQueryParam(queryString, urlParams) {
    if (queryString) {
        let pages = urlParams.get("page");
        getAllUsers(pages);
    }
};