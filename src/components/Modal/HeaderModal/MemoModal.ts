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
    });
    this.insertInput({
      id: "contentInput",
      name: "내용",
      type: "text",
      placeholder: "내용을 작성해주세요.",
      value: "",
    });
    this.insertInput({
      id: "tagInput",
      name: "태그",
      type: "text",
      placeholder: "태그를 작성해주세요.",
      value: "",
    });
  }

  insertInput(inputProps: InputProps) {
    const $input = this.target.querySelector(inputProps.id) as Element;
    new Input($input, {
      ...inputProps,
    });
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
