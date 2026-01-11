

let arr = [1,2,3,4,5];

let n = 5;

//Linear search

// for(let i  = 0;i<arr.length;i++){
//     if(arr[i] == n){
//         console.log("Present")
//     }
// }

// Binary Search

let s = 0;
let e = 4;
let mid;
while(s <= e){
    mid = Math.floor((s+e)/2);
    // console.log(mid)
    if(arr[mid]==n){
        console.log("Present")
        break;
    }
    else if(arr[mid]>n){
        e = mid -1
    }
    else{
        s = mid + 1;
    }
}




// Search in a Rotated and sorted array 

let arr2 = [4,5,1,2,3]




