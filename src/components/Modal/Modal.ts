import Component, { PropsType, StateType } from "@/core/Component";
type ModalProps = {
  id: string;
  name: string;
  compPath: string;
};
export default class Modal extends Component<ModalProps, StateType> {
  didMount(): void {
    const $modalWrapper = this.target.querySelector(".modal-wrapper");
    if (!$modalWrapper) {
      new Error("모달 생성 오류");
      return;
    }
    $modalWrapper.addEventListener("click", (e) => {
      if (e.currentTarget === e.target) {
        $modalWrapper.remove();
      }
    });
    this.inputContent();

    const $closeModal = this.target.querySelector(".close-modal");
    $closeModal?.addEventListener("click", () => {
      $modalWrapper.remove();
    });
  }
  async inputContent() {
    const $modalContent = document.querySelector(".modal-content");
    const Content = await import(`@/components/Modal/${this.props.compPath}`);
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
          <span class="close-modal"><i class="fa-solid fa-xmark"></i></span>
        </div>
        <div class ="modal-content"></div>
      </div>
    </div>
  `;
  }
}
