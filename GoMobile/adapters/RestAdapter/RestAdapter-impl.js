function login(user, pass) {
	path = 'GoMobileRest/RestServiceImpl.svc/login/';
	
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path,
	    parameters : {
	    	'usuario' : user,
	    	'password' : pass
	    }
	};
	
	
	return WL.Server.invokeHttp(input);
}

function getFolios(user){
	path = 'GoMobileRest/RestServiceImpl.svc/folios/';
	
	var input = {
			method : 'get',
			returnContentType : 'json',
			path : path,
			parameters : {
				'id' : user
			}
	};
	
	return WL.Server.invokeHttp(input);
}

function getCurrentState(folio){
	path = 'GoMobileRest/RestServiceImpl.svc/json/';
	
	var input = {
			method : 'get',
			returnContentType : 'json',
			path : path,
			parameters : {
				'folio' : folio			
			}
	};
	
	return WL.Server.invokeHttp(input);
} 

function setEvento(folio,evento,excepcion,fecha,hora,latitud,longitud,reglas){
path = 'GoMobileRest/RestServiceImpl.svc/eventos/';
	
	var input = {
			method : 'get',
			returnContentType : 'json',
			path : path,
			parameters : {
				'folio' : folio,
				'evento' : evento,
				'excepcion' : excepcion,
				'fecha' : fecha,
				'hora' : hora,
				'latitud' : latitud,
				'longitud' : longitud,
				'reglas' : reglas
			}
	};
	
	return WL.Server.invokeHttp(input);
}

