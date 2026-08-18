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
//