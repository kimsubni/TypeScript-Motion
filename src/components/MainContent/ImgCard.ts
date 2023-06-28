import Component, { PropsType, StateType } from "@/core/Component";
import { ImgItem } from "@/data/ItemList";

type ImgType = {
  item: ImgItem;
};
export default class ImgCard extends Component<ImgType, StateType> {
  template(): string {
    const { url, title, tag, description } = this.props.item;
    return `
      <div class="imgcard-wrapper">
        <img src=${url} class='img-url'>
        <div class="img-desc">
          <div class="title">
            ${title}
          </div>
          <div class="description">
            ${description}
          </div>
         
        </div>
      </div>
   `;
  }
}
