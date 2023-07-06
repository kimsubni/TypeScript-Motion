import Header from "@/components/Header/Header";
import Component, { Composable, PropsType, StateType } from "@/core/Component";
import ItemCard from "@/components/MainContent/ItemCard";
import { ItemList, itemList } from "@/data/Item";
import ItemService from "@/service/Item";
import { DragHoverArea, DragType, GetDragElement } from "@/core/Draggable";

type ItemsStateType = {
  items: ItemList;
};
export default class Main
  extends Component<PropsType, ItemsStateType>
  implements DragHoverArea, Composable, GetDragElement
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
    this.insertElement();
    this.addDragEvent();
  }

  insertElement(): void {
    /**
     * Header component
     */
    const $header = this.target.querySelector("header");
    new Header($header as Element, {
      updateItemList: this.updateItemList.bind(this),
    });
    /**
     * ItemCard component
     */
    const $itemCardList = this.target.querySelector(
      ".itemlist-wrapper"
    )! as HTMLElement;
    this.state.items.forEach((item) => {
      const $newItem = $itemCardList.appendChild(
        document.createElement("section")
      );
      $newItem.setAttribute("draggable", "true");
      new ItemCard($newItem as Element, {
        item,
        removeItem: this.removeItem.bind(this),
      });
    });
  }
  addDragEvent() {
    const $listWrapper = this.target.querySelector(
      ".itemlist-wrapper"
    )! as HTMLElement;
    $listWrapper.addEventListener("dragover", (e) => {
      e.preventDefault();
      this.onDragOver($listWrapper, e);
    });
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
  getDragAfterElement(container: HTMLElement, y: number): DragType {
    const draggableElements = [
      ...container.querySelectorAll("section:not(.dragging)"),
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
