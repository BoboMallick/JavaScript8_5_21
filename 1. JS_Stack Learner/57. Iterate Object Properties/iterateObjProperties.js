let obj = {
    a : 30,
    b : 60,
    c : 90
}
// console.log('a' in obj)
// console.log('x' in obj)

for (let i in obj) {
    // console.log(i)
    console.log(i + ': ' + obj[i])
}