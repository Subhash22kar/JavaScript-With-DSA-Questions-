// Revese numbers

let pr = prompt(" Enter numbers ");

if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else if (n > 0) {
     let rev = 0;
    while(n>0){
        let rem = n%10

        rev =  rev*10 + rem;
        n = Math.floor(n/10);
    }
    console.log(rev);
    
  } else {
    console.log(" Should be +ve and more than 0");
  }
}
