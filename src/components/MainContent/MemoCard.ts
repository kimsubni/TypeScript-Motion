import Component, { PropsType, StateType } from "@/core/Component";
import { MemoItem } from "@/data/ItemList";

type MemoTypeProps = {
  item: MemoItem;
};
export default class MemoCard extends Component<MemoTypeProps, StateType> {
  template(): string {
    return `
    <div class="memocard-wrapper">
      <div class="title">${this.props.item.title}</div>
      <div class="content">${this.props.item.content}</div>
    </div>
    `;
  }
}
