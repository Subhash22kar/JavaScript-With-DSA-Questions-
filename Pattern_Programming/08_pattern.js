const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a Number "))

for(let i = 1; i<=n; i++){
    // inverted
  for(let j = 1; j<=2*n-1; j++){

    if(i==j || i + j == 2*n){
        
        process.stdout.write("* ")
    }
    else{
         process.stdout.write(" ")
    }

  


    }
  
    console.log();
    

}