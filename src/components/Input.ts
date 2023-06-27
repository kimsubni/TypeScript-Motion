import Component, { PropsType, StateType } from "@/core/Component";

export type InputProps = {
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  type: "text" | "checkbox" | "radio" | "number" | "password" | "url";
  require?: boolean;
};
export default class Input extends Component<InputProps, StateType> {
  template(): string {
    const { id, name, value, placeholder, type, require } = this.props;
    return `
    <div class="input-wrapper">
        <label class="modal-input-label" id=${id}>${name}</label>
            <input class ='modal-input'  type=${type} for=${id} name=${name} placeholder=${
      placeholder ? placeholder : ""
    }>
    <div>`;
  }
}
