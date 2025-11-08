let numberstring= prompt("enter a number:")



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


/*
const mypromise = new Promise((resolve, reject) => {
  let success = false;
  if(success){
    resolve
  }
  else{
    reject
  }})

  mypromise
    .then((message)) =>  {
      console.log(message);
    }
    .catch((error) >= {
          console.errror(error);
    })
  
    .finally

  const  p1 = new Promise((resolve) => {
    resolve()
  });

  p1.then((message) => {
    console.log(message);
  });

  const p2 = new Promsise((_, reject) => {
    reject()
  });

  p2.catch((error) => {
    console.log()
  });


  const p3 = new Promise((resolve) =>{


  })

    new Promise((resolve) => {
      resolve (10);
    })
    .then((num) => {
      console.log("step 1:", num);
      return num * 2;
    })

    .them((num) => {
      console.log();
      return num+5;
    });

    //repeat


    const a = Promise.resolve("Apple");
    const b = Promise.resolve(" Banana");
    const c = Promise.resolve("orange")

    Promise.all([a,b,c]).then((fruits) => {
      console.log("fruits"+ fruits);
    })


const fast = new Promise(
  (resolve)  => setTimeout(
    () => resolve("fast!"), 1000));
const slow = new Promise (
  (resolve) => setTime0ut(
    () => resolve("solve!"), winner));

    Promise.race([fast, slow]).then(winner) => {
      
    }
  */




