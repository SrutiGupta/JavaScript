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