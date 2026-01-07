// Print numbers from n to 1 using recursion
function revNumer(n){
    if(n==0) return;
    console.log(n);
    revNumer(--n);
}

revNumer(10);