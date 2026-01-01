// Right  rotation by k element

let arr = [1, 2, 3, 4, 5];

let temp = new Array(arr.length)

let k = Number(prompt("Enter k value"));//4

k = k % arr.length;

for (let i = 0; i < arr.length; i++) {
 temp = arr[(i+k)%arr.length] = arr[i]
}
console.log(temp);
