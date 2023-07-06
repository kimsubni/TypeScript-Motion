import Input, { InputProps } from "@/components/Input";
import Component, { Composable, PropsType, StateType } from "@/core/Component";
import { VideoItem } from "@/data/Item";
import ItemService from "@/service/Item";

type VideoStateType = VideoItem;
type ModalType = {
  removeModal: Function;
  createItem: Function;
};
export default class VideoModal
  extends Component<ModalType, VideoStateType>
  implements Composable
{
  setup() {
    this.setState({
      url: "",
      title: "",
      description: "",
      date: new Date(),
      tag: [],
      type: "video",
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

  insertElement(): void {
    this.insertInput({
      id: "titleInput",
      name: "Title",
      type: "text",
      placeholder: "비디오 제목을 작성해주세요.",
      value: this.state.title,
      handleChange: this.handleChange.bind(this),
    });
    this.insertInput({
      id: "urlInput",
      name: "URL",
      type: "url",
      placeholder: "여기에 URL을 작성해주세요.",
      value: this.state.url,
      handleChange: this.handleChange.bind(this),
    });
    this.insertInput({
      id: "descriptionInput",
      name: "설명",
      type: "text",
      placeholder: "비디오에 대한 설명을 작성해주세요.",
      value: this.state.description,
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

  insertInput(inputProps: InputProps) {
    const $input = this.target.querySelector(inputProps.id) as Element;
    new Input($input, {
      ...inputProps,
    });
  }

  handleChange(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    switch (target.name) {
      case "Title":
        this.setState({ title: target.value });
        break;
      case "URL":
        this.setState({ url: target.value });
        break;
      case "설명":
        this.setState({ description: target.value });
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
        <urlInput></urlInput>
        <descriptionInput></descriptionInput>
        <tagInput></tagInput> 
        <div class="btn-wrapper">
          <button class="form-submit">추가하기</button>
        </div>
      </form>
    </div>
    `;
  }
}
