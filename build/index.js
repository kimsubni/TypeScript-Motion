// import App from "./App";
// import Login from "./Pages/Login";
import Main from "./Pages/Main.js";
import Router from "./router.js";
// const app = new App(document.querySelector("#app") as HTMLElement);
var container = document.querySelector("#app");
var main = new Main();
var pages = {
    main: function () { return container.appendChild(main.render()); },
    login: function () { return (container.innerText = "login page"); },
};
var router = Router.getInstance();
router.addRoute("#/", pages.main).addRoute("#/login", pages.login).start();
//# sourceMappingURL=index.js.map