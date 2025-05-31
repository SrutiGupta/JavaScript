

//stack(primitive-let,const) and heap(non primitive-array,object,function) memory 
let user ={
    email:"mg615@gmail.com",
    upi:"ybl"
}
let usertwo=user;
usertwo.email="mother@gmail"
console.log(user.email);
console.log(usertwo.email)
