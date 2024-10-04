let m=prompt("enter the number");
let n=prompt("enter the number");
let a=0;
if(m>n)
{
    console.log("0");
}
else{
    for(let i=0;i<=n;i++){
        a+=i*i*i;
    }
  console.log(a);
}