import ItemCard from "@/components/MainContent/ItemCard";
import Component, { PropsType, StateType } from "./Component";

export type DragState = "start" | "stop" | "leave" | "enter";

export type OnDragStateListener<T extends Component<PropsType, StateType>> = (
  target: T,
  state: DragState
) => void;

export interface Draggable {
  onDragStart(event: DragEvent): void;
  onDragEnd(event: DragEvent): void;
  onDragging(event: DragEvent): void;
  muteChildren(state: "mute" | "unmute"): void;
  setOnDragStateListener(listener: OnDragStateListener<ItemCard>): void;
}

export type DragType = {
  offset: number;
  element?: HTMLElement;
};
export interface DragHoverArea {
  onDragOver(hoverElement: HTMLElement, event: DragEvent): void;
}

export interface Hoverable {
  // Notify when dragged item enters the area
  onDragEnter(event: DragEvent): void;
  // Notify when dragged item leaves the area
  onDragLeave(event: DragEvent): void;
}
export interface Droppable {
  // Method that takes care of what happens when a draggable item is hovered over the host widget
  onDragOver(event: DragEvent): void;
  //   Method that handles the dropping of a draggable item
  onDrop(event: DragEvent): void;
}

export interface GetDragElement {
  getDragAfterElement(container: HTMLElement, y: number): DragType;
}
