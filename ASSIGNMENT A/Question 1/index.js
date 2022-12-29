const obj = {
    foo: { num: 2 },
    bar: { num: -1 },
    buz: { num: null },
    qux: {},
    quux: null,
};

// array
// [1,2,3,4,5]

// object
// {}

console.log('obj.length', obj.length);

console.log(obj);

const result = [];

// object key loop
for (const key in obj) {
    const element = obj[key];
    console.log('element', element);

    // null.num
    if (element && element.num) {
        result.push(element);
    }
}

// []
for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);
}
console.log('result', result);
