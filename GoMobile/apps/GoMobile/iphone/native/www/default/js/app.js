
/* JavaScript content from js/app.js in folder common */
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'app.config', 'app.mainCtrl', 'service.Session'])

.run(function($ionicPlatform, $rootScope, $state, Session) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
	  
    /*if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }*/
	  
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  console.log('INIT...');
  /*$rootScope.resetUser = function () {
	  $rootScope.userIsLogged = false;
	  $rootScope.id = undefined;
  }
  
  $rootScope.resetUser();
  
  $rootScope.isLogged = function() {
	  return $rootScope.userIsLogged;
  }*/
  
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
	    var requireLogin = toState.data.requireLogin;
	    //var valor = $rootScope.usuario == 'null';
	    console.log('requireLogin> ' + requireLogin + " - " + Session.isLogged());
	    //if (requireLogin && typeof $rootScope.usuarioActual === 'undefined') {
	    if (requireLogin && Session.isLogged() == false) {
	      //console.log("XXX");
	      //event.preventDefault(); 
	      // get me a login modal!
	      
	    	console.log('yup...');
	    	$state.go('app.login');
	    	event.preventDefault(); 
	    }
	});
	
	
	
	$rootScope.hideLogin = function() {
		if(!$rootScope.usuarioActual) {
			console.log("existe!!!");
			return 'ng-show';
		} else{
			console.log("no existe :c");
			return 'ng-hide';
		}
	}
	
	$rootScope.needsLogin = function(bool) {
		if(bool)
			return ($rootScope.usuarioActual) ? 'ng-show' : 'ng-hide';
		else
			return 'ng-show';
	}
});