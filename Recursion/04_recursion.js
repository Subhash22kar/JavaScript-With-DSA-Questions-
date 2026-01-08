
// Function to calculate the sum of all integers from 1 to n using recursion
function sum(n){
    if(n == 1) return 1;
    return n + sum(n-1);
}

console.log(sum(5)); // Output: 15
console.log(sum(10)); // Output: 55