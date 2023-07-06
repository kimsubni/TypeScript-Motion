import Component, { PropsType, StateType } from "@/core/Component";

export default class Login extends Component<PropsType, StateType> {
  didMount(): void {}

  template() {
    return `
        <div>login</div>
    `;
  }
}
