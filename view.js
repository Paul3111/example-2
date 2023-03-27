class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(text) {
    const newDiv = document.createElement("p");
    const newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("main-container");
    document.body.insertBefore(newDiv, currentDiv.nextSibling);
  }

  clearParagraphs() {
    const elementToBeRemoved = document.querySelectorAll("p");
    elementToBeRemoved.forEach (element => element.remove());
    }
}

module.exports = View;