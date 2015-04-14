var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

	$scope.getData = function(){
		$scope.quotes = dataService.getData();
	};
	$scope.getData();

	$scope.addData = function(){
		dataService.addData($scope.newQuote, $scope.newAuthor);
		$scope.getData();	
	};

	$scope.removeData = function(){
		dataService.removeData($scope.remQuote);
		$scope.getData();
	};

});	// end app.controller

