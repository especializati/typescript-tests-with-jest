import Product from "../../products/product";

export interface CartProtocol {
  addItem(item: Product): void;
  removeItem(item: Product): void;
  get items(): readonly Product[];
  total(): number;
  isEmpty(): boolean;
  clear(): void;
}

export interface CartProtocol2<T> {
  addItem(item: Product): void;
  removeItem(item: Product): void;
  get items(): readonly T[];
  total(): number;
  isEmpty(): boolean;
  clear(): void;
}
