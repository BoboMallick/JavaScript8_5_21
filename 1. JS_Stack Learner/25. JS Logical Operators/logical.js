// Logical operators only used When we have two or more Conditions and result comes from both of their participation.

/* ---Logical Operators
     1. && = and operators
     2. || = or operators
     3. ! = not operators----*/ 

/*---- A && B
     if T && T = T
     if T && F = F
     if F && T = F
     if F && F = F -----*/


/*---A || B
     if T || T = T
     if T || F = T
     if F || T = T
     if F || F = F ---*/



var a = 30 
var b = 10 
var c = 60 
var d = 90

if (a > b && c > d){
    console.log("A is greater than B and C is great than D")
}
else{
    console.log("At least one condition is true")
}



if (a > b || c > d){
    console.log("A is greater than B and C is great than D")
}


var check = !(a > b)
console.log(check)