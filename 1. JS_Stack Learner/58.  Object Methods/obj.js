let obj = {
    a: 3,
    b: 6,
    c: 9
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

let obj2 = Object.assign({}, obj)
obj2.c = 99
console.log(obj)
console.log(obj2)