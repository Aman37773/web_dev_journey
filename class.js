class student{
          name;
          roll;
          class;

          constructor(n,r,c){   //here constructor is a default function which is called always when object is assigned to a variable like let a=new student();
                    this.name=n;   //this keyword refers to context from where we called
                    this.roll=r;
                    this.class=c
                   // return 10;   //if we return primitive then it will be avoided by constructor and upper changes will be implemented
                   // return {x:0,y:20}  //if we return object then that will only be considered and upper changes will be neglected so after return this object ,a.x=20 and a.name will be undefined
                   //if we return nothing then all above changes will be implemented so it is same as returing primitive
          }
          //we cannot have multiple custom constructors
          display(){
                    console.log("done")
          }
}



let a=new student('aman',5,7);
console.log(a)
