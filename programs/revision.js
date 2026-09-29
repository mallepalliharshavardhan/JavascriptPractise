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

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// // console.log(technologies.slice(1,4));

// // Requirement: modify the original array so that "React" is inserted between "JavaScript" and "Node".
// const tech = ["HTML", "CSS", "JavaScript", "Node"];

// tech.splice(3, 0, "React");

// console.log(tech);

// //Requirement: create a new array where every price has an additional ₹100 added to it.

// const prices = [500, 1200, 800, 2500, 1500];

// let modifiedPrices = prices.map((ele) => ele + 100);

// console.log(modifiedPrices);

// // Second Largest Number

// const numbers = [12, 35, 100, 35, 34, 1];
// let largestNum = 0;
// let secondLargestNum = Infinity;

// for (let i = 0; i <= numbers.length - 1; i++) {
//     if (largestNum < numbers[i]) {
//         secondLargestNum = largestNum;
//         largestNum = numbers[i];

//     } else if (numbers[i] < largestNum && numbers[i] > secondLargestNum) {
//         secondLargestNum = numbers[i];
//     }

// }
// console.log(secondLargestNum);

// // Prime number 





// const num = 6;
// let prime = false;
// if (num >= 2) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) { 
//             console.log("Not  a prime")
//            break;

        
//     }


// }console.log("prime")
// }


const employees = [
  { id: 1, name: "Asha", salary: 20000 },
  { id: 2, name: "Ravi", salary: 25000 },
  { id: 3, name: "Neha", salary: 30000 }
];

let getEmployeeNames= (employees )=>{
  let names= employees.map((e)=>
     e.name 
  ); return names;
} 

console.log(getEmployeeNames(employees));
  

let highPaidEmployees= (employees)=>{
    let salary = employees.filter((e)=>{
        return e.salary >= 25000
    }); return salary;
}

console.log(highPaidEmployees(employees));

const newEmployee = {
  id: 4,
  name: "Kiran",
  salary: 28000
};

let updatedemployees =[...employees,newEmployee];
console.log( employees);
console.log(updatedemployees);

    let editEmployees = employees.map((e)=>{
    if(e.id === 2){
        return {...e,salary: 32000 }
    } return e;
    })
    console.log(editEmployees)

    let editNehaName = employees.map((e)=>{
        if(e.id == 3){
         return{...e,name:'Neha Sharma'}
        }
        return e;
    })
    console.log(editNehaName);

    // destructuring

    const employee = { id: 3, name: "Neha", salary: 30000 };

    const{id,name}= employee ;

    console.log(id,name);

    //---------------

// const field = "salary";
// const updated = { ...employee, [field]: 35000 };

// console.log(updated);

// const field = "name";

// const updatedName = {...employee,[field]: 'Neha Sharma'}

// console.log(updatedName);

//REduce  UseCase is calculations

// const cart = [
//   { id: 1, price: 100, quantity: 2 },
//   { id: 2, price: 50, quantity: 3 }
// ];


// const totalQuantity= cart.reduce((total,item)=>{return  total + item.quantity},0);

// console.log(totalQuantity);
// const Cart = [
//   { price: 200, quantity: 2 },
//   { price: 100, quantity: 1 }
// ];

// let getDiscountTotal=(Cart,discount)=> {
//  const totalCartPrice =Cart.reduce((sum, item)=>{return sum + item.price * item.quantity },0);

//  const discountedprice=  totalCartPrice - ((totalCartPrice/100)* discount);

//   return discountedprice;
 
// }
//  console.log(getDiscountTotal(Cart,10));


const Products = [
  { id: 1, name: "Keyboard", price: 1000 },
  { id: 2, name: "Mouse", price: 500 }
];

let IncreasedPrice = Products.map((items)=> ( {...items, price: items.price + (items.price * 0.10)} ))

 

console.log(IncreasedPrice);

const productName = "Wireless Keyboard";

let Status = productName.trim().toLowerCase().includes
    ('mouse');

console.log(Status);

const numbers = [4, 3, 1, 2];

for (let j = 0; j < numbers.length - 1; j++) {
  if (numbers[j] > numbers[j + 1]) {
    const temporary = numbers[j];
    numbers[j] = numbers[j + 1];
    numbers[j + 1] = temporary;
  }
}

console.log(numbers); // [3, 1, 2, 4]


const Numbers = [4, 3, 1, 2];

for (let pass = 0; pass < Numbers.length - 1; pass++) {
  for (let j = 0; j < Numbers.length - 1 - pass; j++) {
    if (Numbers[j] < Numbers[j + 1]) {
      const temporary = Numbers[j];
      Numbers[j] = Numbers[j + 1];
      Numbers[j + 1] = temporary;
    }
  }
}

console.log(Numbers); // [1, 2, 3, 4]

const numberS = [1, 2, 4, 5];
const n = 5;
let sum =0;
let nsum=0;

 for(let i=0; i<= numberS.length-1 ; i++ ){
    sum += numberS[i];
 }

 for(let j=1 ;j <= n ; j++){
    nsum += j;
 }

 const missingnum= nsum -sum ;

 console.log(missingnum);

 // count frequency

 const word = "hello";

 const count={};

 for( const character of word){
    if(count[character] === undefined){
        count [character]= 1;
    }else{
        count[character] +=1;
    }
 }
 console.log(count);

 //write a function that receives a product array and search text, then returns products whose names contain that text, ignoring capitalization. Try without opening yesterday’s code.




 let searchProduct= (products,searchText)=>{
  
  const filteredProducts= products.filter((product)=>{
   return product.name.trim().toLowerCase().includes(searchText.trim().toLowerCase())
  });

  return filteredProducts;

 } 

 console.log(searchProduct(Products,'KEYBOARD'));

 const increasedPrices= (products,percentage)=>{
  let updatedPrice = products.map((product)=> 
  ({...product,price:(product.price + (product.price/100)* percentage)})
  );
  return updatedPrice;
 }
console.log(increasedPrices(Products,10));


const sortnums = [5, 1, 4, 2];
let tempNum =0;
for(const num of sortnums ){
 for(let i=0; i<=sortnums.length-1 ; i++){
  if(num < sortnums[i]){
    tempNum = number[i]
  }
 }

}

