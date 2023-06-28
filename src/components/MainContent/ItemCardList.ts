import Component, { PropsType, StateType } from "@/core/Component";

export default class ItemCardList extends Component<PropsType, StateType> {
  didMount(): void {
    const $itemCardList = this.target.querySelector("itemCardList");
    new ItemCardList($itemCardList as Element, { items: [] });
  }
  template(): string {
    return `
        <div class ="itemlist-wrapper">
          
        </div>
    `;
  }
}
