const char="Sruti";
if (char)
{
    console.log('print');
}
else 
{
 console.log ('do not  print')
}

//falsy:- 0, false ,-0 , BigInt 0n, "",null, underdefined , NAN 
//truthy :- "0", []," ", {},function(){}

//nulish 

let val1;
val1=5??10 //5 will be printed
val1=null??50
console.log(val1)