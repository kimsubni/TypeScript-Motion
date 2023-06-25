import Header from "@/components/Header/Header";
import Component, { PropsType, StateType } from "@/core/Component";

export default class Main extends Component<PropsType, StateType> {
  didMount(): void {
    const $header = this.target.querySelector("header");
    new Header($header as Element, { propTest: "mainprops" });
  }
  template(): string {
    return `
    <div class='main-wrapper drop-shadow'>
        <header></header>
    </div>`;
  }
}
