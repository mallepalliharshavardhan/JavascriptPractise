// ----  program to check whether the temperature is hot or normal --------

var temp = 45;

if( temp < 0){
    console.log("Freezing temperature");
}
if ( temp > 0 && temp < 20){
    console.log("Cold temperature");
}
else if ( temp > 20 && temp < 28){
    console.log("Room temperature");
}
else if ( temp > 28 ){
    console.log("Hot temperature");
}