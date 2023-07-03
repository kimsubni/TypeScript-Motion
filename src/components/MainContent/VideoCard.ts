import Component, { PropsType, StateType } from "@/core/Component";
import { VideoItem } from "@/data/Item";
type VideoTypeProps = {
  item: VideoItem;
};
export default class VideoCard extends Component<VideoTypeProps, StateType> {
  template(): string {
    const { url, title, tag, description } = this.props.item;
    const date = this.props.item.date.toLocaleDateString();

    return ` <div class="imgvideocard-wrapper">
        <iframe class="video" src=${url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <div class="imgvideo-desc">
          <div class="imgvideo-header">
            <div class="title"> ${title}&nbsp;&nbsp; </div>
            <div class="date">${date} </div>
          </div>
          
          <div class="description">
            ${description}
          </div>
         
        </div>
      </div>`;
  }
}
