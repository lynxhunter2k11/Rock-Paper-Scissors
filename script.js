

//Fuction for computer to randomly choice between rock paper and scissors//
 function AIchoice(){
    let x = Math.random();
    if (0 <= x && x < 1/3){
        rps = 'rock';
    }
    else if (1/3 <= x && x < 2/3){
        rps = 'paper';
    }
    else{
        rps = 'scissors';
    } 
    return rps
}



//function to take player input or Rock PAPER scissors in any case 
//convert to all lowercase (or any chosen case)

function plyChoice(){
    let rpsPlayer = prompt("Rock, Paper, Scissors?").toLowerCase();
    if (rpsPlayer === 'rock'|| rpsPlayer === 'paper'|| rpsPlayer === 'scissors'){
        return rpsPlayer;
    }
    else { 
        alert('please enter rock, paper or scissors');
        plyChoice();
    }
}


//function to output win or lose
//AIchoice to player choice
//9 total possible outcomes due to 3 x 3 combinations
// all draws can be completed on same line


var rounds = 5; 
// this will control best of 5 etc 
// future implementation of function to request rounds from player


// potental to keep score in an array

const score = [win = 0, lose = 0, draw = 0];
console.log(score);



//function play(plychoice, AIchoice){
   for (win = 0, lose = 0; win < 5, lose < 5;){

        function winner(plychoice, AIchoice){
            console.log('NPC '+ AIchoice);
            console.log('PC '+ plychoice);
            if (plychoice == 'rock' && AIchoice == 'scissors' || // and / or statements work
                plychoice == 'paper' && AIchoice == 'rock' || 
                plychoice == 'scissors' && AIchoice == 'paper'){
                win++;                                          // adding 1 doesnt work
                return {win, lose, draw};
            }   
            else if(plychoice == 'rock' && AIchoice == 'paper' ||
                    plychoice == 'paper' && AIchoice == 'scissors' ||
                    plychoice == 'scissors' && AIchoice == 'rock'){
                lose++;   
                return {win, lose, draw};
            }
            else if(plychoice == AIchoice){
                draw++; 
                return {win, lose, draw};
            }
            
            score2 = [win, lose, draw];
            return score2;
            
            
            
        }
       
        console.log(winner(AIchoice(), AIchoice())) // both set to AI for testing
    }
        

//    }
//   return {win, lose, draw};

 
// }


// switch statement

/*switch (score){
    case (5, *, *);
        console.log()
        break;
}
*/


/* function finalWinner(){
    if (win === rounds){
        return 'You have won';
    
        //stop further loops
        //reset
    }
    else if (lose === rounds){
        return 'You have lost';
        //stop further loops
        // reset
    }
    else {}//continue
}

console.log(finalWinner(play()));

*/

//function to loop for 5 wins or 5 loses and then reset 
//count wins and loses and draws
//output overall winner or loser 





/*Possible other solution:

if I could set Rock Paper and Scissors each to be a variable (rather than string)
and then write a funtion that interprets the rules of RPS
ie, rock beats scissor, scissor beats paper, paper beats rock, same draws
and then compare results independent of inputter and assign win to the correct inputter

this is above my current abilities but is interesting to think on
this approach would be important for significantly more complex problems, with more variations or more players
*/