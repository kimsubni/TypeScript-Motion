import Header from "@/components/Header/Header";
import Component, { PropsType, StateType } from "@/core/Component";
import Main from "@/Pages/Main";

export default class App extends Component<PropsType, StateType> {
  didMount(): void {
    /*const $header = this.target.querySelector("header");
    new Header($header as Element, { propTest: "mainprops" });*/
    const $mainContainer = this.target.querySelector("mainContainer");
    new Main($mainContainer as Element, { propTest: "main" });
  }

  template() {
    return `
      <div class='page-wrapper'>
        <header></header>
        <div class ='content-wrapper'>
          <mainContainer></mainContainer>
        </div>
      </div>
    `;
  }
}
