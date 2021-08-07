var string = '9';
var number = 3;
console.log(string * number);     // auto Implicit conversions for multiple.


console.log(string + number);


console.log(Number(string));     // String to Number convertion.


console.log(Number.parseInt(string));    //string to integer convertion.


console.log(number.toString());     //Number to String convertion.


//We can not convert Infinity to Number but we can convert Infinity to String, Boolean
console.log(Number(Infinity)); 


var x = true;
console.log(x.toString());    //Boolean to String convertion.

console.log(true);


//Falsy values
 0
 null
 undefined
 NaN

 console.log(Boolean(''));

 console.log(Boolean('hgugikhkk'));

 console.log(Boolean(null));

 console.log(Boolean(undefined));

 console.log(Boolean(0));

 console.log(Boolean(369));




//If you want write Hexadecimal Numbers then you need start with "0x" then any number.
 var hex = 0xa;        //Hexadecimal Numbers to Decimal convert.
 console.log(hex);


//  If you want write  Octal Numbers the you need start "0" then any number.
var oct = 036;        // Octal Numbers to Decimal convert.
console.log(oct);