console.log("hello world");

// primitive data types
//numbers
let a=3/2; //var and const too  , let works as var
// console.log(a)

//string
let b='jell' //or "jell"
// console.log(b);

//bolean
let c=false
// console.log(c);

//null
let d=null  //to print null
// console.log(d);

//undefined
let p   //here p is undefined because we have not given any value which will define its variable type


//non-primitive data types
//arrays
let names=[1,2,"hello"]
// names[0]=1 this is not allowed
// console.log(names[2]);

// to write value with description
// let m=5
// let n=7
// console.log("m is:",m,"and n is:",n);


// ** means power
// console.log(3**4)  this gives 81

// == this compares only values but not data types so answer for below is true
// let m=5,n="5"
// console.log(m==n); 



// === this compares values as well as data types so answer for below is false
// let m=5,n="5"
// console.log(m===n); 


// != this compares only values not data types so answer for below is false 
// let m=4,n="4"
// console.log(m!=n);


// !== this compares values as well as data types so answer for below is true
// let m=4,n="4"
// console.log(m!==n);


// if-else statement
let age=18
if(age>=18){
          console.log("adult");
}
else if(age>=15&&age<=18){
console.log("adult soon");
}
else{
          console.log("child");
}


// switch case
let roll=1
switch(roll){
          case 1:
          console.log("first");
          break;

          case 2:
          console.log("second")
          break;
          
          default:
          console.log("this is default");
          break;
}


// do-while , while, for works perfectly here
// let q=1
// do{
//           console.log(q);
//           ++q
// }
// while(q<=5)


// ternary operator
// let l=1,k=2
// l==k? console.log("yes"):console.log("no");


// let y=[1,2,3]
// console.log(y);   this will print all array elements with bracket


// let y=new Array(1,2,3)
// console.log(y);  //this will too print all elements of array with bracket but this is dynamic storage



// let y
// y[0]=5  we cannot do this because y is initially undefined so system will consider it any non-array data-type so we need to initialise it with array data-type like,
// let y=[1,2]
// y[2]=3
// console.log(y[2]); this we can do



//we can do this too
// let h
// h=[1,2,3]
// console.log(h);



// to add elements at last of Array
//method 1
// let u=[1,2]
// u.push(3,4)
// console.log(u)   
// method 2
// let u=[1,2]
// u[2]=5
// console.log(u);


//to add element at starting of array
// let k=[3,4]
// k.unshift(1,2)
// console.log(k);




//to pop last element
// let u=[1,2,3]
// u.pop();
// console.log(u);



//to pop first element
// let r=[1,2]
// r.shift()
// console.log(r);



//pop and shift not only remove element by returns too like,
// let h=[1,2]
// let r=h.pop();
// console.log(r);



//to join two arrays
// let g=[1,2,3]
// let h=[4,5,6]
// g=g.concat(h)
// console.log(g);



//to join elements of an array itself
// let h=[1,2,3]
// h=h.join("")    content in "" will be present between two consecutive numbers
// console.log(h);




//to reverse elements of array
// let h=[1,2,3]
// h.reverse()
// console.log(h);



//to find index of array element
// let h=[1,2,3]
// let u=h.indexOf(3)
// console.log(u);



//to print any continious part of array
// let h=[1,2,3,4,5]
// let q=h.slice(1,3)
// console.log(q);



//to add element at any position of array
// h.splice(index where to add element,number of elements to delete from that index,element to add,element to add,...)
// let h=[1,2,3,4,5]
// h.splice(2,0,11)
// console.log(h);




//function call
// function say(f){    //always call by value 
//           f=10
//           return f*f;
// }
// let f=6
// console.log(say(f));
// console.log(f);



// giving default value to parameter
// function get(f=5  /*to give default as 5*/ ){
// return f
// }
// console.log(get()) // here no value is passed to parameter so it will take default as 5 as mentioned sbove
// console.log(get(7));



// passing array in function call
// function get(f){
// console.log(f);
// }
// let g=[1,2,3]
// get(g)


//to access all arguments value without parameters in function call
// function get(){
//           for(let i=0;i<arguments.length;i++){  //here arguments is a keyword
//                     console.log(arguments[i]);
//           }
// }
// get(1,2,3,4,5)



//arrow function -> to conncise the code

//for multiple parameter and single return expressions
// let get=(x,y)=>x+y
// console.log(get(3,4));

//for multiple expressions(statements) in function call
// let get=(x,y)=>{
// console.log("value is:");
// return x*y
// }
// console.log(get(3,4));




//anonymous function---> function which do not have any name
// let x=function(p){
//           return p*p;
// }
// console.log(x(3));

//named function expression
// let x=function move(p){
//           return p*p;
// }
// console.log(x(3));





//immediately invoked function expression(or self-invoked function expression)--> this function is called just after declaration and cannot be recalled
//method1
(function get(x){
           console.log(x);
})(5)




// objects
// method1
// let n={
//           age:10, 
//           roll_no:5, 
//           name:"alex"
// };
// console.log(n.age);

// method2
// let m=new Object();
// m.age=8;
// m.name="alex"
// console.log(m.name);




// function get(name,age){
//            this.namee=name    //can access these values from anywhere
//           this.agee=age
// }
// let m=new get("alex",20)
//  console.log(m.namee);   // or console.log(m['name']);
// console.log(m);   //this will give all values of object



// to delete any property of object
// delete m.name;



//to fetch values, keys and entries
let emp={
          age:2,
          name:"alex",
}


let x= Object.keys(emp);
let y=Object.values(emp);
let z=Object.entries(emp);
console.log(x);
console.log(y);
console.log(z);



//to avoid editing of abject properties and addition of new properties 
// Object.freeze(emp);
// emp.name="nn";
// console.log(emp.name); //this will still print alex



// to avoid adding and deleting properties but allow editing given properties
// Object.seal(emp);
// emp.name="nn"
// emp.love="yes";
// console.log(emp.name);  //this will edit name
// console.log(emp.love);  //this will say undefined



//to copy one object into another
//method1
// let o=emp
// o.na='k'
// console.log(o);

// method2
// let o=Object.assign({love:'secret'},emp);
// console.log(o);







