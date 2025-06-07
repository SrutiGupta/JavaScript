//this 
const user = {
    username : 'sruti',
    price : 5555,
     welcomemessage : function(){
        console.log(`${this.username},welcome to the club` );
        console.log(this)
     }
}
//this :- only uses in object not in function or other things 
user.welcomemessage()
user.username='sami'
user.welcomemessage()
console.log(this)//empty object 

/*function chai()
{
    console.log(this)//many things 
}
chai()*/



//+++++++ important +++++++
//explicit returns
//() => {}
const addnum = (num1,num2) => {
    num3=num1+num2
    return num3;
}
console.log(addnum(3,4))



//implicit return ... not to write return keyword
const addtwo = (num1,num2) => (num1+num2)
console.log(addtwo(3,4))