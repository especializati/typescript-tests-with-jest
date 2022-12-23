import Product from "../../products/product";

export interface CartProtocol {
  addItem(item: Product): void;
  removeItem(item: Product): void;
  get items(): readonly Product[];
  total(): number;
  isEmpty(): boolean;
  clear(): void;
}
