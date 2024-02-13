// challange#1.

/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/



// const markMass =78;
// const markHeight =1.69;
// const jhonMass =92;
// const jhonHeight =1.95;  DATA 1.

const markMass =95;
const markHeight =1.88;
const jhonMass =85;
const jhonHeight =1.76;  // DATA 2.

//Calculate  the  BMI  of mark and jhon 
/* formula markBMI=mass/height**2 
   formula jhonBMI=mass/(height * height) */

   const markBMI= markMass/markHeight**2;
   const jhonBMI= jhonMass/(jhonHeight*jhonHeight);
   const markHigherBMI= markBMI > jhonBMI;
    
   console.log(markBMI,jhonBMI, markHigherBMI)
   
//    this is the challange 1.
