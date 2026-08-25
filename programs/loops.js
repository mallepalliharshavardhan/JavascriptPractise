//..........Reverse an array using for loop.................



// for (let i =0 ; i <= array.length-1 ; i++){
//     console.log(i,":",array[i]);
// }
 
// for (let i = array.length-1 ; i >= 0 ; i--){
//     console.log("Reverse array",i,":",array[i]);
// }
 
//>> 1.Write a for loop that prints the numbers 1 to 20, but skips multiples of 3.


// for (i=1 ; i<= 20 ; i++){

//     if( i % 3 !== 0){
//         console.log(i);
//     }
// }

//>> 
const arr = [1,2,3,4,5,6,7,8];


 for (  i = arr.length-1; i >= 0 ; i-- ){
   console.log(arr[i]); 
   

}



