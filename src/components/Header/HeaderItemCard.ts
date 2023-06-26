import Component, { PropsType, StateType } from "@/core/Component";
import img from "@/assets/imgBtn.png";
export type HeaderProps = {
  name: string;
  id: string;
  url: string;
};
export default class HeaderItemCard extends Component<HeaderProps, StateType> {
  didMount(): void {
    const $img = this.target.querySelector("img") as HTMLImageElement;
    $img.src = this.props.url;
    $img.setAttribute("class", "btn-img");
  }
  template(): string {
    return `<button class="header-btn"> <img/><div class="btn-name">${this.props.name}</div></button>`;
  }
}
