// function test (a, b, c){
//     for(var i=0; i < arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }
// test(30, 60, 99)
// test(7, 9, 4)



// function test ( ){
//     for(var i=0; i < arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }
// test(30, 60, 99)
// test(3, 5, 6, 9, 4, 2, 33)
// test (9, 6)

function addAll (){
    let sum = 0
    for(let i=0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum)
}
addAll(5, 7, 10)
addAll(9, 6, 99, 30)