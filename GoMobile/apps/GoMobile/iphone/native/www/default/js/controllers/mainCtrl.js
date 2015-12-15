
/* JavaScript content from js/controllers/mainCtrl.js in folder common */
angular.module('app.mainCtrl', [])

.controller('MainController', function ($scope, Session) {
	console.log('MainCtrl');
	$scope.varx = "THIS!";
	$scope.folioActual = null;
	
	$scope.isLogged = function() {
		return Session.isLogged();
	};
	
	$scope.logout = function () {
		Session.cerrarSession();
		console.log($scope.varx);
		//$ionicHistory.clearHistory();
	};
	
	$scope.getUsuarioActual = function(){
		return Session.userId;
	};
	
	$scope.getFolioActual = function() {
		console.log('get>' + $scope.folioActual);
		return $scope.folioActual;
	};
	
	$scope.setFolioActual = function(folio) {
		$scope.folioActual = folio;
		console.log('set>' + $scope.folioActual);
	};
});