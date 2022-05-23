
function le(){
  let n =  document.getElementById('n').value;
 console.log(n);
}

function permutation(n,r){

 n = document.getElementById('n').value;
 r = document.getElementById('r').value;

 function factorial(num){
   let product = 1;
 for(let i=2; i <= num; i++){
   product *= i;
 }
  return product;
 }
let ans = factorial(n)/factorial(n-r);
//console.log(factorial(n)/factorial(n-r)) ;
document.getElementById('ans').innerHTML = ans

}