let arr = [10, 30, 40, 40, 40, 40];
 //                     i

let max = Math.max(arr[0], arr[1]); // 56

let sMax = Math.min(arr[0], arr[1]); // 30

for(let i = 2; i < arr.length; i++) {
    
    if(arr[i] > max){
        sMax = max;
        max = arr[i];
    } else if(arr[i] > sMax && max != arr[i]){
        sMax = arr[i];
    }
}

console.log(sMax);
