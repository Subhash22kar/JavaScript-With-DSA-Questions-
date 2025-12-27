

// problem 1 You are a Valid Voter

let ans = Number(prompt("What is your age ?"));

if(isNaN(ans)){
    console.log("Wrong input");
    
}

else if(ans >= 18){
    console.log("You can vote");
    
} else{
    console.log("You can not Vote");
    
}
