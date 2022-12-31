const obj = {
  foo: { num: 2 },
  bar: { num: -1 },
  buz: { num: null },
  qux: {},
  quux: null,
}

const result = []

for (const key in obj) {
  const element = obj[key]
  if (element && element.num) {
    result.push(element)
  }
}
