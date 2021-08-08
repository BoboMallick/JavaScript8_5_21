// var i = 0
// while(i < 10){
//     console.log('Keya Mallick')
//     i++
// }





var isRan = true

while(isRan){
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand === 9){
        console.log('Winner')
        isRan = false
    }
    else{
        console.log('You have got ' + rand )
    }
}