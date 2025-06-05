const myarray=[1,2,30];
console.log(myarray)
const myarray2=new Array(1,2,3)

//array methods
myarray.push(6)
myarray.unshift(10)//adding in first
//myarray.shift()//to remove first element
//myarray.pop()//to rmv last ele
console.log(myarray.includes(9))//it indicates the number present or not
const newarr=myarray.join()//it switch array to string
console.log(myarray)
//slice and splice(very very important!!)
console.log("a",myarray)
const myarray3=myarray.slice(1,3)
console.log(myarray3)
console.log("b",myarray)
const newarray=myarray.splice(1,3)
console.log(newarray)
console.log("b",myarray)
//in slice :- no change in original array|| it does not includes the range 
//in splice:- changes in array and remove that part || it includes the range 
