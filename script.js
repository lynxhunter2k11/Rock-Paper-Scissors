

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

console.log(AIchoice())

//function to take player input or Rock PAPAER scissors in any case 
//convert to all lowercase (or any chosen case)





//function to output win or lose
//AIchoice to player choice
//9 total possible outcomes due to 3 x 3 combinations
// all draws can be completed on same line
let plychoice = 'rock';

lose = 0;
draw = 0;

console.log(win);
console.log(lose);
console.log(draw);
console.log(plychoice);


for (let win = 0; win < 5 ){

    function winner(plychoice, AIchoice){
        if (plychoice === 'rock' && AIchoice() === 'scissors' ||
            plychoice === 'paper' && AIchoice() === 'rock' || 
            plychoice === 'scissors' && AIchoice() === 'paper'){
            win++;   
            console.log(win);
        }   
        else if(plychoice === 'rock' && AIchoice() === 'paper' ||
                plychoice === 'paper' && AIchoice() === 'scissors' ||
                plychoice === 'scissors' && AIchoice() === 'rock'){
            lose++;   
            console.log(lose);
        }
        else if(plychoice === AIchoice()){
            draw++; 
            console.log(draw);
        }
        return { win, lose, draw
        }
       
    }
    console.log(winner(plychoice, AIchoice))

console.log(win);
console.log(lose);
console.log(draw);
}


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