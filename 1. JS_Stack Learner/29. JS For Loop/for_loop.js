//  for(var i = 0(initializer); i < 100 (condition); i++ (increment)){

//     console.log('Keya Mallick')
// }




// for (var i = 10; i < 10; i++){
//     console.log((i) + ' Keya Mallick')
// }


// for (var i = 100; i < 1000; i+= 100){
//     console.log((i) + ' Keya Mallick')
// }




// for (var i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }





var sum = 0;

for(var i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(sum + '+' + i  + '=' + (sum + i));
        sum += i
    }
}

console.log('result: ' + sum)