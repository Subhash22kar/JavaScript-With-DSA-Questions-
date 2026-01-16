// Search in a Rotated and sorted array 

let A = [4,5,1,2,3]

 let target = 5;

   let start = 0 , end = A.length-1;

    while(start <= end){
      let  mid = Math.floor((start + end)/2);
      if(A[mid]== target){
       console.log(mid);
      }

      if(A[start] <= A[mid]){ // left sorted
      if(A[start] <= target && target <= A[mid]){
        end = mid - 1;
        console.log(target);
      }else{
        start = mid +1
        console.log(start);
      }

      } else{ // right sorted
        if(A[mid] <= target && target <= A[end]){
            start = mid + 1;
            console.log(start);
        } else{
            end = mid - 1
            console.log(end);
        }

      }

      return -1
    }
console.log("subhash");
