import Header from "@/components/Header/Header";
import Component, { PropsType, StateType } from "@/core/Component";
import ItemCard from "@/components/MainContent/ItemCard";
import { ItemList, itemList } from "@/data/Item";
import ItemService from "@/service/Item";
import { DragHoverArea, DragType, Draggable } from "@/core/Draggable";

type ItemsStateType = {
  items: ItemList;
};
export default class Main
  extends Component<PropsType, ItemsStateType>
  implements Draggable, DragHoverArea
{
  setup() {
    this.state = { items: itemList };
  }
  didMount(): void {
    this.renderingElement();
  }
  didUpdate(): void {
    this.renderingElement();
  }

  renderingElement() {
    this.insertHeader();
    this.insertItemCardList();
    this.addDragEvent();
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
      $newItem?.setAttribute("draggable", "true");

      new ItemCard($newItem as Element, {
        item,
        removeItem: this.removeItem.bind(this),
      });
    });
  }

  addDragEvent() {
    const $draggables = this.target.querySelectorAll(".items");
    $draggables.forEach((draggable) => {
      const dragElement = draggable as HTMLElement;
      dragElement.addEventListener("dragstart", () => {
        this.onDragStart(dragElement);
      });
      dragElement.addEventListener("dragend", () => {
        this.onDragEnd(dragElement);
      });
      // this.doingDrag(dragElement);
    });

    const $listWrapper = this.target.querySelector(
      ".itemlist-wrapper"
    )! as HTMLElement;
    $listWrapper.addEventListener("dragover", (e) => {
      e.preventDefault();
      this.onDragOver($listWrapper, e);
    });
  }
  onDragStart(dragElement: HTMLElement) {
    dragElement.classList.add("dragging");
    // dragElement.style.position = "absolute";
    // dragElement.style.zIndex = "1000";
  }
  onDragEnd(dragElement: HTMLElement) {
    dragElement.classList.remove("dragging");
    dragElement.removeAttribute("style");
  }
  onDragOver(hoverElement: HTMLElement, e: DragEvent) {
    const dragElement = document.querySelector(".dragging") as HTMLElement;
    const afterElement = this.getDragAfterElement(hoverElement, e.clientY);
    if (afterElement.element) {
      hoverElement.insertBefore(dragElement, afterElement.element);
    } else {
      hoverElement.appendChild(dragElement);
    }
  }
  /**
   * 드래그하는 중
   */
  // doingDrag(dragElement: HTMLElement) {
  //   dragElement.addEventListener("drag", (event) => {
  //     function moveAt(pageY: number) {
  //       dragElement.style.top = pageY - dragElement.offsetHeight / 2 + "px";
  //     }
  //     moveAt(event.pageY);
  //   });
  // }

  getDragAfterElement(container: HTMLElement, y: number): DragType {
    const draggableElements = [
      ...container.querySelectorAll(".items:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.bottom;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    );
  }

  updateItemList(itemList: ItemList) {
    this.setState({ items: itemList });
    this.update();
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
