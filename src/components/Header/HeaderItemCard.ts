import Component, { PropsType, StateType } from "@/core/Component";
import img from "../../assets/imgBtn.png";
export type HeaderProps = {
  name: string;
  id: string;
};
export default class HeaderItemCard extends Component<HeaderProps, StateType> {
  didMount(): void {
    const $img = this.target.querySelector("img") as HTMLElement;
    $img.setAttribute("src", img);
    $img.setAttribute("class", "btn-img");
  }
  template(): string {
    return `<button class="header-btn"> <img src="http://localhost:8080/src/assets/imgBtn.png"/><p>${this.props.name}</p></button>`;
  }
}
