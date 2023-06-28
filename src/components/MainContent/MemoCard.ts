import Component, { PropsType, StateType } from "@/core/Component";

export default class MemoCard extends Component<PropsType, StateType> {
  template(): string {
    return `memo`;
  }
}
