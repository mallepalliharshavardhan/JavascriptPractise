 let multiply = (a,b)=>{
    return a*b;
 }

let calculate= (a,b,callback)=>{
    return callback(a,b);
};

// console.log(calculate(5,4,multiply));

// promise 

let productAvailable = true;

let stockUpdate = new Promise((res,rej)=>{
    if(productAvailable){
        res("Product Available");
    }else{
        rej
    }
})

