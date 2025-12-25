
// with extra space

// let  arr = [10, 20, 30, 40, 50];

// let temp = new  Array(arr.length);

// let j = 0;

// for( let i = arr.length - 1;  i >= 0; i--){

//     temp [j] =  arr[i];

//     j++
// }

// console.log(temp);


// wthout extra space

let  arr = [ 10, 20, 30, 40, 50];

let i = 0 , j = arr.length-1;

while(i != j){
    
    let temp = arr[i]

    arr[i]  = arr[j]

    arr[i] = temp

    i++
    j--

}

console.log(arr);




