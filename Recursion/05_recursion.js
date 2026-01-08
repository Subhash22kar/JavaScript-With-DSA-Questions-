
// Function to calculate the factorial of a number using recursion

function fact(n){
    if(n == 1) return n;
    return n * fact(n-1);
}

console.log(fact(5)); // Output: 120
console.log(fact(6)); // Output: 720