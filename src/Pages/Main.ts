import Header from "@/components/Header/Header";
import Component, { Composable, PropsType, StateType } from "@/core/Component";
import ItemCard from "@/components/MainContent/ItemCard";
import { Item, ItemList, itemList } from "@/data/Item";
import ItemService from "@/service/Item";
import {
  DragHoverArea,
  DragState,
  DragType,
  GetDragElement,
} from "@/core/Draggable";

type ItemsStateType = {
  items: ItemList;
  children: Set<ItemCard>;
};
export default class Main
  extends Component<PropsType, ItemsStateType>
  implements DragHoverArea, Composable, GetDragElement
{
  setup() {
    this.state = { items: itemList, children: new Set<ItemCard>() };
  }
  didMount(): void {
    this.renderingElement();
  }
  didUpdate(): void {
    this.renderingElement();
  }

  renderingElement() {
    this.state.children = new Set<ItemCard>();
    this.insertElement();
    const $listWrapper = this.target.querySelector(
      ".itemlist-wrapper"
    )! as HTMLElement;
    $listWrapper.addEventListener("dragover", (event) => {
      event.preventDefault();
      this.onDragOver($listWrapper, event);
    });
  }

  insertElement(): void {
    const $header = this.target.querySelector("header");
    new Header($header as Element, {
      updateItemList: this.updateItemList.bind(this),
    });
    const $itemCardList = this.target.querySelector(
      ".itemlist-wrapper"
    )! as HTMLElement;
    this.state.items.forEach((item) => {
      const $newItem = $itemCardList.appendChild(
        document.createElement("section")
      );
      const itemCard = new ItemCard($newItem as Element, {
        item,
        removeItem: this.removeItem.bind(this),
      });
      this.state.children.add(itemCard);
      itemCard.setOnDragStateListener((target: ItemCard, state: DragState) => {
        switch (state) {
          case "start":
            console.log("start");
            this.updateSection("mute");
            break;
          case "end":
            console.log("end");
            this.updateSection("unmute");
            break;
          case "enter":
            console.log("enter");
            break;
          case "leave":
            console.log("leave");
            break;
          default:
            throw new Error(`unsupported state: ${state}`);
        }
      });
    });
  }

  onDragOver(hoverElement: HTMLElement, event: DragEvent) {
    const dragElement = document.querySelector(".dragging") as HTMLElement;
    const afterElement = this.getDragAfterElement(hoverElement, event.clientY);
    if (afterElement.element) {
      hoverElement.insertBefore(dragElement, afterElement.element);
    } else {
      hoverElement.appendChild(dragElement);
    }
  }
  getDragAfterElement(container: HTMLElement, y: number): DragType {
    const draggableElements = [
      ...container.querySelectorAll(".item-wrapper:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.bottom;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child as HTMLElement };
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
    this.updateSection("unmute");
    this.update();
  }

  private updateSection(state: "mute" | "unmute") {
    this.state.children.forEach((section: ItemCard) => {
      section.muteChildren(state);
    });
  }

  template(): string {
    return `
    <div class='main-wrapper'>
      <header></header>
      <div class ="itemlist-wrapper"></div>
    </div>`;
  }
}
