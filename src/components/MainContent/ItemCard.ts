import Component, { Composable, PropsType, StateType } from "@/core/Component";
import { ImgItem, Item, MemoItem, TodoItem, VideoItem } from "@/data/Item";
import ImgCard from "./ImgCard";
import VideoCard from "./VideoCard";
import MemoCard from "./MemoCard";
import TodoCard from "./TodoCard";
import {
  Draggable,
  Hoverable,
  DragState,
  OnDragStateListener,
} from "@/core/Draggable";
type ItemCardProps = {
  item: Item;
  removeItem: Function;
};
export default class ItemCard
  extends Component<ItemCardProps, StateType>
  implements Draggable, Composable, Hoverable
{
  private itemWrapper: HTMLElement = this.target.querySelector(
    ".item-wrapper"
  )! as HTMLElement;

  private dragStateListener?: OnDragStateListener<ItemCard>;
  didMount(): void {
    this.itemWrapper = this.target.querySelector(
      ".item-wrapper"
    )! as HTMLElement;
    this.insertElement();
    const $closeBtn = this.target.querySelector(".close-btn")! as HTMLElement;
    $closeBtn.addEventListener("click", () => {
      if (confirm("삭제하시겠습니까?"))
        this.props.removeItem(this.props.item.id);
    });
    console.log(this.itemWrapper);

    this.itemWrapper.addEventListener("dragstart", (event: DragEvent) => {
      this.onDragStart(event);
    });
    this.itemWrapper.addEventListener("dragend", (event: DragEvent) => {
      this.onDragEnd(event);
    });
    this.itemWrapper.addEventListener("drop", (event: DragEvent) => {
      this.onDrop(event);
    });
    this.itemWrapper.addEventListener("dragenter", (event: DragEvent) => {
      this.onDragEnter(event);
    });
    this.itemWrapper.addEventListener("dragleave", (event: DragEvent) => {
      this.onDragLeave(event);
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
    this.notifyDragObserver("start");
    console.log("Start");
    this.itemWrapper.classList.add("dragging");
    // -this.itemWrapper.style.position = "absolute";
    // -this.itemWrapper.style.zIndex = "1000";
  }
  onDragEnd(_: DragEvent): void {
    console.log("End");

    this.notifyDragObserver("stop");
    this.itemWrapper.classList.remove("dragging");
    // -this.itemWrapper.removeAttribute("style");
  }

  onDragging(event: DragEvent): void {
    // -this.itemWrapper.style.top = event.pageY - this.itemWrapper.offsetHeight / 2 + "px";
  }
  onDragEnter(event: DragEvent): void {
    this.notifyDragObserver("enter");
    this.itemWrapper.classList.add("drop-area");
  }
  onDrop(event: DragEvent): void {
    this.itemWrapper.classList.remove("drop-area");
  }
  onDragLeave(event: DragEvent): void {
    this.notifyDragObserver("leave");
    this.itemWrapper.classList.remove("drop-area");
  }
  muteChildren(state: "mute" | "unmute"): void {
    if (state === "mute") {
      this.itemWrapper.classList.add("mute-children");
    } else {
      this.itemWrapper.classList.remove("mute-children");
    }
  }
  setOnDragStateListener(
    listener: (target: ItemCard, state: DragState) => void
  ): void {
    this.dragStateListener = listener;
  }

  notifyDragObserver(state: DragState) {
    this.dragStateListener && this.dragStateListener(this, state);
  }
  template(): string {
    return `
    <div class ='item-wrapper' draggable="true">
        <itemCard></itemCard>
        <div class="close-btn"><i class="fa-solid fa-xmark"></i></div>
    </div>
    `;
  }
}
