function get(n,r,c){
this.name=n;
this.class=r;
this.roll=c
}

let a=new get('aman',5,7)
console.log(a)


//indirectly creating object
let m={
          p:get
}

m.p('viplove',5,7)
console.log(m)


//the theory of this keyword pointing to calling context is not applicable in arrow function
// let put=(n,r,c)=>{
//           this.name=n,
//           this.class=r,
//           this.roll=c
// }
// let b=new put('aman',5,7)
// console.log(b)  //this will give error



//using this keyword in arrow function

//here this.x is undefined because this keyword is not identified in arrow function
// let k={
// x:10,
// func:()=>{
// console.log(this.x)
// }
// }
// k.func()

//here it is obvious that this keyword is defined in func()(as its a normal function) so this.x is printing 10 and not printing undefined
let p={
 x:10,
 func(){
 let y=()=>{
   console.log(this.x)       
 }
 y()
 }
}

p.func()

