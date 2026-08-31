// /

// let array = [10,20,30];

// let newArray = [...array];

// newArray.push(11)

// console.log("newArray---",newArray);
// console.log("array---",array);

// let obj = {
//     name:"Mr.name",
//     Salary: 1111111,
//     id:1
// }

// let newObj = [...obj];

// newObj["companyName"] = "company";

// // console.log(obj);
// console.log(newObj);

// let numbers = [5, 10, 15];

// let spreadCopy = [...numbers];

// spreadCopy.push(20);

// console.log("Numbers--",numbers);

// console.log("SpreadCopy--",spreadCopy);

// let student = {
//     name: "Harsha",
//     marks: {
//         javascript: 80,
//         html: 90
//     }
// };

// let copiedStudent = {...student};

// copiedStudent.name = "Rahul";

// student.marks.javascript = 100;

// console.log("student--",student);
// console.log("copiedStudent--",copiedStudent);

// let strStudent = JSON.parse(JSON.stringify(student));

// copiedStudent.marks.javascript= 110 ;
// strStudent.marks.javascript= 100 ;
// console.log(student);
// console.log(strStudent);
// student.marks.javascript = 100;
// console.log("student--",student);
// console.log("copiedStudent--",copiedStudent);
// console.log("strCopiedStudent--",strCopiedStudent);

// let product = {
//     name: "Laptop",
//     price: 50000,
//     details: {
//         brand: "Dell",
//         ram: "8GB"
//     }
// };

// let shallowProduct = {...product};
// let deepProduct = JSON.parse(JSON.stringify(product));

// shallowProduct.details.ram = "16GB";
// deepProduct.details.brand = "HP";

// console.log(product);
// console.log(shallowProduct);
// console.log(deepProduct);

// let employee = {
//     name:"Ram",
//     projects:["Website","Mobile App"]
// };

// let deepEmployee = JSON.parse(JSON.stringify(employee));
// deepEmployee.projects.push("Dashboard");

// console.log(employee);
// console.log("deepEmployee--",deepEmployee);

// let employee = {
//     id: 101,
//     name: "Kiran",
//     department: {
//         name: "Development",
//         location: "Hyderabad"
//     }
// };

// let editableEmployee = JSON.parse(JSON.stringify(employee));

// editableEmployee.department.name = "Testing";
// editableEmployee.department.location = "Bangalore";

// console.log("employee",employee);
// console.log("editableEmployee",editableEmployee);


// let user = {
//     name: "Arjun",
//     age: 23,
//     address: {
//         city: "Hyderabad"
//     }
// };

// let updatedUser = {...user};

// updatedUser.name = "Kiran";
// updatedUser.age = 24;

// console.log(user);
// console.log(updatedUser);


let account = {
    username: "arjun123",
    balance: 25000,
    profile: {
        name:"Arjun",
        city: "Hyderabad"
    }
};

let updatedAccount = JSON.parse(JSON.stringify(account));

updatedAccount.balance = 30000;
updatedAccount.profile.city = "Bangalore";

console.log(account);
console.log(updatedAccount);

