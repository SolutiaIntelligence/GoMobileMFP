
/* JavaScript content from js/controllers/loginCtrl.js in folder common */
angular.module('app.loginCtrl', ['service.login'])

.controller('LoginController', function ($rootScope, $scope, ServiceLogin, $state, $ionicHistory, Session, $ionicLoading) {
	console.log('login...');
	function resetUser () {
		$scope.user = {
			id: undefined,
			imei: undefined,
			update: false,
		};
	}
	
	$scope.login = function (user) {
		console.log(user);
		$ionicLoading.show({
		    template: 'Espera, por favor...'
		  });
		ServiceLogin.login(user).then(function (response) {
			 
			console.log('x');
			$rootScope.userIsLogged = true;
			console.log(response);
			console.log(response.invocationResult.loginResult);
			if(response.invocationResult.loginResult == 1) {
				Session.crearSession(user);
				console.log("Login exitoso!");
				$rootScope.id = user.id;
				//alert('Login exitoso');
			} else {
				//alert('Sumthing went wrong dude...');
			}
			$ionicLoading.hide();
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('app.home');
		}).fail(function (error) { 
			console.log('y');
			alert('error');
			$ionicLoading.hide()
		});
		resetUser();
	};
	
	

	resetUser();	
});