// STACKS!

// function: push, pop, peek, lenght

var letters = []; // this is our stack

var word = "racecar"

var reword = "";

// put letters of word into stack

for (var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

// pop off the stack in reverse order

for (let i = 0; i < word.length; i++) {
    reword += letters.pop();
    
}

if(reword === word){
    console.log(word + "is a palindrome");
    
}
else{
    console.log(word + "is not a palindrone.")
}
