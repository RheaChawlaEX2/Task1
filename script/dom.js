export default class DomService {
 

    createElement(element) {
        const elem = document.createElement(element);
        return elem
    }
    getElement(elementId) {
        const element = document.getElementById(elementId);
        return element;
    }
    appendChild(parent, child) {
        parent.appendChild(child);
    }
    imgSrcSet(parent, value) {
        parent.src = value;
    }
    addInnerText(parent, value) {
        parent.innerText = value;
    }
    emptyElement(element) {
        while (element.firstElementChild) {
            element.firstElementChild.remove();
          }
    }
}