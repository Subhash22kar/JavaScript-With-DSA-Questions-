//  find a prime  number

let pr = prompt(" Enter numbers check prime");

if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  }
   else
     if (n > 0) {

      console.log(isPrime(n));
   
    // console.log(primeHai ? "Prime Number ": "Not Prime");
  } else {
    console.log(" Should be +ve and more than 0");  
  }
}


function isPrime(n){//12

  if(n<=1) return false;
  if(n==2) return true;
  if(n%2==0) return false;
  for( let i = 3; i<=Math.floor(Math.sqrt(n)); i=+2){

    if(n%1==0) return false

  }

  return true

}