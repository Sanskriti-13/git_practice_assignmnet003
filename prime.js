function checkPrime(num){
let factors=0
for(let i=2;i<num;i++)
{
    if(num%i==0){
        factors++;
    }
}
if(factors!=0){
    console.log("No")
}
else{
    console.log("Yes")
}
}
checkPrime(13);