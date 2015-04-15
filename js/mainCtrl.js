var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

	$scope.addQuote = false;
	$scope.removeQuote = false;
	$scope.filterQuote = false;

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


	// $scope.addQuote = function(){
	// 	dataService.addQuote();

	// };
	// $scope.removeQuote = function(){
	// 	dataService.removeQuote();

	// };
	// $scope.filterQuote = function(){
	// 	dataService.filterQuote();
	// };


	// if ($scope.addQuote = true) {
	// 	$scope.removeQuote = false;
	// 	$scope.filterQuote = false;
	// }
	// else if ($scope.removeQuote = true) {
	// 	$scope.addQuote = false;
	// 	$scope.filterQuote = false;
	// }
	// else if ($scope.filterQuote = true) {
	// 	$scope.addQuote = false;
	// 	$scope.removeQuote = false;
	// }

});	// end app.controller

