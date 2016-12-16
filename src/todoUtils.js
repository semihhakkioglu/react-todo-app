var todoUtils = {
	store : function(key, data){
		if(data){
			localStorage.setItem(key,data);
		}
	}
}