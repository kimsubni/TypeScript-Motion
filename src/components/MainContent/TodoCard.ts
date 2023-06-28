import Component, { PropsType, StateType } from "@/core/Component";

export default class TodoCard extends Component<PropsType, StateType> {
  template(): string {
    return `todo`;
  }
}
