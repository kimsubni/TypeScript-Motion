import Header from "@/components/Header/Header";
import Component, { PropsType, StateType } from "@/core/Component";

export default class Login extends Component<PropsType, StateType> {
  didMount(): void {
    const $header = this.target.querySelector("header");
    new Header($header as Element, { propTest: "subprop" });
  }

  template() {
    return `
        <div>login</div>
    `;
  }
}
