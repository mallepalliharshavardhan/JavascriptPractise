//---------------------------------- Level 6 — Arrays  ---------------------------

//  22. Write a program to print the first element of an array

var li = ["first element", " second element", "last element"];

console.log(li[0]);

// 23. Write a program to print the last element of an array

console.log(li[2]);

// 24. Write a program to print all elements of an array

console.log(li);


//25. Write a program to print numbers greater than 10 from an array

var nums = [1,2,10,28,3,53,5,8,18];

for (i =0  ; i < nums.length ; i++){
    if (nums[i] > 10){
        console.log("numbers greater than 10:",nums[i]);
    }
}

// 26. Write a program to print even numbers from an array

for (i=0 ; i < nums.length ; i++){
    if( nums[i] % 2 == 0){
        console.log("Even numbers in array",nums[i]);
    }
}