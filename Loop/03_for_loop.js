

//  Fuctorial of numbers


let pr = prompt("kaha tak add karwaaoge ?");

if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else if (n > 0) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }

    console.log(fact);
  } else {
    console.log(" Should be +ve and more than 0");
  }
}