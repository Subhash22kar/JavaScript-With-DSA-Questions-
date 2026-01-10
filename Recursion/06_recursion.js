// fibonacci Serise

// let n = 10;
// let first = 0, second = 1;

// process.stdout.write(first+" " + second+" ")

// for(let i = 1; i<=n-2; i++){
//     let third = first + second;
//     first = second;
//     second = third;
//     process.stdout.write(third+" ");
// }

function fiboNTerms(n, first, second) {
  if (n == 0) return;
  third = first + second;
  process.stdout.write(third + " ");
  fiboNTerms(n - 1, second, third);
}

let n = 10;
process.stdout.write(0 + " " + 1 + " ");
fiboNTerms(n - 2, 0, 1);
