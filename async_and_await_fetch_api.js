function createpromise(){    //returning new promise() to createpromise() just means we are making createpromise a promise
          return new Promise(function gett(resolve,reject){
          setTimeout(function(){
           console.log('timer done')
          resolve(1)      
          } ,1000)
 })
}
function createpromise1(){    //returning new promise() to createpromise() just means we are making createpromise a promise
          return new Promise(function gett(resolve,reject){
          setTimeout(function(){
           console.log('timer doneee')
          resolve(1)      
          },500)
 })
}


//note->>>>>> all the promises in await function will run line by line even if timer of upper function is more than timer of lower in async(but need to use await for it)
async function consume(){    //async makes the function consume() as promise
 console.log('checking function...');
 let responce= await createpromise();    //await will wait in runtime for value return through resolve or reject and will not move forward in runtime till any return value but main execution will keep excuting things outside async type function
 let responce1= await createpromise1();
console.log('responce is: ',responce)
console.log('responce is: ',responce1)
 }

 consume()
 console.log('end')      //=>printing format is (timer done is printed before timer doneee even timer of printing timer done is high just because of await keyword)
                         //checking function.....
                         //end
                         //timer done
                         //timer doneee
                         //responce is: 1
                         //respomce is: 1





//we can also use try and catch in async type function
// async function consume(){    
//           try{
//                     let responce= await createpromise1();
//                     console.log('responce is: ',responce)       
//           }
//           catch(err){
//                     console.log('handled',err)
//           }
         
//           }



//fetch api(application programming interface)->   to download server from different api
//basic syntax
fetch('https://type.fit/api/quotes').then(function get(value){
          return value.json();  //converting responce into json format
}).then(function get(value){
          console.log(value)
})



