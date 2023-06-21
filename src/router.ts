type Route = {
  fragment: string;
  comp: any;
};

export default class Router {
  private routes: Route[];
  private static instance: Router;

  private constructor() {
    this.routes = [];
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
  public start() {
    const checkRoutes = () => {
      const currentRoute: Route | undefined = this.routes.find(
        (route) => route.fragment === window.location.hash
      );
      currentRoute?.comp();
    };

    // 브라우저에서 hash값이 바뀔 때 발생하는 이벤트
    window.addEventListener("hashchange", checkRoutes);
    checkRoutes();
  }
}
