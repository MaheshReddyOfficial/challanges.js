
// challange#3.

/*There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/

let dolphins_score=(96+108+89)/3; // average
let koalas_score=(88+91+110)/3;


console.log(dolphins_score,koalas_score);

/*here the main points to observe 1.match wiil be win or loose 
                                  2.match will be draw */
// step-1 and step-2 (DATA 1).                                 

if(dolphins_score>koalas_score){
    console.log("Dolphins are the winners");
    }else {
        console.log( "Koalas  are  the Winners");
    }

// Bonus 1 and  Bonus 2 (Data Bonus 1 & Data Bonus 2).
  
const dolphinscore= (97+112+101) /3;
const koalasscore= (109+95+123) /3;
 console.log(dolphinscore , koalasscore);

//  100 is the rule  here. if in case the minimum score will be less than 100  then , it will print no one win the match.

 if(dolphinscore>koalasscore   && dolphinscore>=100 ) { 
    console.log('Dolphins won the game');
} else if(koalasscore > dolphinscore && koalasscore >=100) {
    console.log('Koalas won the game') ;
 }else if (dolphinscore == koalasscore && dolphinscore>=100  && koalasscore>=100 ){
    console.log ('The match is drawn');
} else{
    console.log ("No one won the game");
 }


