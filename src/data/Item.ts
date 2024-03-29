import { v4 as uuid } from "uuid";

export type ItemType = {
  id: string;
  url: string;
  type: itemType;
  title: string;
  date: Date;
  description: string;
  tag: string[];
  content: string;
  isComplete: boolean;
};

type itemType = "img" | "video" | "memo" | "todo";

export type ImgItem = Pick<
  ItemType,
  "id" | "url" | "type" | "date" | "title" | "description" | "tag"
>;
export type VideoItem = Pick<
  ItemType,
  "id" | "url" | "type" | "date" | "title" | "description" | "tag"
>;
export type MemoItem = Pick<
  ItemType,
  "id" | "type" | "title" | "date" | "content" | "tag"
>;
export type TodoItem = Pick<
  ItemType,
  "id" | "title" | "content" | "date" | "type" | "tag" | "isComplete"
>;

export type ItemList = (ImgItem | VideoItem | MemoItem | TodoItem)[];
export type Item = ImgItem | VideoItem | MemoItem | TodoItem;
export let itemList: ItemList = [
  {
    id: uuid(),
    url: "https://res.cloudinary.com/deogv2vod/image/upload/v1687974472/Motion/E6yR7GLVkAUxia7_1_okimg6.png",
    type: "img",
    date: new Date(),
    title: "라이언 춘식이 사랑 ",
    description:
      "라이언과 춘식이의 사랑을 탐구해보자 라이언은 왜  춘식이를 데려왔을까 춘식이는 왜 이렇게 귀여운데  홀로 버려져있었을까 너무 미스테리하다. 너무너무 미스테리한일이다 ",
    tag: [],
  },
  {
    id: uuid(),
    url: "https://res.cloudinary.com/deogv2vod/image/upload/v1687874191/Motion/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-03-16_004616_wvnzbj.png",
    type: "img",
    date: new Date(),
    title: "ddd",
    description: "dd",
    tag: [],
  },
  {
    id: uuid(),
    type: "memo",
    date: new Date(),
    title: "용복아 나도 팬미팅 보고싶다.",
    content:
      "아아아아아아아 헛소리 헛소리 헛소리 아아아아아아아 헛소리 헛소리 헛소리 아아아아아아아 헛소리 헛소리 헛소리 아아아아아아아 헛소리 헛소리 헛소리 아아아아아아아 헛소리 헛소리 헛소리 ",
    tag: [],
  },
  {
    id: uuid(),
    type: "todo",
    date: new Date(),
    title: "용복아 나도 팬미팅 보고싶다.",
    content:
      "아아아아아아아 헛소리 헛소리 헛소리 아아아아아아아 헛소리 헛소리 헛소리 아아아아아아아 헛소리 헛소리 헛소리 아아아아아아아 헛소리 헛소리 헛소리 아아아아아아아 헛소리 헛소리 헛소리 ",
    isComplete: false,
    tag: [],
  },
  // {
  //   id: "sdsdf",
  //   type: "video",
  //   date: new Date(),
  //   title: "용복아 나도 팬미팅 보고싶다.",
  //   url: "https://www.youtube.com/embed/tJdtYD-fxiU",
  //   description:
  //     "라이언과 춘식이의 사랑을 탐구해보자 라이언은 왜  춘식이를 데려왔을까 춘식이는 왜 이렇게 귀여운데  홀로 버려져있었을까 너무 미스테리하다. 너무너무 미스테리한일이다",
  //   tag: [],
  // },
  // {
  //   id: "sdsdf",
  //   type: "video",
  //   date: new Date(),
  //   title: "용복아 나도 팬미팅 보고싶다.",
  //   url: "https://www.youtube.com/embed/tJdtYD-fxiU",
  //   description:
  //     "라이언과 춘식이의 사랑을 탐구해보자 라이언은 왜  춘식이를 데려왔을까 춘식이는 왜 이렇게 귀여운데  홀로 버려져있었을까 너무 미스테리하다. 너무너무 미스테리한일이다",
  //   tag: [],
  // },
];
export default class ItemRepogitory {
  constructor() {}
  addItem(item: Item) {
    itemList.push(item);
  }
  removeItem(id: string) {
    itemList = itemList.filter((item) => id !== item.id);
  }
}
