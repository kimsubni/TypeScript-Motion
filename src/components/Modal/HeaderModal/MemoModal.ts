import Input, { InputProps } from "@/components/Input";
import Component, { PropsType, StateType } from "@/core/Component";

export default class MemoModal extends Component<PropsType, StateType> {
  didMount(): void {
    this.insertInput({
      id: "titleInput",
      name: "Title",
      type: "text",
      placeholder: "제목을 작성해주세요.",
      value: "",
      handleChange: this.handleChange.bind(this),
    });
    this.insertInput({
      id: "contentInput",
      name: "내용",
      type: "text",
      placeholder: "내용을 작성해주세요.",
      value: "",
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
    console.log(this);
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    /*switch (target.name) {
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
    }*/
  }
  template(): string {
    return `
    <div class="modal-input-wrapper">
        <titleInput></titleInput>
        <contentInput></contentInput>
        <tagInput></tagInput>
    </div>
    `;
  }
}
