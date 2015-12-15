
/* JavaScript content from js/config.js in folder common */
angular.module('app.config', ['app.controllers', 'starter.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
	    url: '/app',
	    abstract: true,
	    templateUrl: 'views/menu.html',
	    controller: 'AppCtrl',
	    data: {
		    requireLogin: true
	    }
    })
  
  	.state('app.login', {
  		url: '/login',
  		views: {
  			'menuContent': {
  				templateUrl: 'views/login.html',
  				controller: 'LoginController',
  			}
  		},
	  	data: {
	  		requireLogin: false
	  	}
	})
	
	.state('app.home', {
  		url: '/home',
  		views: {
  			'menuContent': {
  				templateUrl: 'views/home.html',
  				controller: 'DetalleFoliosController'
  			}
  		}
	})

    .state('app.config', {
      url: '/configuracion',
      views: {
        'menuContent': {
          templateUrl: 'views/configuracion.html',
          //controller: 'PlaylistsCtrl'
        }
      }
    })
    
    .state('app.folios', {
      url: '/folios',
      views: {
        'menuContent': {
          templateUrl: 'views/folios.html',
          controller: 'FoliosController',
          controllerAs: 'ctrlFolios'
        }
      }
    })
    
    .state('app.folio-detalle', {
      url: '/folios/:folioId',
      views: {
        'menuContent': {
          templateUrl: 'views/detalle-folio.html',
          //controller: 'DetalleFoliosController',
          //controllerAs: 'ctrlFolios'
        }
      }
    });
  
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
