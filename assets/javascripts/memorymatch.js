$(document).ready(function() {


// If both items match, alert the user and keep showing those cards
// If both items don't match, hide the values again and alert the user
// Alert the user that they won once that matched all the items on the board

var $cards = $('.card-div');
var cardOne, cardTwo;
var allCards =['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8'];
var memoryValues = [];
var tilesFlipped = 0;

$cards.click(function(cardOne, cardTwo) {
  $(this).removeClass('button');

function flipCard(value) {
if (memoryValues.length < 2) 
if(memoryValues.length === 0){
			memoryValues.push(val);
		} else if(memoryValues.length === 1){
			memoryValues.push(val);
			if(memoryValues[0] == memoryValues[1]){
				tilesFlipped += 2;
}
				memoryValues = [];
        
				// Check to see if the whole board is cleared
				if(tilesFlipped === allCards.length){
					alert("Board cleared");
          newBoard();
        }
} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var cardOne = document(value[0]);
				    var cardTwo = document(value[1]);
				   
				    memoryValues = [];
            	   
				}
				setTimeout(flip2Back, 700);
		}
	}



});
