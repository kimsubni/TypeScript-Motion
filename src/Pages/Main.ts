import Header from "@/components/Header/Header";
import Component, { PropsType, StateType } from "@/core/Component";
import ItemCard from "@/components/MainContent/ItemCard";
import { ItemList, itemList } from "@/data/Item";
import ItemService from "@/service/Item";

type ItemsStateType = {
  items: ItemList;
};
type DragType = {
  offset: number;
  element?: Element;
};
export default class Main extends Component<PropsType, ItemsStateType> {
  setup() {
    //  데이터를 받아온다
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
    const draggables = this.target.querySelectorAll(".items");
    draggables.forEach((draggable) => {
      const dragElement = draggable as HTMLElement;
      this.startDrag(dragElement);
      this.doingDrag(dragElement);
      this.endDrag(dragElement);
    });

    const $listWrapper = this.target.querySelector(
      ".itemlist-wrapper"
    ) as HTMLElement;
    this.putDrag($listWrapper);
  }
  /**
   * 드래그 시작할 때
   */
  startDrag(dragElement: HTMLElement) {
    dragElement.addEventListener("dragstart", () => {
      dragElement.classList.add("dragging");
      dragElement.style.position = "absolute";
      dragElement.style.zIndex = "1000";
    });
  }
  /**
   * 영역에 드래그가 되었을 때
   */
  putDrag($wrapper: HTMLElement) {
    $wrapper?.addEventListener("dragover", (e) => {
      e.preventDefault();
      const dragElement = document.querySelector(".dragging") as HTMLElement;
      const afterElement = this.getDragAfterElement($wrapper, e.clientY);
      if (afterElement.element) {
        $wrapper.insertBefore(dragElement, afterElement.element);
      } else {
        $wrapper.appendChild(dragElement);
      }
    });
  }
  /**
   * 드래그 끝났을 때
   */
  endDrag(dragElement: HTMLElement) {
    dragElement.addEventListener("dragend", () => {
      dragElement.classList.remove("dragging");
      dragElement.removeAttribute("style");
    });
  }
  /**
   * 드래그하는 중
   */
  doingDrag(dragElement: HTMLElement) {
    dragElement.addEventListener("drag", (event) => {
      function moveAt(pageX: number, pageY: number) {
        dragElement.style.top = pageY - dragElement.offsetHeight / 2 + "px";
      }
      moveAt(event.pageX, event.pageY);
    });
  }

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
