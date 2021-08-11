// Multidimensional Array 

let array1 = 
[
    [93, 96, 90, 81, 90],
    [84, 69, 90, 93, 72],
    [80, 73, 60, 77, 90]
]
// console.log(array1[0] [0])

// for(let i = 0; i < array1.length; i++){
//     console.log(array1[i])
// }

for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array1[i].length; j++){
        console.log('Element ' + i + ': ' + array1[i][j])
    }
}