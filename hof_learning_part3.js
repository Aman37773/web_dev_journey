//regex=> regular expression

//method 1
//sub-method1
let pattern='pw';
let flag='gi';  //g->global i.e. all pattern of strings     i->case insensitive i.e. a will look for a or A
let strtocheck="pwskills is great and provides quality content,Pw is good";
let regExOne=RegExp(pattern,flag);  
let result= regExOne.test(strtocheck); 
console.log(result)

//sub-method 2
let regExOnee=/pw/gi;
let resultt=regExOnee.test(strtocheck)
console.log(resultt);


//method 2
let regExOneee=/pw/g;   //now g-> case sensitive,which will allow only uppercase or lowercase so it allows only lowercase
let resulttt=strtocheck.match(regExOneee);
console.log(resulttt);



//to replace sub-part of string
let regExptwooo=/pw/gi;
let resultttt=strtocheck.replace(regExptwooo,'p--w')
console.log(resultttt)



//pattern matching in url
let str="https://hello%20kl.com"    //hello kl in browser is modified as hello%20kl(that may be %21 or else too)
let get=str.replace(/%\d\d/gi,'_')    //\d denotes any single digit
console.log(get)
