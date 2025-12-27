

// Bijli Bill


// let unit = Number(prompt("Enter  electricity unit"));

// let  amount = 0;

// if(unit >= 700 || amount != 300){
//      console.log((300*13) + (200*8) + (100*6) + (100*4));
     
// }  if (unit = 300 || amount != 200) {
 
//     console.log((200*8) + (100*6) + (100*4));
    
// } if( unit = 200 || amount != 100){
   
//     console.log((100*6) + (100*4));
    
// }  if(unit = 100){

//   console.log(100*4);
  
// } else{
//     console.log("Invali input");
    
// }



let unit = Number(prompt("Enter electricity unit")); //700

let amount = 0;

if(unit>400){

    amount = (unit - 400) * 13 // 3900

    unit = 400
} // 400
if(unit>200 && unit<=400){

    amount += (unit - 200) * 8 // 1600

    unit = 200
}200
if(unit>100 && unit<=200){

    amount += (unit - 100) * 6 // 600

    unit = 100
}

amount += unit*4;

console.log(amount);



