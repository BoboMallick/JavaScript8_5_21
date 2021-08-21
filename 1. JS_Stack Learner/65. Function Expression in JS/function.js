let addition = function(a, b){
    return a + b;
}
addition(3, 9)

setTimeout(function(){
    console.log('Hi')
}, 5000)

var another = addition
console.log(another)