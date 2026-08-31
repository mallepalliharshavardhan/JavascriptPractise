//..........Reverse an array using for loop.................



// for (let i =0 ; i <= array.length-1 ; i++){
//     console.log(i,":",array[i]);
// }

// for (let i = array.length-1 ; i >= 0 ; i--){
//     console.log("Reverse array",i,":",array[i]);
// }

//>> 1.Write a for loop that prints the numbers 1 to 20, but skips multiples of 3.


// for (i=1 ; i<= 20 ; i++){

//     if( i % 3 !== 0){
//         console.log(i);
//     }
// }

//>> 
// const arr = [1,2,3,4,5,6,7,8];


//  for (  i = arr.length-1; i >= 0 ; i-- ){
//    console.log(arr[i]); 


// }

// // Q1
// for(let i=1; i<=10 ; i++){
// console.log(i);
// }

// // Q2
// for(let i=10; i>=1 ; i--){
// console.log(i);
// } 

// // Q3

// for(let i=1; i<=20 ; i++){
// if(i % 2 === 0){console.log(i);}
// }

// // Q4

// for(let i=1; i<=20 ; i++){
// if(i % 2 !== 0){console.log(i);}
// }

// // Q5  

// for(let i=5; i<=50 ; i += 5){
//   console.log(i);
// }

// //Q6

// for(let i=20 ; i> 4 ; i-= 3){
//  console.log(i);
// }


// Q7 print num form 1 to 10, create a var sum += i
// let sum=0 ;
// for(let i =1 ; i< 11 ; i++){
//   sum +=  i ;
//   console.log(sum);
// }

//Q8 Count how many even numbers exist between 1 and 50.
// let count =0;
// for(let i=1 ; i<=50 ;i++){
//   if(i%2 === 0){
//     count ++ ;

//   } 
// }console.log(count);

// Find the largest number in an array.  


// let max = numbers[0];

// for(let i = 0; i<=numbers.length-1 ; i++){
//   if(numbers[i]>max){ 
//     max = numbers[i];
//   }
// }

// console.log(max);

// // Find the Smallest number in an array.
// let max = numbers[0];
// for(let i= 0 ;i<=numbers.length-1 ; i++){
//   if(numbers[i]< max){
//     max = numbers[i];
//   }
// }
// console.log(max);


// find the largest/longest word in a sentence.

// const sentence = "I am learning JavaScript programming LanguageOfWebsite";
// let word = sentence.split(" ");
// let longestWord = "";

// for (let i = 0; i <= word.length - 1; i++) {
//   if (word[i].length > longestWord.length ){
//       longestWord = word[i]; 
//   }
// }
// console.log(longestWord);

// const sentence = "I am learning JavaScript programming LanguageOfWebsite";

// et words = sentence.split(" ");
// let biggestWord = "";

// for(let i=0 ; i <= words.length-1 ; i++){
//   if( words[i].length > biggestWord.length ){
//      biggestWord = words[i] ;
//   }
// }
// console.log(biggestWord);


// const sentence = "I am learning JavaScript programming";
// let words = sentence.split(" ");
// let lengthiestWord = "";

// for (let i = 0; i <= words.length - 1; i++) {
//   if (words[i].length > lengthiestWord.length) {
//     lengthiestWord = words[i];
//   }
// } console.log(lengthiestWord);

// numbers.forEach(element => {
//   console.log(element);
//   setTimeout(() => {
//    return element * 2;
//   })

// }

// ); 8

// const numbers = [1, 2, 3, 4];

// let result = numbers.map((element)=> {
//   return element *2 ;
// } ); 
// console.log(result);

// const prices = [10, 20, 30, 40];

// let updatedPrices = prices.map((element)=>{
//   return element+5 ;
// }); console.log(updatedPrices);

// const numbers = [2, 3, 4, 5];

// let res = numbers.map((elements)=>{
  
//   return elements * elements;
// });  console.log(res);

// const users = [
//     { name: "Rahul", age: 22 },
//     { name: "Priya", age: 24 },
//     { name: "Arjun", age: 21 }
// ];

// let res = users.map((element)=> {
//   return element.name;
// }) ; console.log(res)