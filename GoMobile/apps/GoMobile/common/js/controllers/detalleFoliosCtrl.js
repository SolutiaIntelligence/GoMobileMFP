angular.module('app.detalleFoliosCtrl', [])

.controller('DetalleFoliosController', function ($scope, $ionicHistory) {
	//$ionicHistory.clearHistory();
	console.log('detallesControllers');
	var radio = this;
	angular.element(document).ready(function () {
        
        console.log('borra-DETALLESx!!!');
    });
	
	this.estadoActivo = $scope.estadoActivo;
	$scope.cambiarEstado = function(radio) {
		console.log('cambio de estado>' + $scope.estadoActivo);
		console.log('cambio de estado>' + radio.estadoActivo);
	};
});