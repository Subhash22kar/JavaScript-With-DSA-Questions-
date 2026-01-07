// Print "hello World" 10 times using recursion

function  temp(n){
   if(n == 0) return;
    console.log("hello World");
    temp(n-1);
    
}

temp(10);