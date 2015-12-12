Object.defineProperty(Object.prototype,'callby',{
	writable:true,
	enumerable:false,
	configurable:true,
	value:function(fn){
		// never handle if fn don't exist
		var f = fn;
		var value = this.valueOf();
		arguments[0] = typeof value==='object'? this : value;
		return f.apply(this,arguments);
	}
});
Object.defineProperty(Object.prototype,'applyby',{
	writable:true,
	enumerable:false,
	configurable:true,
	value:function(fn){
		var args = Array.prototype.slice.call(this).concat(Array.prototype.slice.call(arguments,1))
		return fn.apply(this,args);
	}
});
