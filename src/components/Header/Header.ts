import Component, { PropsType, StateType } from "@/core/Component";
// import { router } from "@/core/BrowserRouter";
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
      <div>김수빈의 모션<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm325.8 43.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"/></svg></div>
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
