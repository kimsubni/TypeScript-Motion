import Component, { PropsType, StateType } from "@/core/Component";
import { ImgItem, Item, MemoItem, TodoItem, VideoItem } from "@/data/ItemList";
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
        new ImgCard($itemCard as Element, { item: item as ImgItem });
        break;
      case "video":
        new VideoCard($itemCard as Element, { item: item as VideoItem });
        break;
      case "memo":
        new MemoCard($itemCard as Element, { item: item as MemoItem });
        break;
      case "todo":
        new TodoCard($itemCard as Element, { item: item as TodoItem });
        break;
    }
  }

  template(): string {
    return `
    <div class ='item-wrapper'>
        <itemCard></itemCard>
        <div class="close-btn"><i class="fa-solid fa-xmark"></i></div>
    </div>
    `;
  }
}
