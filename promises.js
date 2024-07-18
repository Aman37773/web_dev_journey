//promises helps in handling asynchronous pieces of code more reliably by separately indicating what to do after timer of asynchronous code is done

//basic syntax of promise
let promise=new Promise(function get(resolve,reject){
//write code here
})


let prom=new Promise(function gett(resolve,reject){
         setTimeout(function(){
          console.log('done')
         resolve(1)      //this will call prom.then and 1 is argument in function inside it
        // reject(1)     //this will call prom.catch and 1 is argument in function inside it
         } ,1000)
})

//.then or .catch are called only when resolve or reject are called respectively and they are called only when asynchronous code is executed which indicates that asynchronous code is executed so thats the power of pomises
prom.then(function(kk){
          console.log("promise is fullfilled",kk)
})
prom.catch(function(kk){
          console.log("promise is rejected",kk)
})

console.log('hello my friend')


//states of promise
//pending =>> promise is in pending state before resolve() or reject() function is called
//fulllfilled =>> promise is in this state after resolve() or reject() function is called


//all function call and content of .then and .catch is stored in microtask queue and once callback stack is empty then it is pushed in callback stack for execution

//priority is given to content of microtask queue for execution that means if we have two promises and both have resolve functions in asynchronous code then after execution of asynchronous code of first promise ,content of .then of first promise will store in microtask queue and bfore execution of asynchronous code of second promise , content of .then of first promise will be executed then asynchronous code of second promise(which is already waiting in macrotask queue) is executed