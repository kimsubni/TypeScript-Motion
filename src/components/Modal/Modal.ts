import Component, { Composable, PropsType, StateType } from "@/core/Component";
import { itemList, Item } from "@/data/Item";
import ItemService from "@/service/Item";
type ModalProps = {
  id: string;
  name: string;
  compPath: string;
  updateItemList: Function;
};
export default class Modal
  extends Component<ModalProps, StateType>
  implements Composable
{
  didMount(): void {
    const $modalWrapper = this.target.querySelector(
      ".modal-wrapper"
    )! as HTMLElement;
    $modalWrapper.addEventListener("click", (e) => {
      if (e.currentTarget === e.target) {
        $modalWrapper.remove();
      }
    });
    this.insertElement();

    const $closeModal = this.target.querySelector(".close-modal");
    $closeModal?.addEventListener("click", () => {
      $modalWrapper.remove();
    });
  }
  insertElement(): void {
    const $modalContent = document.querySelector(".modal-content");
    import(`@/components/Modal/${this.props.compPath}`).then((Content) => {
      new Content.default($modalContent as Element, {
        removeModal: this.removeModal.bind(this),
        createItem: this.createItem.bind(this),
      });
    });
  }

  removeModal() {
    const $modalWrapper = this.target.querySelector(".modal-wrapper");
    if (!$modalWrapper) {
      new Error("remove error : modalWrapper is not ");
      return;
    }
    $modalWrapper.remove();
    this.props.updateItemList(itemList);
  }

  createItem(item: Item) {
    const itemService: ItemService = new ItemService();
    const $targetform = this.target.querySelector("#item-form");
    $targetform?.addEventListener("submit", (e: Event) => {
      e.preventDefault();
      itemService.addItem(item);
      this.removeModal();
    });
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
