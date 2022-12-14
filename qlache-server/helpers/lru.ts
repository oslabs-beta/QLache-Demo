import { DoublyLinkedListVal } from "./doublyLL.js";

export class LRU {
  list: DoublyLinkedListVal;
  cache: object;
  capacity: number;

  constructor(capacity: number) {
    this.list = new DoublyLinkedListVal();
    this.capacity = capacity;
    this.cache = {};
  }

  // returns the value if it exists or undefined and depending on which return, call other methods
  get(key: string): object | undefined {
    if (this.cache.hasOwnProperty(key)) {
      const value = this.cache[key].value;
      this.list.findAndDelete(this.cache[key]);
      this.cache[key] = this.list.add(key, value);
      
      return value;
    } else return;
  }

  post(key: string, value: any): void {
    if (this.list.length === this.capacity) {
      const deletedVal = this.list.deleteFromTail();
      //console.log(Object.keys(this.cache));
      if (deletedVal) delete this.cache[deletedVal.key];
    }
    const newNode = this.list.add(key, value);
    this.cache[key] = newNode;
  }
}