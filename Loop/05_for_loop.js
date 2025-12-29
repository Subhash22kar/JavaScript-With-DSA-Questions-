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

        let primeHai = true;
        for(let i =2; i<=Math.floor(n/2); i++){
            if(n%i === 0){
                primeHai = false;
                break;
            }
        }
   
    console.log(primeHai ? "Prime Number ": "Not Prime");
  } else {
    console.log(" Should be +ve and more than 0");  
  }
}
