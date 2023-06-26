import Component, { PropsType, StateType } from "@/core/Component";

type ModalProps = {
  id: string;
};
export default class Modal extends Component<ModalProps, StateType> {
  didMount(): void {
    const $modalWrapper = document.querySelector(".modal-wrapper");
    $modalWrapper?.addEventListener("click", () => {
      $modalWrapper.remove();
    });
  }

  template(): string {
    return `<div class="modal-wrapper">
      <div class="modal box-shadow-dark">${this.props.id}</div>
    </div>`;
  }
}
