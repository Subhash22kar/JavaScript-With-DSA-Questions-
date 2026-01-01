
// Right rotation by k element

let arr = [1,2,3,4,5]

let k = Number(prompt("Enter k number"));

let copy  = arr[arr.length-1];

k = k % arr.length

let count = 0;

for(let j = 0; j<k; j++){

    count++;

    for(let i =arr.length-1; i> 0; i--){
    arr[i] = arr[i-1];
}

arr[0] = copy

}
console.log(arr);
console.log(count);
