import Component, { PropsType, StateType } from "@/core/Component";

export default class MemoModal extends Component<PropsType, StateType> {
  didMount(): void {}
  template(): string {
    return `<div>메모입니다?</div>`;
  }
}
