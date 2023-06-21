var Main = /** @class */ (function () {
    function Main() {
        console.log("와야정상..");
        this.main = document.createElement("main");
        this.main.setAttribute("class", "main-container");
    }
    Main.prototype.render = function () {
        console.log("여기왔어.");
        return document.createElement("main");
    };
    return Main;
}());
export default Main;
//# sourceMappingURL=Main.js.map