import Component, { PropsType, StateType } from "@/core/Component";

export default class ItemCard extends Component<PropsType, StateType> {
  template(): string {
    return `
    <div class ='item-wrapper'>
    </div>
    `;
  }
}
