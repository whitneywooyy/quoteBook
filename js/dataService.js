var app = angular.module('quoteBook');

app.service('dataService', function(){
	var quotes = [
		{ text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse' },
	    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill' },
	    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' },
	    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost' },
	    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart' },
	    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon' },
	    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis' },
	    { text: 'Dallins life lessons', author: 'sir Dallin Crane of Gilderland'}
	];
	this.getData = function(){
		return quotes;
	};
	this.addData = function(textInput, authorInput){
		console.log("Display: ", textInput, " & ", authorInput);
		var quote = {
			text: textInput,
			author: authorInput
		};
		if (!textInput || !authorInput) {
			console.log("Sorry, you must enter both a quote and its author!");
			return;
		}
		else {
			quotes.push(quote);
		}
	};
	this.removeData = function(textInput){
		console.log("You want to remove ", "'", textInput, "'");
		for (var i = 0; i < quotes.length; i++) {
			if (textInput === quotes[i].text) {
				quotes.splice(i, 1);
			}
		}
		console.log("You have removed ", textInput);		
	};
	// this.addQuote = function(){
	// 	if 
	// };

});	// end app.service