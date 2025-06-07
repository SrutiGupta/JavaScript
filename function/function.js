//how to declare function 
/*function saymyname()
{
    console.log("sruti")
}
saymyname()*/


function addnumber(num1,num2)//parameters
{
    let result=num1+num2;
    return result;
}
addnumber(2,3)//arguments /value

function loginuser(username)
{
    return `${username} just logged in `
}

console.log(loginuser("sruti"))

//shopping card 

function calculateprice(...num1)//rest 
{
    return num1
}
console.log(calculateprice(200,500,300))

function calculate(val1,val2,...num1)//rest 
{
    return num1
}
console.log(calculate(200,500,300))


//for object 

const user= {
   name : "sruti",
   age :20,
   roll_no :20233057
}

function objectdefine(anyobject)
{
    console.log(`The name of the user is ${anyobject.name} and the age of user is ${anyobject.age}`)
}

objectdefine(user)