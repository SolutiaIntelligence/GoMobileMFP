angular.module('invokeAdapter', [])

.service('invokeProcedure', function () {

	var invoke = function (pAdapter, pProcedure, pParameters) {
		
		var invokeData = {
				adapter : pAdapter,
				procedure : pProcedure,
				parameters : [pParameters]
		};
		
		return WL.Client.invokeProcedure(invokeData);
	};
	
	return {
		invoke: invoke
	}
});