import Component from "@/core/Component";
import { customEventEmitter } from "@/utils/helpers";

export type Route = {
  path: string;
  page: typeof Component;
};

class Router {
  $app: HTMLElement;
  routes: {
    [key: string]: typeof Component;
  } = {};
  fallback: string = "/";

  constructor({
    $app,
    routes,
    fallback = "/",
  }: {
    $app: HTMLElement;
    routes: Route[];
    fallback?: string;
  }) {
    this.$app = $app;
    this.fallback = fallback;

    routes.forEach((route: Route) => {
      this.routes[route.path] = route.page;
    });

    this.initEvent();
  }

  initEvent() {
    document.addEventListener(
      "moveRoutes",
      this.onRouteChangeHandler.bind(this) as EventListener
    );
  }

  onRouteChangeHandler(event: CustomEvent) {
    const path: string = event.detail.path;
    history.pushState(event.detail, "", path);

    this.renderPage(path);
  }

  hasRoute(path: string) {
    return typeof this.routes[path] !== "undefined";
  }

  getRoute(path: string) {
    return this.routes[path];
  }

  renderPage(path: string) {
    let route;

    /* 동적 라우팅 처리 */
    const regex = /\w{1,}$/; // 동적 라우팅으로 전달되는 :id 는 모두 [문자열 + 숫자] 조합으로 간주

    if (this.hasRoute(path)) {
      route = this.getRoute(path);
    } else if (regex.test(path)) {
      // 주소가 없는 경우를 동적 라우팅으로 간주하고 이를 :id 로 치환
      route = this.getRoute(path.replace(regex, ":id"));
    } else {
      // 그 외 입력되지 않은 모든 주소에 대해서는 fallback 실행
      route = this.getRoute(this.fallback);
    }

    new route(this.$app, {});
  }

  push(path: string) {
    customEventEmitter("moveRoutes", {
      ...history.state,
      path,
    });
  }
}

export let router: {
  push: (path: string) => void;
};

export function initRouter(options: {
  $app: HTMLElement;
  routes: Route[];
}): void {
  const routerObj = new Router(options);

  router = {
    push: (path) => routerObj.push(path),
  };

  customEventEmitter(
    "moveRoutes",
    history.state ?? {
      path: "/",
    }
  );
}
