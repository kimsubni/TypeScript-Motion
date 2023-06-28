import Component, { PropsType, StateType } from "@/core/Component";

export default class ImgCard extends Component<PropsType, StateType> {
  template(): string {
    return `img`;
  }
}
