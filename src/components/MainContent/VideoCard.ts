import Component, { PropsType, StateType } from "@/core/Component";

export default class VideoCard extends Component<PropsType, StateType> {
  template(): string {
    return `video`;
  }
}
