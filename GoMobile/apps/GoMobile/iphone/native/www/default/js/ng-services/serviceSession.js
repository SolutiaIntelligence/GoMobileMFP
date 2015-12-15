
/* JavaScript content from js/ng-services/serviceSession.js in folder common */
angular.module('service.Session', [])

.service('Session', function () {
	
	this.crearSession = function (user) {
		this.userId = user.id;
		this.userIsLogged = true;
	}
	
	this.cerrarSession = function() {
		this.userId = undefined;
		this.userIsLogged = undefined;
	}
	
	this.isLogged = function() {
		return (this.userIsLogged) ? true : false;
	}
});