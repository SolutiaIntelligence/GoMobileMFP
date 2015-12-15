
/* JavaScript content from js/ng-services/serviceLogin.js in folder common */
angular.module('service.login', ['invokeAdapter'])

.service('ServiceLogin', function (invokeProcedure) {

	var requestLogin = function (user) {
		/*console.log('supx');
		console.log(user);
		
		var invokeData = {
				adapter : 'account',
				procedure : 'login',
				parameters : [user]
		};
		
		var options = {
				//onSuccess: loginSuccess,
				//onFailure: loginFailure,
				//invocationContext:{'action':'login'}
				invocationContext: {}
		};
		console.log('here');
		return WL.Client.invokeProcedure(invokeData);*/
		console.log('just about to...');
		return invokeProcedure.invoke('account', 'login', user);
		
	};
	
	return {
		login: requestLogin
	}
});