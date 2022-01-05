const multBy2 = (v) => v * 2

describe('test if multiply by 2', () => {
  it('test if multBy2 multiply 10 to 20 ', () => {
    const result = multBy2(10)
    expect(result).toBe(20)
  })

  it('test if multBy2 multiply 20 to 40 ', () => {
    const result = multBy2(20)
    expect(result).toBe(40)
  })
})
