import Component, { PropsType, StateType } from "@/core/Component";
import { ImgItem } from "@/data/Item";

type ImgTypeProps = {
  item: ImgItem;
};
export default class ImgCard extends Component<ImgTypeProps, StateType> {
  template(): string {
    const { url, title, tag, description } = this.props.item;
    const date = this.props.item.date.toLocaleDateString();

    return `
      <div class="imgvideocard-wrapper">
        <img src=${url} class='img-url'>
        <div class="imgvideo-desc">
          <div class="imgvideo-header">
            <div class="title"> ${title}&nbsp;&nbsp; </div>
            <div class="date">${date} </div>
          </div>
      
          <div class="description">
            ${description}
          </div>
         
        </div>
      </div>
   `;
  }
}
