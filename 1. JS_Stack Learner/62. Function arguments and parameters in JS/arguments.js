// function add (a, b){
//     let result = a + b
//     console.log(result)
// }
// add(30, 90)
// add(9, 60)





let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6, 7]
let arr3 = [8, 9, 10, 11]

let sum = 0

function sumOfArrays(arr){
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}

sumOfArrays(arr1)
sumOfArrays(arr2)
sumOfArrays(arr3)
