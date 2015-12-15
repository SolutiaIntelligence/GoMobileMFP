
/* JavaScript content from js/controllers/foliosCtrl.js in folder common */
angular.module('app.foliosCtrl', ['service.folios'])

.controller('FoliosController', function ($rootScope, $scope, ServiceFolios, $ionicLoading) {
	console.log('folios...');
	$scope.variable = "Holiii";
	
	
	$ionicLoading.show({
		template: 'Espera, por favor...'
	});
	
	ServiceFolios.getFolios($rootScope.id)
	.then(function (response) {
		console.log('folios>>');
		console.log(response);
		if(response.invocationResult.getFoliosResult != null)
			$scope.folios = response.invocationResult.getFoliosResult;
		console.log($scope.folios);
		$scope.$apply();
		$ionicLoading.hide();
	}).fail(function (error) {
		console.log('fallo folios');
		$ionicLoading.hide();
	});
		
	
});