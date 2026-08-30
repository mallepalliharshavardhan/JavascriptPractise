

// let mulValues = ["Shashi","168", "Doctor","Lexmbourg","20000"]

// let Name = mulValues[0]; console.log("name :",Name);
// let Height =mulValues[1]; console.log("height :", Height);
// let Profession =mulValues[2]; console.log("Profession :",Profession);
// let Location = mulValues[3]; console.log("Location :",Location);
// let Salary = mulValues[4]; console.log("Salary :",Salary);

// let user = {
//     Name : "Raghu",
//     Age : 25,
//     City : "Mithali"

// }

// const name = user.Name;

// const numbers = [ 10,30,29,19,13];

// // const newNumbers = [numbers[0],numbers[1],numbers[3],29,90,60];
// // console.log(newNumbers);

// const newNumbers = [...numbers,90,23,255];
// console.log(newNumbers)


// const marks = [34,24,56,51];
// const newNumber = [...marks,90,97];
// console.log(newNumber)
 
// const totalMarks = [...newNumber, 45,39,50,41];
// console.log(totalMarks)


// 0spread operator with objects

// 



// const first = [1,2,3];
// const second = [4,5,6];

// const combined = [...first,...second, 7,8,9];

// console.log(combined);


// const student = {
//     name: "Harsha",
//     course: "MernStack"
// };

// const updatedStudent = {...student,
//     course : "Javascript"
// };

// console.log(updatedStudent)

// Rest Opoerator

// function showNumbers(...numbers){
//   console.log(numbers)
// }

// showNumbers(10,20,30);

// function sum(...numbers){
//     let total = 0;

//     for(let number of numbers){
//         total = total + number
//     }return total;
// }console.log(sum(10,20,30));

// let one = [1,2] ;
// let two = [3,4];

// let combined = [...one,...two]
// console.log(combined);

// let sum = ( ...numbers) => {
//     let total = 0;

//     for( let  number of numbers){
//         total = total + number;
        
//     }return total;
// }
// console.log(sum(10,50,20));

const first = [1,2];
const second = [3,4];

const combine = [...first,...second];
console.log(combine);

let person = {
    name : "Harsha",
    city: " Bengaluru"
};

let updateCity = {
    ...person,
    city : "Hyderabad"
}
console.log(updateCity);

// ----------------------------------
let skills = ["HTML","CSS"];
let Uskills = [...skills,"Javascript"];
console.log(Uskills)

//---------------------------------------

let marks = (...marks)=>{
    console.log(marks);
}

marks(10,50,84,79,63,82,782,24,2,24,56,85,1);

// 10. function show(...values) {
//   console.log(values);
// }

// show("a", "b", "c"); it prints [a,b,c] code has rest operator which allows no.of arguments.

//12. it is not valid because rest operator must be the last parameter always.
let sum = (...numbers)=>{
    let total = 0 ;

    for(let number of numbers){
        total += number;
    }return total;
}
console.log(sum(10,5,15));