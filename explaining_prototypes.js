//with the help of prototype we can give a properties to all objects(including arrays and string as they are object too)

//injecting property to all objects
Object.prototype.hello=function(){
console.log('hello')
}
Object.prototype.mello='good'

let a=[1,2,3];
a.hello()     //=>> this will print hello
console.log(a.mello)   //=>>this will print good



//injecting properties to all arrays only(this will not inject in string or any pure object)
Array.prototype.create=function(){
          console.log("injected")
}

let b=[1,2,3]
let c="aman"

b.create()   //=>> this will print injected
//c.create()  //=>>this will give error as create() function is not injected in string



//inheritance=> to give methods and properties of object into another 

//method1
let p={
          age:5,
}
let q={
roll:5,
__proto__:p
}

console.log(q.age)

//method2
let r={
          age:5,
}
let s={
roll:5,
}

Object.setPrototypeOf(r,s);  //injects all methods and properties of s in r
console.log(r.roll)




//to inject property(as a function) in string which will give its true size by avoiding all the spaces
String.prototype.truelength=function(){
          return this.trim().length
}

let k="aman    "
console.log(k.truelength())

