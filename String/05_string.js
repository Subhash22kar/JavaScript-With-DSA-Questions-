
// Question 4 check if string is pallindrome or not  without extra space


let  s = prompt("Enter a String")
let isPallindrome = true
let i = 0 , j = s.length-1;


while(i<j){

    if(s.charAt(i) != s.charAt(j)){
    isPallindrome = false;
    break
}

i++
j--

}
 if(isPallindrome)console.log("Pallindrome");
else console.log("no Pallindrome");

