import Input, { InputProps } from "@/components/Input";
import Component, { PropsType, StateType } from "@/core/Component";

export default class VideoModal extends Component<PropsType, StateType> {
  didMount(): void {
    this.insertInput({
      id: "titleInput",
      name: "Title",
      type: "text",
      placeholder: "비디오 제목을 작성해주세요.",
      value: "",
    });
    this.insertInput({
      id: "urlInput",
      name: "URL",
      type: "url",
      placeholder: "여기에 URL을 작성해주세요.",
      value: "",
    });
    this.insertInput({
      id: "descriptionInput",
      name: "설명",
      type: "text",
      placeholder: "비디오에 대한 설명을 작성해주세요.",
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
        <urlInput></urlInput>
        <descriptionInput></descriptionInput>
        <tagInput></tagInput>
    </div>
    `;
  }
}
