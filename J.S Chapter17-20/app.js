// 01. Declare and initialize an empty multidimensional Array.
// (Array of arrays)


// var multiArray = [[[],[],[],[]]];

// 02. Declare and initinalize a multidimensionl Array
// representing the following matrix:

multidimensionlArray = [[0,1,2,3,],[1,0,1,2],[2,1,0,1]];
for (var i = 0; i<multidimensionlArray.langht;i++){
    document.write(multidimensionlArray[i],"<br>")
    document.write(`--------***--------<br>`);
}
// 03.  Write a program to print numeric counting from 1 to 10.

for(var i = 1; i<=10;i++){
    document.write(i , "<br>")
}
document.write(`--------***-------- <br>`);

// 04.  write a program to print multiplication table of any 
// number using for loop.Table number & length should be taken as an input from User .

var tableNumber = +prompt("enter a number to shows its table");
var langht = +prompt("now enter langht");
document.write("Muliplacation table of ${tableNumber} <br>");
document.write('langht of table is ${langht} <br>');

for (var i = 1;i<=langht;i++){
    document.write('${tableNumber} x ${i} = ${tableNumber*i} <br>');
}

document.write('--------***-------- <br>');

// 05. Write a program to print items of the following array using for loop:

// var fruits = ["apple","banana","mango","orange","charry"]

// for (var i = 1; i<fruits.length;i++){
//     document.write(fruits,[i] ="<br>");
// }"<br><br>"

// for(var i = 1; i<fruits.length;i++){
//     document.write(`Element at index ${i} is ${fruits[i]}<br>`)
// }
// document.write(`--------***--------<br>`);

// 06. Genrate the following series in your browser. see example output.
// a. counting: 1,2,3,4,5,6,7,8,9,10.11,12,
// b. Revers counting: 10,9,8,7,6,5,4,3,2,1,
// c. Even: 0,2,4,6,8,10,12,14,16,18,20,
// d. Odd: 1,,3,,5,,7,,9,11,13,15,17,19,
// e. Series : 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k,

document.write("Counting: <br><br>")
for(var i = 1; i <= 15; i++){
    document.write(i , " ");
}document.write(" <br><br>");


document.write("Reverse counting: <br><br>")
for(i = 10; i>=1;i--){
    document.write(i, " ");
}document.write(" <br><br>")


document.write("Even Numbers: <br><br>")
for(i = 0; i<=20;i= i=i+2){
  document.write(i, " ");
}document.write(" <br><br>");


document.write("Odd Numbers: <br><br>")
for(i = 0; i<=20;i= i=i+2){
  document.write(i, " ");
}document.write(" <br><br>");


document.write("Series: <br><br>")
for(i = 0; i<=20;i= i=i+2){
  document.write(i, "k" ," ");
}document.write(" <br><br>");
document.write(`--------***--------<br>`);

// // 07. you have an Array
// A = ["cake", "chips", "piza", "cock", "patties",]
// // Write a program to enable "search by user input" in an Array
// // After sesrching, program the user wether the given item is found in the lish or Notification,:


var bakrryArray =  ["cake", "chips", "piza", "cock", "patties"]
var userInput = prompt("welcom to abc backery.what do you want to oder?");
var flag = false;
let serach=userInput.toLowrCase();
for(var i = 0;i<bakrryArray.length;i++){
  if(bakrryArray[i]===serach){
    flag = true;
    document.write(`${userInput} is available at index ${i} in our bakrry`)
    break;

  }
}
if(flag===false){
  document.write(`sorry ${userInput}is not available at the moment`);
}
document.write(`--------***--------<br>`);

// 08. write a program to identify the length number in the geven Array.
// A = [24,53,78,91,12].

var array = [24,53,78,91,12];
var flag = array[0];
for(var i = 0;i<array.length;i++){
  if(array[i]>flag){
    flag=array[i]
  }
}
document.write(`Array items are ${array}<br>`);
document.write(`largest num is${flag} <br><br>`);
document.write(`--------***--------<br>`);


// 09. write a prpgram to identify the smallest number in the given array.
// A = [24,53,78,91,12]


var array = [24,53,78,91,12];
var flag = array[0];
for(var i = 0;i>array.length;i++){
  if(array[i]>flag){
    flag=array[i]
  }
}

document.write(`Array item are ${array}<br>`);
document.write(`smallest num is ${flag}<br><br>`);
document.write(`--------***--------<br>`);


// 10.Write a program to print multiples of 5 ranging 1 to 100.

for(var i = 5;i<=100; i =i+5){
  document.write(i," ", "<br>")
};
document.write(`--------***--------<br>`);