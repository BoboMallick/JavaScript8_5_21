let arr = [22, 33, 44, 6, 7, 8, 9, 11, 55, 99]

let find = 13

let isFound = false

for (let i = 0; i < arr.length; i++){
    if(arr[i] === find){
        console.log('Data found a Index ' + arr[i])
        isFound = true
        break
    }

   
}

if(!isFound){
    console.log('Data not found')
}
