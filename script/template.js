import DomService from "./dom.js";


const dom = new DomService();

export function Template(picture, head, first, last) {    
  return `<img src=${picture}> <h6>${head}</h6><h6>${first}</h6><h6>${last}</h6>`
}