// let numbers = [12, 7, 25, 18, 25, 9, 21];
// let numbers = [12, 25, 18];
// let numbers = [-5, -2, -10, -3];
// let numbers =[-5, -5, -2]

// let largestNum= -Infinity;
// let secondLargestNum = -Infinity ;

// for(let i=0; i<= numbers.length-1 ; i++){
//     if(largestNum < numbers[i]){
//         secondLargestNum = largestNum; 
//         largestNum = numbers[i];


//     }else if(numbers[i] < largestNum && numbers[i] > secondLargestNum){
//         secondLargestNum = numbers[i];
// }
// }console.log(largestNum);
// console.log(secondLargestNum);


//-------------------------------------------------

let text = "aabbcdde";
let text1 = "javascript";
let text2 = "aabbccxxy";


let char = text.split("");
let currentChar = "";
// console.log(char);
for (let i = 0; i <= char.length - 1; i++) {
    currentChar = char[i];
    count = 0;

    for (let j = 0; j <= char.length - 1; j++) {
        if (currentChar === char[j]) {
            count++;
        }

    } if (count === 1) {
        // console.log(currentChar);
        break;
    }

}

//----------------------------------------------------------- Anagram

let text3 = "listen";
let text4 = "silent";

let presentChar = "";

let text3Char = text3.split("");
let text4Char = text4.split("");

let text3Length = text3.length;
let text4Length = text4.length;
if (text3Length === text4Length && text3Char === text4Char) {


    for (let i = 0; i <= text3.length - 1; i++) {
        presentChar = text3Char[i];
        let count = 0;
       
        for(let j=0 ; j<=text3.length-1; j++){
            if(presentChar === text3Char[i]){
                count ++;
            }
        }if (count === 1) {
         console.log(presentChar);
        break;
    }

    }

    




}
