// // 1.tables:

// for(let i =1; i<=10 ; i++){
//     console.log("2 *",i,"=",i*2);
// }

// //2. print one to 100, 10 multiples should print "this is 10"

// for(let i=1 ; i<=100 ; i++){
//   if(i %10 === 0){
//     console.log("this number is",i);
//   }else{
//     console.log(i);
//   }
// }

// 3. largest no in the array
// let numbers = [12, 45, 7, 89, 34, 67];
// let max = numbers[0];
// for(let i=0 ; i<= numbers.length-1; i++){

//     if( numbers[i] > max){
//        max = numbers[i];

//     }
// }console.log(max);


// 3. secondLargest no in the array

// let numbers = [12, 45, 7, 89, 34];
// let largestNum = numbers[0];
// let secondLargestNum =0;

// for(let i=0; i<=numbers.length-1 ;i++){
//     if(largestNum < numbers[i]){
//       secondLargestNum =largestNum;

// //       largestNum = numbers[i];
// //       console.log(largestNum);
// //     }

// //     if(numbers[i]< largestNum && numbers[i] > secondLargestNum ){

// //       secondLargestNum = numbers[i];
//     }
// }

// console.log("LargestNum",largestNum);

// console.log("secondLargestNum",secondLargestNum);

//  console.log(secondLargestNum);
//  console.log(largestNum);

// 4. Prime number

// let num = 17;
// let foundDivisor = false;

// for(let i=2; i < num/2 ; i++){
//     if(num %i === 0){
//         foundDivisor = true;
//         break;

// }
// } if(foundDivisor === false){
//    console.log("  Prime number");
// }else if(foundDivisor === true ){
//     console.log("Not a Prime number");
// }











// let number =17;
// let divisorFound =false;

// for(let i =2 ; i< number/2; i++){
//     if(number % i === 0){
//         divisorFound = true;
//         break;
//     }
// }
//  if(divisorFound === false){
//     console.log(number," is a Prime number");
//  }else if(divisorFound === true){
//     console.log(number," is not a prime number");
//  }


























//  let num = 1;
//  let divisible = false;
//   for(let i =2 ; i < num ; i++){
//     if(num % i === 0){
//         divisible =true;
//         break;

//     }
//  } 
//  if(divisible === true){
//     console.log(num,"Is not a Prime number");
// }else if(divisible === false){
//     console.log(num,"Is a Prime number");
// }


// let number = 1;
// let divisorFound = false;

// if (number <= 1) { divisorFound = true; }
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0 ) {
//             divisorFound = true;
//             break;
//         }
//     }


// if (divisorFound === true) {
//     console.log(number, "is not a Prime number");
// } else {
//     console.log(number, " is a Prime number");
// }

//................. Prime Numbers from 1 to 100 ..................
// let divisorFound = false;
// for (let num = 1; num <= 100; num++) {
//     let divisorFound = false;

//     if (num <= 1) { divisorFound = true; }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             divisorFound = true;
//             break;
//         }
//     } if (divisorFound === false) {
//         console.log(num, " is a Prime number");
//     }




// }

// Factorial

// let num =4;
// let result = 1;
// for(let i=num ; i >=1; i--){
//     result *= i;
// }
// console.log(result,"is factorial of", num);




// let num =5;
// let result=1;

// for(let i =1; i <= num; i++){
//     result *= i;
// }console.log(result,"is Factorial of",num);