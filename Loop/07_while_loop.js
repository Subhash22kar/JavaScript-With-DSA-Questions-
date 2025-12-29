// Sum of Numbers

let pr = prompt(" Enter numbers ");

if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else if (n > 0) {
    let sum = 0;
    while (n > 0) {
      let rem = n % 10;

      sum += rem;

      n = Math.floor(n / 10);
    }

    console.log(sum);
    
  } else {
    console.log(" Should be +ve and more than 0");
  }
}
