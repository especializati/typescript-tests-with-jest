import { add, multiply } from '../src/calc'

describe("Test CALC - add", () => {
  it("should return 15 for add(10,5)", () => {
    expect(add(10,5)).toBe(15)
  })
  it("should return 5 for add(2,3)", () => {
    expect(add(2,3)).toBe(5)
  })
})

describe("Test CALC - multiply", () => {
  it("should return 20 for multiply(4, 5)", () => {
    expect(multiply(4, 5)).toBe(20)
  })
  it("should return 50 for multiply(5, 10)", () => {
    expect(multiply(5, 10)).toBe(50)
  })
})
