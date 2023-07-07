export interface Draggable {
  onDragStart(event: DragEvent): void;
  onDragEnd(event: DragEvent): void;
  onDragging(event: DragEvent): void;
}

export type DragType = {
  offset: number;
  element?: Element;
};
export interface DragHoverArea {
  onDragOver(hoverElement: HTMLElement, event: DragEvent): void;
}

export interface GetDragElement {
  getDragAfterElement(container: HTMLElement, y: number): DragType;
}
