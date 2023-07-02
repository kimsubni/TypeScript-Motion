import Header from "@/components/Header/Header";
import Component, { PropsType, StateType } from "@/core/Component";
import ItemCard from "@/components/MainContent/ItemCard";
import { ItemList, itemList } from "@/data/Item";
import ItemService from "@/service/Item";

type ItemsStateType = {
  items: ItemList;
};
export default class Main extends Component<PropsType, ItemsStateType> {
  setup() {
    //  데이터를 받아온다
    this.state = { items: itemList };
  }
  didMount(): void {
    this.insertHeader();
    this.insertItemCardList();
  }

  insertHeader() {
    const $header = this.target.querySelector("header");
    new Header($header as Element, {
      updateItemList: this.updateItemList.bind(this),
    });
  }
  insertItemCardList() {
    const $itemCardList = this.target.querySelector(".itemlist-wrapper");
    this.state.items.forEach((item) => {
      const $newItem = $itemCardList?.appendChild(
        document.createElement("div")
      );
      $newItem?.setAttribute("class", "items");

      new ItemCard($newItem as Element, {
        item,
        removeItem: this.removeItem.bind(this),
      });
    });
  }

  updateItemList(itemList: ItemList) {
    this.setState({ items: itemList });
    this.update();
  }
  didUpdate(): void {
    this.insertHeader();
    this.insertItemCardList();
  }

  removeItem(id: string) {
    const itemService: ItemService = new ItemService();
    itemService.removeItem(id);
    this.setState({ items: itemList });
    this.update();
  }
  template(): string {
    return `
    <div class='main-wrapper'>
      <header></header>
      <div class ="itemlist-wrapper"></div>
    </div>`;
  }
}
