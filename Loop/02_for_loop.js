//  sum  of n natural numbers

let pr = prompt("kaha tak add karwaaoge ?");

if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else if (n > 0) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }

    console.log(sum);
  } else {
    console.log(" Should be +ve and more than 0");
  }
}
