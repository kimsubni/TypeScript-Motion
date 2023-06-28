import Header from "@/components/Header/Header";
import ItemCardList from "@/components/MainContent/ItemCardList";
import Component, { PropsType, StateType } from "@/core/Component";

export default class Main extends Component<PropsType, StateType> {
  setup() {}
  didMount(): void {
    const $header = this.target.querySelector("header");
    new Header($header as Element, { props: "header" });
    const $itemCardList = this.target.querySelector("itemCardList");
    new ItemCardList($itemCardList as Element, {});
  }
  template(): string {
    return `
    <div class='main-wrapper'>
      <header></header>
      <itemCardList></itemCardList>
    </div>`;
  }
}
