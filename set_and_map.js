//set=>>>>> stores contiguous unique elements

//to add values
// let set=new Set(a);
// set.add(3)
// set.add(2)
// set.add(3)
// console.log(set) //=>  {3,2}


//to remove values
// let set=new Set();
// set.add(3)
// set.delete(3)
// console.log(set) //=>  {}


//to empty the set
// let set=new Set();
// set.add(3)
// set.add(5)
// set.clear()
// console.log(set)  //=>  {}


//to check if set has that element
// let set=new Set();
// set.add(3)
// set.add(5)
// console.log(set.has(5))  //=>  true


//function code to check if elements of set A are present in set B
let setA=new Set()
setA.add(5)
setA.add(6)
let setB=new Set()
setB.add(7)
setB.add(6)
function setdiff(setA,setB){
   let sett=new Set([...setA].filter(el=>setB.has(el)) )  
   return sett    
}

console.log(setdiff(setA,setB));


//to iterate the set
//method1
// let set=new Set([1,2,3,4,5])
// for(let items of set){
//           console.log(items)
// }
//method2
// let set=new Set([1,2,3,4,5])
// set.forEach((el)=>{    
// console.log(el)
// })



//////////////////////////////maps in javascript
//method1 to set values of map
// let map=new Map()
// map[0]='aman'
// map['hello']=4
// console.log(map[0])
//method2 to set values of map
// let mapp=new Map();
// mapp.set('a',1)
// mapp.set('b',2)
// console.log(mapp.get('a'))
//method3  => giving object as value
// let mapp=new Map()
// mapp.set('friend',{ph:7999697941,roll:5})
// console.log(mapp.get('friend'))



//setting map values using array
let map=new Map()
let arr= [[1,'one'],[2,'two'],[3,'three']];
arr.forEach(el=>{
  map.set(el[0],el[1])   //or map[el[0]]=el[1]
})
console.log(map.get(1))


//to iterate map
for(let [key,value] of map){
   console.log(key,value)
}

//to iterate map keys
for(let key of map.keys()){
   console.log(key)
}

//to iterate map values
for(let val of map.values()){
   console.log(val)
}

//for-each loop in map
map.forEach((a,b)=>{   //here by default a is value and b is key
   console.log("key is:",b,"val is:",a)
})

//to convert map into array
let array1=Array.from(map);
console.log(array1)

//to convert map into array
let array2=Array.from(map.keys());
console.log(array2)

//to convert map into array
let array3=Array.from(map.values());
console.log(array3)

//.clear() works fine in map

//.delete function => takes input as key
// map.delete(1)
// console.log(map)

//.has() function works fine in maps and takes input as key



