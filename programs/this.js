//  let employee= {  
//      employeeName :"Harsha",
//      salary: 30000,


//  showDetails:function(){
//     console.log(this.employeeName);
//     console.log(this.salary);
//  }
// };
// employee.showDetails();

//-----------

// let bankAccount ={
//  owner:"Harsham",
//  balance:5000,

//  showaccount: function(){
//     console.log(this.owner);
//     console.log(this.balance);

//  }

// }; 
// bankAccount.showaccount();

//----------
// let student= {
//     name:"Ravi",

//     showName: function(){

//         printName =()=>{
//             console.log(this.name);
//         }
//         printName();
//     } 
// };
// student.showName();
//---------

// let company ={
//     name:"TCS",
// employee:{
// name:"harsha",

//  showEmployee: function(){


//    let  printEmployee=()=>{
//     console.log(this.name);

//    }
//    printEmployee();
//   }
// }
// };
// company.employee.showEmployee();
//----------------------

let school = {
    schoolName: "DPS",

    student: {
        name: "Ravi",
        marks: 85,
        showResult: function () {
            let printResult = () => {
                console.log(this.name);
                console.log(this.marks);

            };

         printResult();
        } 
    }
};

school.student.showResult();
