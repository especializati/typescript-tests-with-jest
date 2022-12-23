import Product from "../products/product"
import Cart from "./cart"

describe('Cart', () => {
  it.only('should empty cart', () => {
    const cart = new Cart
    expect(cart.items.length).toBe(0)
  })

  it('should has one item in cart', () => {
    const cart = new Cart
    const prod1 = new Product('prod1', 10)
    cart.addItem(prod1)
  })
})
