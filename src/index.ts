import { initRouter, Route } from "@/core/BrowserRouter"; // 또는 HashRouter
import App from "@/App";
import Component from "@/core/Component";
import "@/scss/index.scss";
import Login from "./Pages/Login";

const routes: Route[] = [
  { path: "/", page: App as typeof Component },
  { path: "/login", page: Login as typeof Component },
];

const $app = document.querySelector("#app") as HTMLElement;
$app.appendChild(document.createElement("main"));

initRouter({ $app, routes });
