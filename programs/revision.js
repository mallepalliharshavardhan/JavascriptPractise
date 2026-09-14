// Requirement -> Create a new array containing only the names of products whose price is greater than ₹1,000.

const products = [
    { name: "Laptop", price: 70000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

// let ExpensiveProducts = products.filter((ele)=> ele.price > 1000);

// let ExpensiveProductsList =ExpensiveProducts.map((ele)=>ele.name)

// console.log(ExpensiveProductsList);

//Requirement: determine whether "React" exists in skills and print the result.

const skills = ["HTML", "CSS", "JavaScript", "React", "Node"];


//   if(skills.includes("React")){
//       console.log("true");
//     }else{
//        console.log("false"); 
// }
// Requirement:Create a new array containing: ["CSS", "JavaScript", "React"]

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// console.log(technologies.slice(1,4));

// Requirement: modify the original array so that "React" is inserted between "JavaScript" and "Node".
const tech = ["HTML", "CSS", "JavaScript", "Node"];

tech.splice(3, 0, "React");

console.log(tech);

//Requirement: create a new array where every price has an additional ₹100 added to it.

const prices = [500, 1200, 800, 2500, 1500];

let modifiedPrices = prices.map((ele) => ele + 100);

console.log(modifiedPrices);

// Second Largest Number

const numbers = [12, 35, 100, 35, 34, 1];
let largestNum = 0;
let secondLargestNum = Infinity;

for (let i = 0; i <= numbers.length - 1; i++) {
    if (largestNum < numbers[i]) {
        secondLargestNum = largestNum;
        largestNum = numbers[i];

    } else if (numbers[i] < largestNum && numbers[i] > secondLargestNum) {
        secondLargestNum = numbers[i];
    }

}
console.log(secondLargestNum);

// // Prime number 





// const num = 9;
// if (num >= 2) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             console.log("Not a prime");
//             break;

//         } else {
//             console.log("prime num");
//         }
        
//     }


// }
