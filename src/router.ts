import { customEventEmiiter } from "./utils/helpers";

type Route = {
  fragment: string;
  comp: () => string;
};

export default class Router {
  private routes: Route[];
  private static instance: Router;

  private constructor() {
    this.routes = [];

    window.onpopstate = (e) => {
      console.log(e.target);
      this.render(window.location.pathname);
    };
    const aTags = document.querySelectorAll("a");
    aTags.forEach((tag) =>
      tag.addEventListener("click", (e) => {
        e.preventDefault();
        const hrefs: string[] = tag.href.split("/");
        this.render("/" + hrefs[hrefs.length - 1]);
      })
    );
  }

  public static getInstance() {
    if (!Router.instance) {
      Router.instance = new Router();
    }
    return Router.instance;
  }

  // router feature 1 : 애플리케이션의 경로 목록들을 저장한다.
  public addRoute(fragment: string, comp: any) {
    this.routes.push({ fragment, comp });
    return this;
  }

  // router feature 2 : 현재 URL이 변경되면 페이지 콘텐츠를 해당 URL에 매핑된 구성 요소로 교체한다.
  public render = (path: string) => {
    const currentRoute: Route | undefined = this.routes.find(
      (route) => route.fragment == path
    );
    if (currentRoute) {
      window.history.pushState(
        {},
        "",
        "http://172.29.89.104:5500" + currentRoute.fragment
      );
      currentRoute.comp();
    } else {
      console.log("여기온단뜻?");
      window.history.pushState({}, "", "http://172.29.89.104:5500");
    }
  };
}
