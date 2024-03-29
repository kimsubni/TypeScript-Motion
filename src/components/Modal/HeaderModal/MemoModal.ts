import Input, { InputProps } from "@/components/Input";
import Component, {
  Composable,
  ModalComponent,
  PropsType,
  StateType,
} from "@/core/Component";
import { MemoItem } from "@/data/Item";
import ItemService from "@/service/Item";

type MemoStateType = MemoItem;
type ModalType = {
  removeModal: Function;
  createItem: Function;
};
export default class MemoModal
  extends Component<ModalType, MemoStateType>
  implements Composable, ModalComponent
{
  setup() {
    this.setState({
      type: "memo",
      title: "",
      content: "",
      date: new Date(),
      tag: [],
    });
  }

  insertElement(): void {
    this.insertInput({
      id: "titleInput",
      name: "Title",
      type: "text",
      placeholder: "제목을 작성해주세요.",
      value: this.state.title,
      handleChange: this.handleChange.bind(this),
    });
    this.insertInput({
      id: "contentInput",
      name: "내용",
      type: "text",
      placeholder: "내용을 작성해주세요.",
      value: this.state.content,
      handleChange: this.handleChange.bind(this),
    });
    this.insertInput({
      id: "tagInput",
      name: "태그",
      type: "text",
      placeholder: "태그를 작성해주세요.",
      value: "",
      handleChange: this.handleChange.bind(this),
    });
  }
  didMount(): void {
    this.insertElement();
    this.props.createItem(this.state);
  }
  didUpdate(): void {
    this.insertElement();
    this.props.createItem(this.state);
  }
  insertInput(inputProps: InputProps) {
    const $input = this.target.querySelector(inputProps.id) as Element;
    new Input($input, {
      ...inputProps,
    });
  }
  handleChange(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    switch (target.name) {
      case "Title":
        this.setState({ title: target.value });
        break;
      case "내용":
        this.setState({ content: target.value });
        break;
      case "태그":
        break;
    }
  }
  template(): string {
    return `
    <div class="modal-input-wrapper">
      <form id="item-form">
        <titleInput></titleInput>
        <contentInput></contentInput>
        <tagInput></tagInput>
        <div class="btn-wrapper">
          <button class="form-submit">추가하기</button>
        </div>
      </form>
    </div>
    `;
  }
}
