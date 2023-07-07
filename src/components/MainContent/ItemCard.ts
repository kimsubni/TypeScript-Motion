import Component, { Composable, PropsType, StateType } from "@/core/Component";
import { ImgItem, Item, MemoItem, TodoItem, VideoItem } from "@/data/Item";
import ImgCard from "./ImgCard";
import VideoCard from "./VideoCard";
import MemoCard from "./MemoCard";
import TodoCard from "./TodoCard";
import { Draggable } from "@/core/Draggable";
type ItemCardProps = {
  item: Item;
  removeItem: Function;
};
export default class ItemCard
  extends Component<ItemCardProps, StateType>
  implements Draggable, Composable
{
  private element: HTMLElement = this.target as HTMLElement;
  didMount(): void {
    this.element = this.target as HTMLElement;
    this.insertElement();
    const $closeBtn = this.target.querySelector(".close-btn")! as HTMLElement;
    $closeBtn.addEventListener("click", () => {
      if (confirm("삭제하시겠습니까?"))
        this.props.removeItem(this.props.item.id);
    });

    this.element.addEventListener("dragstart", (event: DragEvent) => {
      this.onDragStart(event);
    });
    this.element.addEventListener("dragend", (event: DragEvent) => {
      this.onDragEnd(event);
    });
    this.element.addEventListener("drag", (event: DragEvent) => {
      this.onDragging(event);
    });
  }
  insertElement(): void {
    const item = this.props.item;
    const $itemCard = this.target.querySelector("itemCard");
    switch (item.type) {
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
  onDragStart(_: DragEvent): void {
    this.element.classList.add("dragging");
    this.element.style.position = "absolute";
    this.element.style.zIndex = "1000";
  }
  onDragEnd(_: DragEvent): void {
    this.element.classList.remove("dragging");
    this.element.removeAttribute("style");
  }

  onDragging(event: DragEvent): void {
    this.element.style.top = event.pageY - this.element.offsetHeight / 2 + "px";
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
