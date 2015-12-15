angular.module('service.folios', ['invokeAdapter'])

.service('ServiceFolios', function (invokeProcedure) {

	var requestFolios = function (id) {
		return invokeProcedure.invoke('account', 'getFolios', id);
	};
	
	return {
		getFolios: requestFolios
	}
});