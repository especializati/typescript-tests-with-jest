import Product from "../products/product"
import Cart2 from "./cart2"

const makeCart = (): Cart2 => {
  return new Cart2
}

const makeProduct = (name: string, price: number): Product => {
  return new Product(name, price)
}

const makeSut = () => {
  const sut = makeCart()

  return {
    sut
  }
}

describe('Cart2', () => {
  it('should empty cart', () => {
    const { sut } = makeSut()
    expect(sut.items.length).toBe(0)
  })

  it('should has one item in cart', () => {
    const { sut } = makeSut()
    expect(sut.items.length).toBe(0)
    sut.addItem(makeProduct('prod1', 10))
    expect(sut.items.length).toBe(1)
  })

  it('should has two items in cart', () => {
    const { sut } = makeSut()
    sut.addItem(makeProduct('prod1', 10))
    sut.addItem(makeProduct('prod2', 10))
    expect(sut.items.length).toBe(2)
  })

  it('should has two items in cart, and add same product one', () => {
    const { sut } = makeSut()
    const prod1 = makeProduct('prod1', 10)
    const prod2 = makeProduct('prod2', 10)
    sut.addItem(prod1)
    sut.addItem(prod2)
    expect(sut.items.length).toBe(2)
    sut.addItem(prod1)
    expect(sut.items.length).toBe(2)
    expect(sut.items[0].product).toBe(prod1)
    expect(sut.items[1].product).toBe(prod2)
  })

  it('should have one item if add two and remove one', () => {
    const { sut } = makeSut()
    const product1 = makeProduct('prod1', 10)
    sut.addItem(product1)
    sut.addItem(makeProduct('prod2', 10))
    expect(sut.items.length).toBe(2)
    sut.removeItem(product1)
    expect(sut.items.length).toBe(1)
  })

  it('should have one item if add two and remove one (2)', () => {
    const { sut } = makeSut()
    const product1 = makeProduct('prod1', 10)
    sut.addItem(product1)
    sut.addItem(product1)
    sut.addItem(makeProduct('prod2', 10))
    expect(sut.items.length).toBe(2)
    sut.removeItem(product1)
    expect(sut.items.length).toBe(1)
  })

  it('should empty if add two and remove two', () => {
    const { sut } = makeSut()
    const product1 = makeProduct('prod1', 10)
    const product2 = makeProduct('prod2', 10)
    sut.addItem(product1)
    sut.addItem(product2)
    sut.addItem(product2)
    sut.addItem(product2)
    sut.addItem(product2)
    expect(sut.items.length).toBe(2)
    sut.removeItem(product1)
    sut.removeItem(product2)
    expect(sut.isEmpty).toBeTruthy()
  })

  it('should total equals 80, with two products many times', () => {
    const { sut } = makeSut()
    const prod1 = makeProduct('prod1', 20)
    const prod2 = makeProduct('prod2', 10)
    sut.addItem(prod1)
    sut.addItem(prod1)
    sut.addItem(prod1)
    sut.addItem(prod2)
    sut.addItem(prod2)
    expect(sut.total()).toBe(80)
  })

  it('should total equals 0, with empty cart', () => {
    const { sut } = makeSut()
    expect(sut.total()).toBe(0)
  })

  it('should clear cart', () => {
    const { sut } = makeSut()
    sut.addItem(makeProduct('prod1', 10))
    sut.addItem(makeProduct('prod2', 10))
    sut.clear()
    expect(sut.isEmpty()).toBeTruthy()
  })
})
