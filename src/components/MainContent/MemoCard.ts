import Component, { PropsType, StateType } from "@/core/Component";
import { MemoItem } from "@/data/ItemList";

type MemoTypeProps = {
  item: MemoItem;
};
export default class MemoCard extends Component<MemoTypeProps, StateType> {
  template(): string {
    const date = this.props.item.date.toLocaleDateString();
    return `
    <div class="memocard-wrapper">
      <div class="memo-header">
        <div class="title">${this.props.item.title}&nbsp;&nbsp;</div>
        <div class="date">${date}</div>
      </div>
      <div class="content">${this.props.item.content}</div>
    </div>
    `;
  }
}
