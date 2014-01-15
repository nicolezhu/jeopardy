// javascript file
var jeopardy = (function() {
        var questions = [ {'text': 'Walter and Jesse make meth with this distinctive color',
                           'answer': 'blue',
                           'pointValue' : 100},
                          {'text': 'This food was thrown onto the roof of a house',
                           'answer': 'pizza',
                           'pointValue' : 100},
                          {'text': 'Jesse confused this poison for rice and beans',
                           'answer': 'ricin',
                           'pointValue' : 100},
                          {'text': 'Walter masquerades as a drug kingpin under this name',
                           'answer': 'heisenberg',
                           'pointValue' : 100} ,
                           {'text' : 'This fast food chain is not what it seems',
                           'answer' : 'los pollos hermanos',
                           'pointValue' : 100},
                           {'text' : 'Jesse uses this swear word most',
                           'answer' : 'bitch',
                           'pointValue' : 100},
                           {'text' : 'Walt Jr. prefers this nickname',
                           'answer' : 'flynn',
                           'pointValue' : 100},
                           {'text' : 'The initials W.W. stand for Walter White and this famous poet',
                           'answer' : 'walt whitman',
                           'pointValue' : 100},
                           {'text' : 'Hank collects these "rocks"',
                           'answer' : 'minerals',
                           'pointValue' : 100},
                           {'text' : 'When in trouble, you better call',
                           'answer' : 'saul',
                           'pointValue' : 100},
                           {'text' : 'Walter is a co-founder of this company',
                           'answer' : 'gray matter',
                           'pointValue' : 100},
                           {'text' : 'Skyler helps launder drug money through a carwash with this motto',
                           'answer' : 'have an a1 day',
                           'pointValue' : 100},
                           {'text' : 'No more questions!',
                            'answer' : 'End',
                            'pointValue' : 0}];
        var exports = {};
        var score = 0;
        var currentQuestion = 0;
 
        function displayScore(){
            // displays the score
            $('.score').text(score);
        }

        function onEnter(){
            // submits answer if 'enter' key is pressed
            $('.answerBox').keypress(function(event){
                if(event.keyCode == 13 && event.target.className == 'answerBox'){
                    $('#answerButton').click();
                    return false;
                }
            });
        }

        function buttonClick(){
          // submits answer if button is clicked
          $('#answerButton').click(function() {
            checkAnswer();
          });
        }
 
        function checkAnswer(){
            // 1. checks if something is the correct answer (input is case insensitive)
 			      if($('.answerBox').val().toLowerCase() == questions[currentQuestion].answer){
 				     
             // 2. if it is, increment the score and call displayScore, move on to next question and clear answer field
 				       alert("Correct!");
 				       score+=questions[currentQuestion].pointValue;
 				       displayScore();
 				       currentQuestion++;
              $('.answerBox').val("");
 			      } else {
 				     
             // 3. regardless, move on to next question and clear answer field
 				       alert("Incorrect. The correct answer was: " + questions[currentQuestion].answer + ".");
 				       currentQuestion++;
              $('.answerBox').val("");
 			      }
 			    displayQuestion();
        }
 
        function displayQuestion(){
            // displays the current question
            $('.question').text(questions[currentQuestion].text);
        }
 
        function setup(){
            // makes answer field active on page load
            $('.answerBox').focus();

            // show the first question.
            displayQuestion();
 
            // show the score.
            displayScore();
            
            // allow answers to be submitted if 'enter' key is pressed
            onEnter();

            // allow answers to be submitted if button is clicked
            buttonClick();
        }
 
        exports.setup = setup;
        return exports;
   })();

$(document).ready(function(){
        jeopardy.setup();
    });
