var Router = /** @class */ (function () {
    function Router() {
        var _this = this;
        // router feature 2 : 현재 URL이 변경되면 페이지 콘텐츠를 해당 URL에 매핑된 구성 요소로 교체한다.
        this.render = function (path) {
            var currentRoute = _this.routes.find(function (route) { return route.fragment == path; });
            if (currentRoute) {
                window.history.pushState({}, "", "http://172.29.89.104:5500" + currentRoute.fragment);
                currentRoute.comp();
            }
            else {
                console.log("여기온단뜻?");
                window.history.pushState({}, "", "http://172.29.89.104:5500");
            }
        };
        this.routes = [];
        window.onpopstate = function (e) {
            console.log(e.target);
            _this.render(window.location.pathname);
        };
        var aTags = document.querySelectorAll("a");
        aTags.forEach(function (tag) {
            return tag.addEventListener("click", function (e) {
                e.preventDefault();
                var hrefs = tag.href.split("/");
                _this.render("/" + hrefs[hrefs.length - 1]);
            });
        });
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
    return Router;
}());
export default Router;
//# sourceMappingURL=router.js.map