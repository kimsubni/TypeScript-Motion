export default class Main {
  main: HTMLElement;

  constructor() {
    console.log("와야정상..");

    this.main = document.createElement("main");
    this.main.setAttribute("class", "main-container");
  }
  public render(): HTMLElement {
    console.log("여기왔어.");

    return document.createElement("main");
  }
}
