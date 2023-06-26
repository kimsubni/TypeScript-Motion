import Component, { PropsType, StateType } from "@/core/Component";

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
    // if (Content) {
    //   new Content($modalContent as Element, { props: "헤" });
    // }
    console.log("여기출력할게!" + typeof Content);
    console.log("여기출력할게!", Content);
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
