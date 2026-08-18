function add(a, b){
    
    return a + b;
}
let result = add(2 ,9);
console.log(result);

//----------------------------------------------------------------

function sub(a,b){
    return a - b ;

}
let resultSub = sub(14,4);
console.log(resultSub);

//-------------------------------------------------------------------------

function sqr(a ,b){
    return a ** b;

}
let resultSqr = sqr(2,2);
console.log("2**2 ->",resultSqr);  

//----------------------------------------------------------------------------


function age(thisYear){
    return thisYear + 1;
}
let nextYear = age(26);
console.log("age next year ->",nextYear);

//----------------------------------------------------------------------------

function numbertype(a){
    
    if(a > 0){
        console.log("Positive num");
    }
    else{
        console.log("Negative num");
    }
    return a ;
}

numbertype(456);
numbertype(-456);


//------------------------------------------------------------------------------

integerType(4);


function integerType(i){
    if(i % 2 === 0){
        console.log("This is a Even num");
    }
    else if( i % 2 !== 0){
        console.log("This is an Odd num");
    }

    return i;
}

integerType(450);
integerType(45);

//------------------------------------------------------------------

function voteEligible(a){
    if(a >= 18){
        console.log("Eligible to vote");
    }
    else{
        console.log("Ineligible to vote");
    }
}
voteEligible(12);
voteEligible(52);


//---------------------------------------------------------------------

function examResults(a){
    if(a >= 35){
        console.log("Subject Passed");
    }
    else{
        console.log("Subject failed");
    }
}

examResults(32);
examResults(74);

//------------------------------------------------------------------------

function greaternum(a,b){
    if (a > b){
        console.log(a,"greater than", b);
    }
    else{
        console.log(a,"less than", b);
    }
}

greaternum(10,7);
greaternum(10,114);

//--------------------------------------------------------------------------

function lock(a){
    if(a === 'Password'){
        return 'passowrd Unlocked';
    }
    else{
        return'Password Incorrect';
    }
}

let result1 = lock('key');
let result2 = lock('Password');

console.log(result1);
console.log(result2);

//---------------------------------------------------------------------------

function examGrades(marks){
    if(marks < 35 ){
    return "Grade: F";
}else if(marks >= 35 && marks < 45 ){
    return "Grade: P";
}else if (marks >= 45 && marks < 65) {
    return "Grade: C";
}else if (marks >=65 && marks < 75) {
    return "Grade: B";
}else if (marks >= 75 && marks <= 100 ) {
    return "Grade: A";
}

}
let marks1 = examGrades(32);
console.log(examGrades(32));

let marks4 = examGrades(42);
console.log(examGrades(42));

let marks2 = examGrades(72);
console.log(examGrades(74));

let marks3 = examGrades(92);
console.log(examGrades(92));

//------------------------------------------------------------------------------


function ageCat(age) {

    if( age < 12){
    return "Child";

} 
else if (age > 12 && age < 19){
    return "Teenager";
}
else if( age > 20 && age < 30){
    return "Youth";

}
else if( age > 30 && age < 55){
    return "Middle aged";
}
else if ( age > 55 ){
    return "Senior citizen";
}
}
 

let Child = ageCat(age);
console.log(ageCat(11));

let teenager = ageCat(age);
console.log(ageCat(17));

let youth = ageCat(age);
console.log(ageCat(24));

//------------------------------------------------------------------