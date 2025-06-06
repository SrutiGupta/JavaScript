//singlaton
// 
//symbol 
const sym=Symbol("key1")
//object literals 
const jsuser ={
     name:"sruti",
     //for symbol [] use
     [sym]:"mykey1",
     age :20,
     email:"sruti@gmail.com"
}
console.log(jsuser.age)
console.log(jsuser)

//to change value
jsuser.name="gungun"
console.log(jsuser)
//to not change any value 
//Object.freeze(jsuser)
//jsuser.name="gungun"


//functions 
jsuser.greeting = function()
{
    console.log("hello js user");
}
console.log(jsuser.greeting())//returns value
console.log(jsuser.greeting)//return function

//string interpranature 

jsuser.greeting2 = function ()
{
    console.log(`Hello js user,${this.name}`)//(this) use for reference same object 

}
console.log(jsuser.greeting2())