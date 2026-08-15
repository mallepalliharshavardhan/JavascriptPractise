//----------------------- Level 5 — Small Calculations with Loops -----------------------------

// ------- 20. Write a program to print the multiplication table of a number ------------------

for ( i =1 ; i <=10 ; i++) {
    console.log( "2 *", i ,"=", 2 * i );
}


//----21. program to find the sum of numbers from 1 to 5 ---------- 0+1= 1, 1+2=3 ,3+3= 6, 6+4=10 ,10+5= 15


var sum = 0;

for( i=1 ; i <= 5 ; i++){
    
    sum += i;
}
console.log("Sum of 1 to 5 number is",sum);