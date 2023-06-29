import Component, { PropsType, StateType } from "@/core/Component";
import { VideoItem } from "@/data/ItemList";
type VideoTypeProps = {
  item: VideoItem;
};
export default class VideoCard extends Component<VideoTypeProps, StateType> {
  template(): string {
    const { url, title, tag, description } = this.props.item;

    return ` <div class="imgcard-wrapper">
        <iframe width="280" height="180" src=${url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <div class="img-desc">
          <div class="title">
            ${title}
          </div>
          <div class="description">
            ${description}
          </div>
         
        </div>
      </div>`;
  }
}
