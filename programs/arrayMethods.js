// ----------------- Filter -----------------

// const numbers = [5, 8, 11, 14, 20, 23];
// let oddNumber = numbers.filter((num)=>{
//     return num%2 !== 0 ;
// });

// console.log(oddNumber);

// let prices = [250,1200,450,2000,750,3000];

// let higherPrices = prices.filter((element)=>{
//     return element >1000;
// });

// console.log(higherPrices);

// const users = [
//     { name: "Arjun", age: 17 },
//     { name: "Rahul", age: 24 },
//     { name: "Priya", age: 16 },
//     { name: "Kiran", age: 22 }
// ];

// let usersMajor = users.filter((element)=>{
//     return element.age >= 18;
// })

// console.log(users);
// // console.log(usersMajor);

// const products = [
//     { name: "Laptop", price: 55000 },
//     { name: "Mouse", price: 800 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Phone", price: 25000 },
//     { name: "Cable", price: 500 }
// ];

// let filterProducts = products.filter((element)=>{
//     return element.price >= 1000 && element.price <= 30000;
// });

// console.log(filterProducts);

// const employees = [
//     { name: "Ravi", department: "IT", salary: 35000 },
//     { name: "Priya", department: "HR", salary: 40000 },
//     { name: "Kiran", department: "IT", salary: 55000 },
//     { name: "Anjali", department: "IT", salary: 28000 },
//     { name: "Rahul", department: "Sales", salary: 60000 }
// ];

// let Itslaray = employees.filter((element)=>{
//     return element.department === "IT" && element.salary > 30000;
// });

// console.log(Itslaray);

// const students = [
//     { name: "Arun", marks: 85 },
//     { name: "Kiran", marks: 42 },
//     { name: "Priya", marks: 76 },
//     { name: "Rahul", marks: 33 },
//     { name: "Anjali", marks: 91 }
// ];

// let averageStudents = students.filter((element)=>{
//   return element.marks >= 50 && 
//   element.marks <= 80 ;
// });


// console.log(averageStudents);

// const numbers = [3, 8, 12, 17, 20, 25, 30, 33];

// let evenGreaterTen = numbers.filter((element)=>{
//     return element%2 === 0 && element >10;
// });
// console.log(evenGreaterTen);

// const names = ["Ram", "Krishna", "John", "Alexander", "Priya", "Sai"];

// let lenghtFive = names.filter((el)=>{
//     return el.length > 5;
// });

// console.log(lenghtFive);

// const words = ["apple", "cat", "banana", "dog", "mango", "elephant"];

// let containsA = words.filter((word)=>{
//     return word.includes("a");
// });
// console.log(containsA);

//---------------- sort ----------------------

// const salaries = [45000, 25000, 70000, 32000, 55000];

// let descSalary = salaries.sort((a,b)=>{
//     return b-a ;
// });

// console.log(descSalary);

// const marks = [67, 23, 91, 45, 82, 10];

// let highestMarks = marks.sort((a,b)=>{
//     return a -b ;
// });

// console.log(highestMarks);

// const products = [
//     { name: "Laptop", price: 55000 },
//     { name: "Mouse", price: 800 },
//     { name: "Phone", price: 25000 },
//     { name: "Keyboard", price: 1500 }
// ];

// let ascPrices = [...products].sort((a,b)=>{
//     return a.price - b.price});

// //     console.log(ascPrices);

// const employees = [
//     { name: "Rahul", salary: 45000 },
//     { name: "Arjun", salary: 60000 },
//     { name: "Priya", salary: 35000 }
// ];

// let alphabeticallyNames = [...employees].sort((a,b)=>{
//   return a.name.localeCompare(b.name);
// });

// console.log(alphabeticallyNames);


// map

// let prices = [100, 200, 300, 400];

// let newPrices = prices.map((element) => {
//   return element + 50;
// });

// // console.log(newPrices);

// // project style:--- map()

// let products = [
//   { name: "Shirt", price: 500 },
//   { name: "Shoes", price: 1200 },
//   { name: "Watch", price: 2000 }
// ];


// let newProducts = products.map((element) => {
//   return {
//     ...element,
//     price: element.price + 100
//   }
// });
// console.log(newProducts);

// project style:--- filter()

// let products = [
//   { name: "Shirt", price: 500, inStock: true },
//   { name: "Shoes", price: 1200, inStock: false },
//   { name: "Watch", price: 2000, inStock: true },
//   { name: "Cap", price: 300, inStock: false }
// ];

// // let instockProducts = products.filter((element)=>{
// //   if(element.inStock === true){
// //     return element.name ;
// //   }
// // });  wrong code
// let instockProducts = products.filter((element)=>{
//     return element.inStock === true

// });

// console.log(instockProducts);



// let students = [
//   { name: "Ravi", marks: 78 },
//   { name: "Arjun", marks: 32 },
//   { name: "Priya", marks: 91 },
//   { name: "Kiran", marks: 40 },
//   { name: "Anu", marks: 25 }
// ];

// let studentsPassed = students.filter((element)=>{
//   return element.marks >= 40;
// }); console.log(studentsPassed);


//   sort

let prices = [500, 1200, 300, 2000, 800];

let descPrice = [...prices].sort((a,b)=>{
  return b-a ;
});
console.log(descPrice);
console.log(prices)

