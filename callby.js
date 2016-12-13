(function(){
	var call = function(fn){
		var f = fn;
		var value = this.valueOf();
		arguments[0] = typeof value==='object'? this : value;
		return f.apply(this,arguments);
	};
	var apply = function(fn){
		return fn.apply(this,Array.from(this).concat(Array.prototype.slice.call(arguments,1)));
	}
	if(Object.defineProperty){
		Object.defineProperty(Object.prototype,'callby',{
			writable:true,
			enumerable:false,
			configurable:true,
			value:call
		});
		Object.defineProperty(Object.prototype,'_',{
			writable:true,
			enumerable:false,
			configurable:true,
			value:call
		});
		Object.defineProperty(Object.prototype,'applyby',{
			writable:true,
			enumerable:false,
			configurable:true,
			value:apply
		});
	}else{
		Object.prototype.callby = call;
		Object.prototype._ = call;
		Object.prototype.applyby = apply;
	}
})()
