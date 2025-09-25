let markstring = "95";


let mark = Number(markstring) ;


let rank;
switch (true){
    case (mark >= 90 && mark <=100):
        rank = "A";
        break;

    case (mark >= 75 && mark <= 89) :
        rank = "B" ;
        break;

    case (mark >= 50 && mark >= 0) :
        rank = "c" ;
        break;


    case (mark < 50 && mark >= 0) :
    rank = "Fail";
    break;

    default:
        rank = "Invalid marks";
        break;
    

}


console.log("Rank :",rank);