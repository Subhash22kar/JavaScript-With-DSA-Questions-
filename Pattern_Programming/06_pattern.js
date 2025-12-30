const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a Number "))

for(let i = 1; i<=n; i++){
    // inverted
  for(let j = 1; j<=n-1; j++){

    process.stdout.write("  ") 
  }
  // right
    for(let j =1; j<=i; j++){

    process.stdout.write("* ") 


    }
  
    console.log();
    

}