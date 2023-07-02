import ItemRepogitory, { Item } from "@/data/Item";
import { v4 as uuid } from "uuid";

export default class ItemService {
  itemRepository: ItemRepogitory;
  constructor() {
    this.itemRepository = new ItemRepogitory();
  }
  addItem(item: Item) {
    this.itemRepository.addItem({ ...item, id: uuid() });
  }
  removeItem(id: string) {
    this.itemRepository.removeItem(id);
  }
}
