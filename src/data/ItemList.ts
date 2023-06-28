export type ItemType = {
  id: string;
  url: string;
  type: string;
  title: string;
  description: string;
  tag: string[];
  content: string;
  isComplete: boolean;
};

type ImgItem = Pick<
  ItemType,
  "id" | "url" | "type" | "title" | "description" | "tag"
>;
type VideoItem = Pick<
  ItemType,
  "id" | "url" | "type" | "title" | "description" | "tag"
>;
type MemoItem = Pick<ItemType, "id" | "type" | "title" | "content" | "tag">;
type TodoItem = Pick<
  ItemType,
  "id" | "title" | "content" | "type" | "tag" | "isComplete"
>;

type ItemList = (ImgItem | VideoItem | MemoItem | TodoItem)[];
type Item = ImgItem | VideoItem | MemoItem | TodoItem;
const itemList: ItemList = [
  {
    id: "11",
    url: "https://res.cloudinary.com/deogv2vod/image/upload/v1687874191/Motion/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-03-16_004616_wvnzbj.png",
    type: "img",
    title: "ddd",
    description: "dd",
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
];
export default class ItemRepogitory {
  addItem() {
    itemList.push();
  }
  removeItem(id: string) {
    itemList.filter((item) => id !== item.id);
  }
}