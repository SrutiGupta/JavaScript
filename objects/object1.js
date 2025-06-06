//singlaton 
//const tinderuser=new object()

//non-singelton
const tinderuser = {}
tinderuser.id="123oo"
console.log(Object.keys(tinderuser))
//nested object
const regularuser={
    email : "sruti@gmail.com",
    userfulldname:
    {
        firstname :"sruti",
        lastname :"gupta"
    }
}

const obj1 ={
    4: "a ",
    3: "b"
}
const obj2 ={
    1 : "l",
    2: "w"
}

//VVI :- to combine both operator 

const obj3=Object.assign(obj1,obj2)
console.log(obj3)

const obj4 ={...obj1,...obj2}
console.log(obj3)