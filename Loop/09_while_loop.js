// Strong number

let pr = prompt(" Enter numbers ");

if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else if (n > 0) {
            let sum = 0;
            let copy = n;
            while (n>0) {
                let rem = n%10 
                let fact = 1;
                for (let i = 1; i<=rem; i++) {
                    fact = fact*i;
                    
                } 
                sum += fact;
                n = Math.floor(n/10);
            }

            if(copy === sum){
            console.log("Strong"); 
            }

            else{
                console.log("Not Strong");
                
            }
            
            
    
  } else {
    console.log(" Should be +ve and more than 0");
  }
}
