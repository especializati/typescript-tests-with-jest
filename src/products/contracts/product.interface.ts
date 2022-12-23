import Product from "../product";

export default interface ProductRepositoryInterface {
  findAll(): Product[];
  save(name: string, price: number): Product;
}
