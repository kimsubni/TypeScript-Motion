import { initRouter, Route } from "@/core/BrowserRouter"; // 또는 HashRouter
import Main from "@/Pages/Main";
import Component from "@/core/Component";
import "@/scss/index.scss";
import Sub from "@/Pages/Sub";

const routes: Route[] = [
  { path: "/", page: Main as typeof Component },
  { path: "/sub", page: Sub as typeof Component },
];

const $app = document.querySelector("#app") as HTMLElement;
$app.appendChild(document.createElement("main"));

initRouter({ $app, routes });
