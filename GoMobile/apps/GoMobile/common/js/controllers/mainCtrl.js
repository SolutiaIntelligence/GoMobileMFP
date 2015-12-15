angular.module('app.mainCtrl', [])

.controller('MainController', function ($scope, Session, $ionicLoading, ServiceFolios) {
	console.log('MainCtrl');
	$scope.varx = "THIS!";
	$scope.folioActual = null;
	$scope.folios = {};
	
	$scope.isLogged = function() {
		return Session.isLogged();
	};
	
	$scope.logout = function () {
		Session.cerrarSession();
		$scope.folios = {};
		$scope.estadoActivo = -1;
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
		$scope.estadoActivo = -1;
		//Buscar por el Estado Actual del Folio a cargar
		for(i = 0; i < $scope.folios.length; i++) {
			if($scope.folios[i].folio == folio) {
				$scope.estadoActivo = $scope.folios[i].estado;
				break;
			}
		}
		
		//console.log('set>' + $scope.folioActual);
	};
	
	$scope.getFolios = function() {
        console.log('Entro al getFolios() - MainCtrl');
		var id = $scope.getUsuarioActual();
		if(id != undefined) {
			$ionicLoading.show({
				template: 'Espera, por favor...'
			});
			
			ServiceFolios.getFolios(id)
			.then(function (response) {
				console.log('folios>>');
				console.log(response);
				if(response.invocationResult.getFoliosResult != null)
					$scope.folios = response.invocationResult.getFoliosResult;
				else
					$scope.folios = [];
				console.log($scope.folios);
				console.log('size> ' + $scope.folios.length);
				//$scope.$apply();
				$ionicLoading.hide();
			}).fail(function (error) {
				console.log('fallo folios');
				$ionicLoading.hide();
			});
		}
	}
});