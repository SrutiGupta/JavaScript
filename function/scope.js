let a=10
const b=30//global scope
//var c=20//not to declare 

//scope { } of the program

//not to use var because if we create a variable in the function using var and didn't decalre in out of the scope but they are still be in the outer scope s...so if we work on any group project so it is very dangereous !!
/*if (true)
{
    var c=20 //local scope
}
console.log(c)*/

//nested function 

function one()
{
    const name = "sruti"
    function two(){
        const webside ="sruti@gmail.com"
        console.log(name)
    }
    two ()
}
one ()


//+++++++interesting +++++++

function addone(num)
{
    return num+1
}
const val=addone(5)
console.log(val)

//another type of declaring function

const addtwo=function(num)
{
    return num+2
}

console.log(addtwo(2))//but if we print this in upper side it would not be printed 
//not to use before declaration //hoisting