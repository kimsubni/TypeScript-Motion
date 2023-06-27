import Component, { PropsType, StateType } from "@/core/Component";
import { HeaderItem } from "./Header";

export default class HeaderItemCard extends Component<HeaderItem, StateType> {
  didMount(): void {
    const $img = this.target.querySelector("img") as HTMLImageElement;
    $img.src = this.props.url;
    $img.setAttribute("class", "btn-img");
  }
  template(): string {
    return `<button class="header-btn"> <img/><div class="btn-name">${this.props.name}</div></button>`;
  }
}
