var Router = /** @class */ (function () {
    function Router() {
        this.routes = [];
    }
    Router.getInstance = function () {
        if (!Router.instance) {
            Router.instance = new Router();
        }
        return Router.instance;
    };
    // router feature 1 : 애플리케이션의 경로 목록들을 저장한다.
    Router.prototype.addRoute = function (fragment, comp) {
        this.routes.push({ fragment: fragment, comp: comp });
        return this;
    };
    // router feature 2 : 현재 URL이 변경되면 페이지 콘텐츠를 해당 URL에 매핑된 구성 요소로 교체한다.
    Router.prototype.start = function () {
        var _this = this;
        var checkRoutes = function () {
            var currentRoute = _this.routes.find(function (route) { return route.fragment === window.location.hash; });
            currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.comp();
        };
        // 브라우저에서 hash값이 바뀔 때 발생하는 이벤트
        window.addEventListener("hashchange", checkRoutes);
        checkRoutes();
    };
    return Router;
}());
export default Router;
//# sourceMappingURL=router.js.map