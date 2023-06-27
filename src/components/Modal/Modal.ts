import Component, { PropsType, StateType } from "@/core/Component";
import ImgModal from "@/components/Modal/HeaderModal/ImgModal";
type ModalProps = {
  id: string;
  name: string;
};
export default class Modal extends Component<ModalProps, StateType> {
  didMount(): void {
    const $modalWrapper = document.querySelector(".modal-wrapper");
    $modalWrapper?.addEventListener("click", () => {
      $modalWrapper.remove();
    });
    this.inputContent();
  }
  async inputContent() {
    const $modalContent = document.querySelector(".modal-content");
    const Content = await import("@/components/Modal/HeaderModal/ImgModal");
    if (Content) {
      new Content.default($modalContent as Element, { props: "헤" });
    }
  }

  template(): string {
    return `
    <div class="modal-wrapper">
      <div class="modal">
        <div class="modal-header">
          <span>${this.props.name}</span>
          <span>X</span>
        </div>
        <div class ="modal-content"></div>
      </div>
    </div>
  `;
  }
}
