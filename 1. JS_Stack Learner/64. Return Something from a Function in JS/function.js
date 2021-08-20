// Return Something from a Function in JS


// function addAll(){
//     let sum = 0
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }
// let result = addAll(3, 6, 9)
// console.log(result)

function person(name, email){
    return{
        Name: name,
        Email: email
    }
}
let p1 = person('Keya', 'keyamallick551@gmail.com')
console.log(p1)