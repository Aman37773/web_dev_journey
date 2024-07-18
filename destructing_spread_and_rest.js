//an array is an object
let a=[1,2,3];
console.log(typeof(a)) //==> object


//destructuring --> it is used to unpack values from array or properties from oject into distinct variables
//method1
// let p=[1,2,3,4,5]
// let [x,y,z]=p    //now x=1, y=2, z=3
// console.log(x);
//method2
// let {m,n}={
//           m:1,
//           n:5
// }
// console.log(m);


//spread syntax==>it allows an iterable such as array or string to be expanded  as individual entity
//method1
// let h=[1,2,3,4,5]
// let get1=[...h]  //==>[1,2,3,4,5]
// let get2={...h}  //==> {'0':1, '1':2, '2':3, '3':4, '4':5}
// console.log(...h)  //==>1 2 3 4 5
// console.log(get2) 
//method2
// function sum(one,two,three){
// return one+two+three
// }
// console.log(sum(...h))
//method3=> to individually access values of obect and modify them
// let objectt={
// first:100,
// second:50
// }
// console.log({...objectt,first:70})




//speciality of arguments  --> arguments is also object like array but it is a pure object due to which some functions of array like for-each, map etc does notwork here so in order to give it properties of array we need to connvert them into array usng
function get2(){
          console.log(arguments)   //==> this will print entity in order as of object  i.e.  {'0':1, '1':2, '2':3, '3':4, '4':5}
}
get2(1,2,3,4,5)

//now Array.from()  function is used for conversion
function get3(){
          let args=Array.from(arguments)
          console.log(args)   //==> [1,2,3,4,5]
}
get3(1,2,3,4,5)

//now here no need of conversion(working as rest operator)
function get4(...arggs){
console.log(arggs)   //==> [1,2,3,4,5]
}
get4(1,2,3,4,5)


//example of rest operator  //--->converts individual entities into combined entity
let kl=[1,2,3,4,5]
let [j,k,...l]=kl
console.log(l)  //===>[3,4,5]



//example of spread
let strin="aman"
let store1=[...strin]
let store2={...strin}
console.log(store1)
console.log(store2)
console.log(...strin)





