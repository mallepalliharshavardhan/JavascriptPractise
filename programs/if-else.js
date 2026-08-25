
// ................divisble by 2,3,5 ..............

// let num = 30;
// if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) 
// {
//     if(num % 2 == 0 ){
//         console.log("2 is the dividor of", num);

//     }
//      if (num % 3 == 0) {
//             console.log("3 is the dividor of", num);
//         } if (num % 5 == 0) {
//             console.log("5 is the dividor of", num);

//         } 
//     }
//     else {
//         console.log(num, "is not divisible by 2,3 and 5.");
//     }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...

// ........ Grades for the marks ................

// let marks = 46;

// if(marks >= 40){
//      if(marks >= 90){
//         console.log("Grade A");
//     }
//     else if(marks >= 85){
//         console.log("Grade B");
//     }
//     else if(marks >= 75){
//         console.log("Grade C");
//     }
//     else{
//         console.log('Pass');
//     }

// }
// else{
//     console.log('Fail');
// }

// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// //Write a program to check whether a character is: Uppercase vowel Lowercase vowel Uppercase consonant Lowercase consonant

// let c = 'u'

// if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
//     console.log("Lowercase vowel");
// }

// else if (c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U') {
//     console.log("Uppercase vowel");
// }

// else if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u') {
//     console.log("Lowercase consonant");
// }
// else if (c != 'A' && c != 'E' && c != 'I' && c != 'O' && c != 'U') {
//     console.log("Uppercase consonant");
// }


// // ............ternary operator ...............
// let t = 25;
// t >= 25 ? console.log("t is eligible for elections") : console.log("t is not eligible for elections");

// (t = 25) ? console.log(" can drive") : console.log("can't drive");


const array = [10,102,43,42,94,48,14,75,247];

for (let i =0 ; i <= array.length-1 ; i++){
    console.log("index:",i,"value:", array[i]);
}

for (let i = array.length-1 ; i >= 0 ; i--){
    console.log("index:",i,"value:", array[i]);
}

const fruitsnames = ["banana","dragon", "orange", "grapes", "Apple"];

for (let index in fruitsnames){
    console.log(index,fruitsnames[index]);
}

for (let a in array){
    console.log("index",a,"value:",array[a]);
}
