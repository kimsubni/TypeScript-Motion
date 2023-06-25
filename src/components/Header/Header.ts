import Component, { PropsType, StateType } from "@/core/Component";
import { router } from "@/core/BrowserRouter";
import HeaderItemCard, { HeaderProps } from "./HeaderItemCard";

export default class Header extends Component<PropsType, StateType> {
  didMount() {
    const btnArray: HeaderProps[] = [
      { name: "이미지 삽입", id: "img" },
      { name: "비디오 삽입", id: "video" },
      { name: "메모", id: "note" },
      { name: "할 일", id: "todo" },
    ];
    btnArray.forEach((item) => {
      this.insertItemCard(item.name, item.id);
    });
  }
  insertItemCard(name: string, id: string) {
    const $headerItems = this.target.querySelector(`#${id}`);
    new HeaderItemCard($headerItems as Element, {
      name,
      id,
    });
    console.log("여기와봐");
  }
  template() {
    return `
    <div class='header'>
      <div>김수빈의 모션</div>
      <div class='header-items' >
        <div class='header-item' id='img'></div>
        <div class='header-item' id='video'></div>
        <div class='header-item' id='note'></div>
        <div class='header-item' id='todo'></div>
      </div>
    </div>
    `;
  }
}
