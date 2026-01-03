
// Sort the  color // leetcode question


let i = j = 0
let k = arr.length -1;

while(i<k){
    if(arr[i]==0){
        swap(arr,i,j)
        i++
        j++
    }
    else if(arr[i]==2){
        swap(arr,i,k)
        k--
    }else{
        i++
    }
}