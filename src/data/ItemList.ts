export type ItemType = {
  id: string;
  url: string;
  type: itemType;
  title: string;
  description: string;
  tag: string[];
  content: string;
  isComplete: boolean;
};

type itemType = "img" | "video" | "memo" | "todo";

export type ImgItem = Pick<
  ItemType,
  "id" | "url" | "type" | "title" | "description" | "tag"
>;
export type VideoItem = Pick<
  ItemType,
  "id" | "url" | "type" | "title" | "description" | "tag"
>;
export type MemoItem = Pick<
  ItemType,
  "id" | "type" | "title" | "content" | "tag"
>;
export type TodoItem = Pick<
  ItemType,
  "id" | "title" | "content" | "type" | "tag" | "isComplete"
>;

export type ItemList = (ImgItem | VideoItem | MemoItem | TodoItem)[];
export type Item = ImgItem | VideoItem | MemoItem | TodoItem;
export const itemList: ItemList = [
  {
    id: "11",
    url: "https://res.cloudinary.com/deogv2vod/image/upload/v1687974472/Motion/E6yR7GLVkAUxia7_1_okimg6.png",
    type: "img",
    title: "라이언 춘식이 사랑 ",
    description:
      "라이언과 춘식이의 사랑을 탐구해보자 라이언은 왜  춘식이를 데려왔을까 춘식이는 왜 이렇게 귀여운데  홀로 버려져있었을까 너무 미스테리하다. 너무너무 미스테리한일이다 ",
    tag: [],
  },
  {
    id: "2",
    url: "https://res.cloudinary.com/deogv2vod/image/upload/v1687874191/Motion/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-03-16_004616_wvnzbj.png",
    type: "img",
    title: "ddd",
    description: "dd",
    tag: [],
  },
  {
    id: "2",
    type: "memo",
    title: "용복아 나도 팬미팅 보고싶다.",
    content:
      "용복아 사랑해 용복이 오늘 뭐하니 용복이 보고싶다 용복이 보고싶다 용복이가 보고싶다 나도 팬미팅 보고싶다.",
    tag: [],
  },
  {
    id: "2",
    type: "todo",
    title: "용복아 나도 팬미팅 보고싶다.",
    content:
      "용복아 사랑해 용복이 오늘 뭐하니 용복이 보고싶다 용복이 보고싶다 용복이가 보고싶다 나도 팬미팅 보고싶다.",
    isComplete: false,
    tag: [],
  },
];
export default class ItemRepogitory {
  addItem() {
    itemList.push();
  }
  removeItem(id: string) {
    itemList.filter((item) => id !== item.id);
  }
}
