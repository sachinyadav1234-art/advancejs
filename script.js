// ***** Arrow Function **** //


// Spread OPERATOR

//  let spread =["so", "much" ,"fun"];
//  let message1 =["Javascript" , "is" , spread, ];
//  let message =["Javascript" , "is" , ...spread, ];
//  console.log(message1);
//  console.log(message);


// let spread =["so", "much" ,"fun"];
//  let message1 =["Javascript" , "is" , spread, "and" , "very" ,"powerful"];
//  let message2 =["Javascript" , "is" , ...spread, "and" , "very" ,"powerful"];
//  console.log(message1);
// console.log(message2);

 
// function addTwonum(x,y) {
//     console.log(x+y);
    
// }
// // let arr = [5,9];
// // addTwonum(...arr);







// function addFournum(x,y,z,a) {
//     console.log(x+y+z+a
//     );
    
// }
// let arr1 = [5,9];
// let arr2 = [3,1];

// addFournum(...arr1 , ...arr2);

//* REST PARAMETER */

// function and defination 

// function someFunction(param1 ,...param2) {
//     console.log(param1,param2);
    
// }
// someFunction("hi" , "there" ,"how are you");


// function addTwonum(x,y) {
//     console.log(x+y);
    
// }

// let result = addTwonum(4,5);
// console.log(result);


// arrow function se add two number
//  let addTwonum = (x,y) => .console.log(x+y);
//  ;
// // addTwonum(3,5);


// // find output 
// let resultArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwonum(i,2*i);
//     resultArr.push(result);
// }

// console.log(resultArr);

// *** Returing array function /// 

// let addTwonum = (x,y) => x+y;
// // addTwonum(3,5);


// // find output 
// let resultArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwonum(i,2*i);
//     resultArr.push(result);
// }

// console.log(resultArr);

//        variable scope in function

// function testavailability(x){
//     console.log("available here",x);
// }
// testavailability("hi");
// console.log(" not available here", x);


// function testavailability(){
//     let y = "local variable";
//     console.log("available here",y);

// }
// testavailability();
// console.log("not available here", y);


// function testavailability(){
//     let y = "i'll return";
//     console.log("available here",y);
//     return y;
// }
// let z = testavailability();
// console.log("outside the function:", z);
// console.log("not available here", y);



//let vs var

// function doingstuff(){
//     if(true){
//         var x = "local";
//     }
//     console.log(x);
// }
// doingstuff();


// function doingstuff(){
//     if(true){
//         console.log(x);
//         let x = "local";
//     }
   
// }
// doingstuff();



//constant scope

// function doingstuff(){
//     if(true){
//         console.log(x);
//         const x = "local";
//     }
   
// }
// doingstuff();



//global variable

// let x = "global";
// function doingstuff(){
//     let x = "local";
//     console.log(x);
// }
// doingstuff();
// console.log(x);

// let x = "global";
// function doingstuff(x){
//     console.log(x);
// }
// doingstuff("param");

// function confusereader(){
//     x = "guess my scope...";
//     console.log("inside the function", x);
// }
// confusereade();
// console.log("outside the function", x);



//immediately invoked a function

// (function () {
//     console.log("IIFE");
// })();



// (() =>{
//     console.log("run right away");

// })();

//recursive function
// function getrecursive(nr){
//     console.log(nr);
//     if (nr>0){
//         getrecursive(--nr);
//     }
// }
// getrecursive(3);

 //the performance of recursion is slightly wrose than the performance of regular iteraction 
   


 //nested function
 //anonymous function
 //like passing in function as parameter . this concept add another abstract layer to the coding
 //function callback
 let functionvariable = function (){
    console.log("not so secret though");
 }
 function doflexiblestuff(executestuff){
    executestuff();
    console.log("inside stuff");
 } 
