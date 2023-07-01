import ItemRepogitory, { Item } from "@/data/Item";

export default class ItemService {
  itemRepository: ItemRepogitory;
  constructor() {
    this.itemRepository = new ItemRepogitory();
  }
  addItem(item: Item) {
    this.itemRepository.addItem(item);
  }
}
