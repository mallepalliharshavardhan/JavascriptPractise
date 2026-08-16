// program to create an object and print its name property.

var studDetails = {
    name: "Manu",
    age: 18,
    class: "10th",
    Marks: 48
    
}

console.log("Student name is ",studDetails.name);


// -- 32.  program to create an object and print its age property

console.log("Student age is",studDetails.age);

//33. Write a program to check whether the age property of an object represents an adult or child

if (studDetails.age >= 18){
    console.log("Student is an Adult");
}
else if (studDetails.age < 18){
    console.log("student is a child" );
}


// 34. Write a program to check whether the marks property of an object represents a pass or fail result

if (studDetails.Marks >= 35){
    console.log("Student results: Passed");
}
else if(studDetails.Marks <35){
    console.log("Student results: Failed ");
}