class student{
name;
class;
#roll;  //this # makes it private member so cannot be accessed outside class and can only be accessed inside class

constructor(n,r,c){
this.name=n;
this.class=r;
this.#roll=c;
}

call(){
console.log(this.#roll)
}

static get(){
          console.log('interesting');
}

}

let a=new student('aman',5,7);
console.log(a)
a.call();
//a.get()  //this will give error as static function cannot be called with respect to object but can only be called with respect to class

student.get() //this will successfully call the function


