import Component, { PropsType, StateType } from "@/core/Component";
import { Item } from "@/data/ItemList";
import ImgCard from "./ImgCard";
import VideoCard from "./VideoCard";
import MemoCard from "./MemoCard";
import TodoCard from "./TodoCard";
type ItemCardProps = {
  item: Item;
};
export default class ItemCard extends Component<ItemCardProps, StateType> {
  didMount(): void {
    const $itemCard = this.target.querySelector("itemCard");
    const item = this.props.item;
    switch (this.props.item.type) {
      case "img":
        new ImgCard($itemCard as Element, { item });
        break;
      case "video":
        new VideoCard($itemCard as Element, { item });
        break;
      case "memo":
        new MemoCard($itemCard as Element, { item });
        break;
      case "todo":
        new TodoCard($itemCard as Element, { item });
        break;
    }
  }

  template(): string {
    return `
    <div class ='item-wrapper'>
        <itemCard></itemCard>
    </div>
    `;
  }
}
