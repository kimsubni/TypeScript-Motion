import Component, { PropsType, StateType } from "@/core/Component";

export type HeaderProps = {
  name: string;
  id: string;
};

export default class HeaderItemCard extends Component<HeaderProps, StateType> {
  didMount(): void {
    const $img = this.target.querySelector("img");
    $img?.setAttribute("src", require("../../assets/img.png"));
  }
  template(): string {
    const { name, id }: HeaderProps = this.props;
    return `<button> <img />${name}</button>`;
  }
}
