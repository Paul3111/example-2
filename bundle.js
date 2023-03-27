(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          console.log(this.mainContainerEl);
        }
        addParagraph(text) {
          const newDiv = document.createElement("p");
          const newContent = document.createTextNode(text);
          newDiv.appendChild(newContent);
          const currentDiv = document.getElementById("main-container");
          document.body.insertBefore(newDiv, currentDiv.nextSibling);
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
  view.addParagraph("This is a dynamically added paragraph!");
})();
