//part1............

// function hellow(n){
//           return n**2;
// }

// function hello(n){
// return hellow(n)*n
// }

// let get=hello(3);
// console.log(get);


//hof==>it is a function where function is used in argument and function is returned

//method1
// let first=(p)=>{
//           let second=(q)=>{
//                     let third=(r)=>{
//                               return p+q+r;
//                     }
//                     return third(2);
//           }
//           return second(3);
// }
//console.log(first(4))

//method2
let first=(p)=>{
          let second=(q)=>{
                    let third=(r)=>{
                              return p+q+r;
                    }
                    return third;
          }
          return second;
}

console.log(first(4)(3)(2))  //this 4,3,2 will give default values to all function inside main function so we can call all functions indide main function without value 


//array sum code;

let sum=function(arr){
          let total=0;
          for(i of arr){     //In for-of loop, here i directly points to continious values of arr not the index
                    total+=i  //here for loop with (i=0;i<arr.length;i++) could also be used
          }
          return total;
}
let nums=[1,2,3,4,5];
console.log(sum(nums))




//set interval
function hello(){
          console.log("hell");
          return;
}

//setInterval(hello,2000)   //call this after every 2(2000 miliseconds) seconds
// setInterval(function get(){ //it automatically calls the function so no need to call seperately(same goes with setTimeout)
//         console.log('hello')
// },1000)
setTimeout(hello,1000)  //print once after 1(1000 miliseconds) second




//part2........................

//for each loop(takes up self-invoked function)  // this function only returns undefined
let array=[1,2,3,4,5];

//normal calling of function
// array.forEach(function(element,index,array){    
// console.log(element,index,array);
//           })

//call using arrow function
// array.forEach((element)=>{
// console.log(element);
// }
// )



//call using map   //this returns value in the form of array
array.map(function(element){
          console.log(element);
})


//lowercase to uppercase
let prr=["one","two","three"];
prr.map(function(element){
console.log(element.toUpperCase());
})



//filter  
let cop=["maniraj","patiraj","soup","lemonraj"];
let store=cop.filter(function(element){
        return  element.endsWith("raj")
})
console.log(store);




//reduce
let sumar=[10,20,30,40];
let p=sumar.reduce((prev,cur)=>prev+cur,0)
console.log(p);   




//every
let numss=[1,2,3,4,500]
let h=numss.every((element)=> typeof element==='number')
console.log(h);




//find
let t=numss.find((element)=>element>200)
console.log(t);





//findIndex
let u=numss.findIndex((element)=>element>3)
console.log(u)  //gives index of first eleement that passes the condition




//some =>checks if any element passes the condition
let k= numss.some((element)=>element>4)
console.log(k)



//sort
let names=["hello","bello","apple"]
names.sort();
console.log(names)
