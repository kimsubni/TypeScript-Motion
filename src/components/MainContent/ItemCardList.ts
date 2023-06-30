import Component, { PropsType, StateType } from "@/core/Component";
import { ItemList } from "@/data/ItemList";
import ItemCard from "./ItemCard";

type ItemsProps = {
  items: ItemList;
};
export default class ItemCardList extends Component<ItemsProps, StateType> {
  didMount(): void {
    const $itemCardList = this.target.querySelector(".itemlist-wrapper");
    this.props.items.forEach((item) => {
      const $newItem = $itemCardList?.appendChild(
        document.createElement("div")
      );
      $newItem?.setAttribute("class", "items");
      console.log($newItem);

      new ItemCard($newItem as Element, { item });
    });
  }
  template(): string {
    return `
        <div class ="itemlist-wrapper">
        </div>
    `;
  }
}
