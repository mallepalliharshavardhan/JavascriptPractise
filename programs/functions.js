// // function add(a, b){

// //     return a + b;
// // }
// // let result = add(2 ,9);
// // console.log(result);
// //..................................................................



// // //----------------------------------------------------------------

// // function sub(a,b){
// //     return a - b ;

// // }
// // let resultSub = sub(14,4);
// // console.log(resultSub);

// // //-------------------------------------------------------------------------

// // function sqr(a ,b){
// //     return a ** b;

// // }
// // let resultSqr = sqr(2,2);
// // console.log("2**2 ->",resultSqr);  

// // //----------------------------------------------------------------------------


// // function age(thisYear){
// //     return thisYear + 1;
// // }
// // let nextYear = age(26);
// // console.log("age next year ->",nextYear);

// // //----------------------------------------------------------------------------

// // function numbertype(a){

// //     if(a > 0){
// //         console.log("Positive num");
// //     }
// //     else{
// //         console.log("Negative num");
// //     }
// //     return a ;
// // }

// // numbertype(456);
// // numbertype(-456);


// // //------------------------------------------------------------------------------

// // integerType(4);


// // function integerType(i){
// //     if(i % 2 === 0){
// //         console.log("This is a Even num");
// //     }
// //     else if( i % 2 !== 0){
// //         console.log("This is an Odd num");
// //     }

// //     return i;
// // }

// // integerType(450);
// // integerType(45);

// // //------------------------------------------------------------------

// // function voteEligible(a){
// //     if(a >= 18){
// //         console.log("Eligible to vote");
// //     }
// //     else{
// //         console.log("Ineligible to vote");
// //     }
// // }
// // voteEligible(12);
// // voteEligible(52);


// // //---------------------------------------------------------------------

// // function examResults(a){
// //     if(a >= 35){
// //         console.log("Subject Passed");
// //     }
// //     else{
// //         console.log("Subject failed");
// //     }
// // }

// // examResults(32);
// // examResults(74);

// // //------------------------------------------------------------------------

// // function greaternum(a,b){
// //     if (a > b){
// //         console.log(a,"greater than", b);
// //     }
// //     else{ā
// //         console.log(a,"less than", b);
// //     }
// // }

// // greaternum(10,7);
// // greaternum(10,114);

// // //--------------------------------------------------------------------------

// // function lock(a){
// //     if(a === 'Password'){
// //         return 'passowrd Unlocked';
// //     }
// //     else{
// //         return'Password Incorrect';
// //     }
// // }

// // let result1 = lock('key');
// // let result2 = lock('Password');

// // console.log(result1);
// // console.log(result2);

// // //---------------------------------------------------------------------------

// // function examGrades(marks){
// //     if(marks < 35 ){
// //     return "Grade: F";
// // }else if(marks >= 35 && marks < 45 ){
// //     return "Grade: P";
// // }else if (marks >= 45 && marks < 65) {
// //     return "Grade: C";
// // }else if (marks >=65 && marks < 75) {
// //     return "Grade: B";
// // }else if (marks >= 75 && marks <= 100 ) {
// //     return "Grade: A";
// // }

// // }
// // let marks1 = examGrades(32);
// // console.log(examGrades(32));

// // let marks4 = examGrades(42);
// // console.log(examGrades(42));

// // let marks2 = examGrades(72);
// // console.log(examGrades(74));

// // let marks3 = examGrades(92);
// // console.log(examGrades(92));

// // //------------------------------------------------------------------------------


// // function ageCat(age) {

// //     if( age < 12){
// //     return "Child";

// // } 
// // else if (age > 12 && age < 19){
// //     return "Teenager";
// // }
// // else if( age > 20 && age < 30){
// //     return "Youth";

// // }
// // else if( age > 30 && age < 55){
// //     return "Middle aged";
// // }
// // else if ( age > 55 ){
// //     return "Senior citizen";
// // }
// // }


// // let Child = ageCat(11);
// // console.log(Child);

// // let teenager = ageCat(17);
// // console.log(teenager);

// // let youth = ageCat(24);
// // console.log(youth);

// // //------------------------------------------------------------------

// // function temp(temp){


// // if( temp < 0){
// //     return "Freezing temperature";
// // }
// // if ( temp > 0 && temp < 20){
// //     return "Cold temperature";
// // }
// // else if ( temp >= 20 && temp < 28){
// //     return "Room temperature";
// // }
// // else if ( temp > 28 ){
// //     return "Hot temperature";
// // }
// // }

// // let temp1 = temp(-1);
// // console.log(temp1);


// // let temp2 = temp(10);
// // console.log(temp2);


// // let temp3 = temp(20);
// // console.log(temp3);

// // let temp4 = temp(31);
// // console.log(temp4);

// //>> function expression
// // let add =function(a,d) {

// //     return (a+d) ;
// // }
// // console.log("(a+d) :",add(1,8));

// //..................................................................


// //>> nameless function

// // const adde = (a,s) => {
// //     return a-s;
// // }

// // console.log("(a-s) :",adde(15,5));

// //..................................................................

// // > Arrow Function
// // const easy =(a,s) => a*s;

// // const div = (d) => {
// //     if(d %3 === 0){
// //         return "3 divisible";
// //     }
// //     else{
// //         return " not 3 divisble";
// //     }
// // }

// // console.log(div(9));

// // console.log("(a*s) :",easy(2,10));

// //..................................................................
// //>> higher order functions

// // function greet(name){
// //     return "Hello " + name ;
// // }

// // function user(receivingFunction){
// //     return receivingFunction("Admin");
// // }
// // console.log(user(greet));



// // function mul(m){
// //     return "sqr :" + (m*m); 
// // }

// // function input(giveninput){
// //     return giveninput(5);
// // }

// // console.log(input(mul));

// // Function for prime Number

// // let primeNum = (num) => {

// //     if (num < 2) return false;

// //     for (let i = 2 ; i <= num/2 ; i++){
// //         if (num % i === 0 ) return false;

// //     }
// //     return true;
// // }

// // console.log(primeNum(19));

// // reverseStr= (str) => {
// //     let result = "";

// //     for (let i =str.length-1 ; i >= 0 ; i++){
// //         result += str[i];
// //     }
// //     return result;
// // }
// // console.log(reverseStr("Hello","hi"));



// function countVowels(str) {
//   const vowels = "aeiou";
//   let count = 0;
//   // Loop through each character
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//    return count;
// }
// console.log(countVowels('aeious'));
// const numbers = [5, 10, 15, 20];

// let sum = 0; 
// for (let i = 0; i <= numbers.length - 1; i++) {
//      sum += numbers[i]; }

//      console.log(sum);

// let i;
//  for(i <= numbers.length-1 ; i =0 ; i-- ) { 
//     return numbers; }     

//     for ( i=1; i <= numbers.length-1 ;i++){
// if(numbers[i] % 2 === 1){ console.log(numbers[i]) }
//     }

//    const numbers = [4, 7, 10, 13, 16, 21];

//    let count= 0;
//    for (let i=0 ; i <= numbers.length-1 ; i++){
//     if( numbers[i] > 10 ){
//         count++ ;
//     }
//    }
//    console.log("count of numbers greater than 10 is",count);


//Q5 — Sum of even numbers

//   const numbers = [3, 8, 11, 14, 20, 25];
// let sumOfEven =0;
//   for (let i =0; i<= numbers.length-1; i++){
//     if(numbers[i] % 2=== 0){

//         sumOfEven += numbers[i] ;
//     }
//   }
//   console.log(sumOfEven);

//: Reverse an array

// const numbers = [10, 20, 30, 40];
// let newArray = [];
// for (let  i = numbers.length-1 ; i >= 0 ; i-- ){
//     newArray.push(numbers[i]);
// }

// console.log(newArray);

// Reverse Araay  Function

// let newArray = [];
// let reverseArray = (numbers) => {
//     for ( let i = numbers.length-1 ; i>=0 ; i--){
//      newArray.push(numbers[i]);
//     }
//     return newArray ; 
// }

// console.log(reverseArray([3,8,12,7,20]));


// prime number

let isPrime = (num) => {
  if (num < 2) {
    return "Not a Prime";

  }
  else {
    for (i = 2; i <= num; i++) {
      if (num % i === 0) {
        return "not a prime num";
      }
      else {
        return "Prime num";
      }
    }
  }


}

console.log(isPrime(7));