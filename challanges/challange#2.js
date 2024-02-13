//challange#2

/*Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �*/

const markMass =78;
const markHeight =1.69;
const jhonMass =92;
const jhonHeight =1.95;

const markBMI= markMass/markHeight**2;
const jhonBMI= jhonMass/(jhonHeight*jhonHeight);
const markHigherBMI= markBMI > jhonBMI;

console.log(markBMI,jhonBMI, markHigherBMI)

if(markBMI>jhonBMI){
    console.log("markBMI =" + markBMI + " is heigher than jhonBMI =" + jhonBMI );
}
else{
    console.log("markBMI =" + markBMI + " is less than jhonBMI =" + jhonBMI );
}

// this is the second challange..