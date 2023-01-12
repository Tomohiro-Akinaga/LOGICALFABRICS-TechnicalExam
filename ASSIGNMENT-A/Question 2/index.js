const array = [{ foo: 1 }, { bar: 2 }, { foo: -2 }, { foo: 3, bar: 4 }]

const result = {}

array.forEach((element) => {
  for (const key in element) {
    const num = element[key]
    if (result[key]) {
      result[key] += num
    } else {
      result[key] = num
    }
  }
})
