import Component, { PropsType, StateType } from "@/core/Component";

type video = {};
export default class VideoModal extends Component<PropsType, StateType> {
  didMount(): void {}
  template(): string {
    return `<div>비디오입니다?</div>`;
  }
}
