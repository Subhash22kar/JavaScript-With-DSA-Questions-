// Print numbers from 1 to 10 using recursion

// function Number(n){
//     if(n==11) return;
//     console.log(n);
//     Number(++n);
// }

// Number(1);

function Number(n){
    if(n==0) return;
    Number(n-1);
    console.log(n);
}

Number(10);