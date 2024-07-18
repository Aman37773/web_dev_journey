//as per lexical scope inner function can access the variables of outer functions

function get(){
          let a=7
          function pat(){
                    console.log(a)
          }
          pat()
}

get()

//Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function.

