// // Arrays

// // var listID = [1,2,3,4,5,5,6,6,7,7];
// // var studentNames = ["Harsha","Priya", "Idli","veni"]

// // console.log(listID)
// // console.log(studentNames)

// //--------------------objects------------------//

// var marks = [12,345,55,"English","Maths","Science"]

// var myMarks ={
//     "telugu":60,
//     "english":80,
//     "physics":90,

// }
// var deepikaMarks ={
//     "telugu":61,
//     "english":82,
//     "physics":93,

// }
// var madhavaMarks ={
//     "telugu":69,
//     "english":80,
//     "physics":70,

// }
// var vasuMarks ={
//     "telugu":60,
//     "english":40,
//     "physics":96,

// }

// var studentsDetails = {
//     "Harsha":myMarks,
//     "Deepika":deepikaMarks,
//     "Madhava": madhavaMarks,
//     "Vasu": vasuMarks
// }


// var studentsDetails=[{
//     "telugu":60,
//     "english":80,
//     "physics":90,

// },{
//     "telugu":61,
//     "english":82,
//     "physics":93,

// },{
//     "telugu":69,
//     "english":80,
//     "physics":70,

// },{
//     "Harsha":myMarks,
//     "Deepika":deepikaMarks,
//     "Madhava": madhavaMarks,
//     "Vasu": vasuMarks
// }]
// console.log(studentsDetails)



// var fruitsNames = ["apple","banana"];

// // console.log("fruitName-->", fruitsNames);
// // console.log("fruitlist-length->", fruitsNames.length); 

// fruitsNames.push("mango","pinepapple","orange","pomogranete");



//  console.log("fruitName-->", fruitsNames);
// // // var name ="harshavardhan";
// // console.log("fruitList-->",fruitsNames.length) 

// //  fruitsNames.shift(); //to remove array element
// //   fruitsNames.shift(); 

// fruitsNames.unshift(); // to retrive removed arrays element

//  console.log("fruitName-->", fruitsNames);
// console.log("fruitList-->",fruitsNames.length);


var fruitNames = ['apple', 'banana', 'mango', 'pinepapple', 'orange', 'pomogranete',23];

console.log( fruitNames[0],fruitNames[1],fruitNames[2],fruitNames[3],fruitNames[4],fruitNames[5], fruitNames[6]);

console.log(fruitNames.length);

fruitNames[6] ="Melon";

console.log( fruitNames);
