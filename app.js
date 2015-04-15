var app = angular.module('app', []);

app.controller('ResponseController', function($scope) {
	$scope.response = "";


	var responses = Array("Hmm... I'm not too sure.",
		"Yeah. I don't know.",
		"Brian might know.",
		"Object reference not set to instance of an object",
		"I'm busy.",
		"Have you tried Googling it?",
		"What are you talking about?",
		"I don't remember...",
		"I'm in a meeting. I'll come grab you after.");	

	$scope.ask = function() {
		var item = responses[Math.floor(Math.random()*responses.length)];
		$scope.response = item;
	}

	
});
