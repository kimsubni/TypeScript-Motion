export interface Draggable {
  onDragStart(dragElement: HTMLElement): void;
  onDragEnd(dragElement: HTMLElement): void;
}

export type DragType = {
  offset: number;
  element?: Element;
};
export interface DragHoverArea {
  onDragOver(hoverElement: HTMLElement, event: DragEvent): void;
  getDragAfterElement(container: HTMLElement, y: number): DragType;
}
