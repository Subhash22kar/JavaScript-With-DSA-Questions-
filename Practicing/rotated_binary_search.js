// Search in a Rotated and sorted array 

let arr = [4,5,1,2,3]

let s = 0, e = arr.length-1;
let target = 5;

while(s<=e){

    let mid = (s+e)/2;

    if(arr[mid] == target){
        console.log(mid);
        
    } if(arr[s] <= arr[mid]){
        if(arr[s]<= target && target <= arr[mid])
            e = mid - 1;
        else
            s = mid + 1;
    }
        else if(arr[mid] <= target && target <= arr[e]){
            s = mid +1;
        }

        else{
            e = mid -1;
        }
    }

