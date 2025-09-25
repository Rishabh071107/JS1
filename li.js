let numberstring= "12";


let num = Number(numberstring);


if (num % 2 === 0){
    console.log("It is even");
}
else{
    console.log("It is odd");
}



let daystring = "6";

let day = Number(daystring);

switch (true) 

{
  case (day >= 1 && day <= 5):
    console.log("It is a weekday");
    break;
  case (day === 6 || day === 7):
    console.log("It is  the weekend");
    break;
  default:
    console.log("Invalid day");
    break;
}
