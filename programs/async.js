    // console.log('start');

const { rejectLimit } = require("async");

// const { reject } = require("async")

// setTimeout(() => {
//     console.log("inside Timeout");
// },3000);


// setTimeout(() => {
//     console.log("Task completed");
// },3000);

// let dotask = (callback) => {
//     callback();
// }

// let greet=(name, callback) => {
//     console.log(`hello  ${name}`);
//     callback();
// }

// greet('harsha',() => console.log('greet finished'));

// let greet = (name,callback) =>{
//     console.log(`hello ${name}`);
//     callback();

// }

// let greetStatus = () => {
//   console.log('greet finished');
  
    
// }

// console.log(greet('harsha',greetStatus));

// function divide(a, b, callback) {
// if (b === 0) callback("Cannot divide by zero", null);
// else callback(null, a / b);
// }
// let error=(err, result) => {
// if (err) { console.log("Error:", err);
// } else console.log("Result:", result);
// };

// divide(10, 0, error);



// function parentFunction(callback) {
// console.log("Parent Function")
// childFunction()
// }
// function childFunction() {
// console.log("Callback Function Executed")
// }
// parentFunction(childFunction)


// Callback Syntax and Structure

// function getUser() {
// let data;
// fetch("https://dummyjson.com/users")
// .then(response => response.json())
// .then(result => {
// data = result;
// })
// .catch(error => {
// console.log(error)
// })
// return data;
// }
// console.log(getUser())


// function getData(url, callback) {
// 5
// fetch(url)
// .then(response => response.json())
// .then(result => {
// callback(result)
// })
// .catch(error => {
// console.log(error)
// })
// }
// function displayData(data) {
// console.log(data)
// }
// getData("https://dummyjson.com/users/1", displayData)

//     let promise =((resolve, reject) => {
//   let success = true;
//   setTimeout(() => {
//     if (success) {
//       resolve("Candy received!");
//     } else {
//       reject("No candy today!");
//     }
//   }, 2000);
// });

// promise
//   .then(result => console.log(result))   // if resolved
//   .catch(error => console.log(error))   // if rejected
//   .finally(() => console.log("Done"));


// console.log("start");

// setTimeout(()=>{
//   console.log("Inside Timeout")
// },900);

// console.log("end");

// setTimeout(()=>{
//   console.log("Task completed")
// },2000)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// promise 

let productAvailable = true;

let stockUpdate = new Promise((res,rej)=>{
    if(productAvailable){
        res("Product Available");
    }else{
        rej("Product out of stock");
    }
});

// stockUpdate 
//         .then((message)=>{
//         console.log(message);
//       })
//       .catch((errorMessage)=>{
//         console.log(errorMessage);
//       });


let age = 17;

let votingEligibility = new Promise((resolve,reject)=>{
    if( age >=18){
        resolve(" Eligible to vote");
    }else{
        reject(" not eligible to vote");
    }
});

votingEligibility
                .then((message)=>{
                    console.log(message);
                })
                .catch((errorMessage)=>{
                     console.log(errorMessage);
                });