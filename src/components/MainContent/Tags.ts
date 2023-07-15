import Component, { StateType } from "@/core/Component";

type TagsProps = {
  tags: string[];
};
export default class Tags extends Component<TagsProps, StateType> {
  didMount(): void {}
  template(): string {
    const result = `<div class="tags">
    ${this.props.tags
      .map((value: string) => `<div class="tag">${value}</div>`)
      .join("")}
    </div>`;

    return result;
  }
}
