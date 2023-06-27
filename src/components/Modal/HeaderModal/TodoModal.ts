import Component, { PropsType, StateType } from "@/core/Component";

export default class TodoModal extends Component<PropsType, StateType> {
  didMount(): void {}
  template(): string {
    return `<div>할일입니다?</div>`;
  }
}
