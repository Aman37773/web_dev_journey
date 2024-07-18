class student{
          name;
          class;
          roll;  
       
          get getrating(){
                    console.log(this.rating)
          }
          
          set setrating(r){
            this.rating=r;        
          }
          }
          
          let a=new student();

          a.setrating=10; //can be accessed as properties and not acting as function call
          a.getrating  //can be accessed as properties and not acting as function call