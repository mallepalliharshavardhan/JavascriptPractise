//-----------------  program to print a grade based on marks ---------

var marks = 76;

if(marks < 35 ){
    console.log("Grade: F");
}else if(marks >= 35 && marks < 45 ){
    console.log("Grade: P");
}else if (marks >= 45 && marks < 65) {
    console.log("Grade: C");
}else if (marks >=65 && marks < 75) {
    console.log("Grade: B");
}else if (marks >= 75 && marks <= 100 ) {
    console.log("Grade: A");
}

