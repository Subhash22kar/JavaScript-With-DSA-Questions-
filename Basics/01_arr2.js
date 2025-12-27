const prompt = require("prompt-sync")();

// let arr = new  Array(5)
// arr[0] = Number(prompt("Enter a value"));
// arr[1] = Number(prompt("Enter a value"));
// arr[3] = Number(prompt("Enter a value"));
// arr[4] = Number(prompt("Enter a value"));
// arr[5] = Number(prompt("Enter a value"));
// console.log(arr);

// for( let  i = 0; i < arr.length; i++ ) {
//     arr[i] = Number(prompt("Enter a value  "))
// }

// console.log(arr);


// let arr = [10, 20, 30, 40, 50];

// let sum = 0;

// for( let i = 0; i < arr.length; i++){

//     sum = sum - arr[i];
// }

// console.log(sum);




let arr = [10, 2, 78, 13, 4];

let max = arr[0];

for(let i = 1; i < arr.length; i ++){

    if(max < arr[i]){
        max = arr[i];
    }
}

console.log(max);
