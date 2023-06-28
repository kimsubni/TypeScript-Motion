import Header from "@/components/Header/Header";
import ItemCardList from "@/components/MainContent/ItemCardList";
import Component, { PropsType, StateType } from "@/core/Component";
import { ItemList, itemList } from "@/data/ItemList";

type MainStateType = {
  items: ItemList;
};
export default class Main extends Component<PropsType, MainStateType> {
  setup() {
    //  데이터를 받아온다
    this.state = { items: itemList };
  }
  didMount(): void {
    const $header = this.target.querySelector("header");
    new Header($header as Element, { props: "header" });
    const $itemCardList = this.target.querySelector("itemCardList");
    new ItemCardList($itemCardList as Element, {
      items: this.state.items,
    });
  }
  template(): string {
    return `
    <div class='main-wrapper'>
      <header></header>
      <itemCardList></itemCardList>
    </div>`;
  }
}
