import Component, { PropsType, StateType } from "@/core/Component";
import { TodoItem } from "@/data/ItemList";

type TodoTypeProps = {
  item: TodoItem;
};
type TodoState = {
  isCheck: boolean;
};
export default class TodoCard extends Component<TodoTypeProps, TodoState> {
  setup() {
    this.state.isCheck = this.props.item.isComplete;
  }
  didMount(): void {
    this.todoClickEvent();
  }
  didUpdate(): void {
    this.todoClickEvent();
  }
  todoClickEvent() {
    const $todoCheck = this.target.querySelector(".todo-check");
    $todoCheck?.addEventListener("click", () => {
      this.setState({ isCheck: !this.state.isCheck });
    });
  }
  template(): string {
    const date = this.props.item.date.toLocaleDateString();
    return `
    <div class ="todo-wrapper">
      <div class="todo-content">
        <div class="title">${this.props.item.title} &nbsp;&nbsp;</div>
        <div class="date">${date}</div>
      </div>
      <div class="todo-check ${this.state.isCheck && "checked"}"></div>
    </div>`;
  }
}
