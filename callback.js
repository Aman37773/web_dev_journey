//callback=>>>  when function is used in argument and function is returned then its is called hof and that function which is used as an argument is called callback

//method1
function h(x,fun){
     console.log(fun());      //=>>> hello
}

h(10,function p(){
return 'hello'
})

//method2 
//note->  javacript is also a language so cannot use variables before initialisation
function k(x,fun){
          console.log(fun());      //=>>> hello
     }
     let exec=function(){
          return 'hello'
     }
     k(10,exec)


     //asynchronous code=>>> when our javascript engine does not executes code line by line i.e. if a line is taking little time to execute then compiler will move forward (but will keep processing that time taking lines in runtime environment) to next line and executes rest of code and finally executes that time taking lines(at end time taking lines will be printed in the order as per tame taken by them and if time is same then one which is written first is printed first) so basically asynchronous is non-blocking code
function hello(){
          console.log('execute')
}
     console.log('start')
     setTimeout(hello,500)  //500 means 500 mili-seconds
     console.log('end')
     for(let i=0;i<100000;i++){}        //=>>>> printed format is:
                                        //start
                                        //end
                                        //(wait for loop(for loop) to finish)
                                        //execute


     //note=> javascript is a synchronous language but that fails in settimeout because settimeout is not own property of javascript but it is provided by browser

//note=============> for all asynchronous(non-blocking) pieces of code in javascript, javascript will set timer at runtime and whose timer is done first is pushed in macro-task queue or callback queue and it consecutively happens for all that codes. now we have event loop which checks if whole global code(apart from asynchronous code) is executed and call stack is empty then first task from callback stack is moved to call stack and executed and then call stack again becomes empty now again event loop will say that global code is executed and call stack is empty so next task from callback stack will move to call stack and will be executed and thats how all asynchronous pieces of code gets executed.
   //note: for-loop is synchronous(blocking) piece of code as compiler does not move forward without its completion