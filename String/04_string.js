
// Question 4  check if string is pallindrome or not

// madam , malayalam, naman , abba  start


let name = prompt("Enter a string")
let rev = "";

for(let i = name.length-1; i>=0; i--){

    rev = rev + name.charAt(i);

}

if(rev == name)console.log("pallindrome");
else console.log("not pallindrome");
