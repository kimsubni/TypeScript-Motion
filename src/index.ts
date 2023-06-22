// import App from "./App";
// import Login from "./Pages/Login";
import Main from "./Pages/Main.js";
import Router from "./router.js";

// const app = new App(document.querySelector("#app") as HTMLElement);
const container = document.querySelector("#app") as HTMLElement;
const main = new Main();
const pages = {
  main: () => {
    container.innerHTML = "";
    container.appendChild(main.render());
  },
  login: () => (container.innerText = "login page"),
};
const router = Router.getInstance();

router.addRoute("/", pages.main).addRoute("/login", pages.login).render("/");
