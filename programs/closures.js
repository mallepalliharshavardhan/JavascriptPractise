// let wallet = () => {
//     let money = 500;

//     return {let balance=()=>{
//         return money;
//     }, let add= (amount)=>{
//         return money + amount;
//     },
//     let spend= (amount)=>{
//         return money - amount;
//     }
// };

// }

// let Wallet = wallet();

// console.log(Wallet.check());

// Wallet.add(300);
// console.log(Wallet.add());

// Wallet.spend(200);
// console.log(Wallet.spend());


// marks tracker

// let marksTracker = ()=>{
//     let intialMarks = 50;

//     return {
//         check : ()=>{
//             return intialMarks;
//         },

//         add: (marks)=>{
//             return intialMarks += marks;
//         },
//         reduce:(marks)=>{
//             return intialMarks -= marks;
//         } 
//     };
// }

// let marksTrack =marksTracker();

// console.log("checkMarks--",marksTrack.check());
// console.log("addMarks--",marksTrack.add(20));
// console.log("reduceMarks--",marksTrack.reduce(10));


// Employee Salary Manager

// let empSalaryManager = ()=>{
//     let startingSalary = 30000;

//     return {
//         checksalary: ()=>{
//             return startingSalary;
//         },
//         increaseSalary: (hike)=>{
//             return startingSalary += hike ;
//         },
//         decreaseSalary: (deduct)=>{
//             return startingSalary -= deduct ;
//         },
//        checksalary: ()=>{
//             return startingSalary;} 

//     };
// }

// let eSm = empSalaryManager();

// eSm.checksalary();
// console.log("checkingSalary--",eSm.checksalary());
// console.log("increaseSalary--",eSm.increaseSalary(5000));
// console.log("decreaseSalary--",eSm.decreaseSalary(2000));


// --------------------------------------------------------

// Login Attempt Tracker

// let loginAttemptTracker=()=>{
//     let startingAttempts=0;


//     return{
//     failedLogin: (loginResult)=>{
//         if(loginResult === "Failed login")
//         startingAttempts++;
//     },
//     checkAttempts: ()=>{
//          return startingAttempts ;
//     }
//     };
// }

// let lAt= loginAttemptTracker();
// lAt.failedLogin("Failed login");
// lAt.failedLogin("Failed login");

// console.log(lAt.checkAttempts());

// lAt.failedLogin("Failed login");
// console.log(lAt.checkAttempts());

// -----Q3 — Product Stock Manager----------------

// let productStockManager = () => {
//     let initialStock = 10;

//     return {
//         sell: (qty) => {
//             if (qty < initialStock) {
//                 return initialStock -= qty;

//             }else{
//                 return "No Stock";
//             }
//         },
//         Add: (qty) => {
//             return initialStock += qty;
//         },
//         finalStock: () => {
//             return initialStock ;
//         },

//     };

// }
// let pSm = productStockManager();


// console.log("Stock--",pSm.sell(3));
// console.log("Stock--",pSm.Add(5));
// console.log("Stock--",pSm.sell(20));
// console.log("finalStock--",pSm.finalStock());

let banking = () => {
    let newAccountBalance = 1000;

   
        return {

            add: (amount) => {
                return newAccountBalance += amount;
            },
            spend: (amount) => {
                return newAccountBalance -= amount;
            },
            balance: ()=>{
                return newAccountBalance;
            }

        };
    }

let Account1 =banking();
let Account2 = banking();

// Account1.add(500);
console.log("Add-Account1-",Account1.add(500));

// Account1.spend(200);
console.log("Spend-Account1-",Account1.spend(200));

// Account2.spend(400);
console.log("Spend-Account2-",Account2.spend(400));

console.log("Account1.balance",Account1.balance());
console.log("Account2.balance",Account2.balance());