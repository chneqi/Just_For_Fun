(function(){
	var call = function(fn){
		var f = fn;
		var value = this.valueOf();
		arguments[0] = typeof value==='object'? this : value;
		return f.apply(this,arguments);
	};
	var apply = function(fn){
		return fn.apply(this,Array.from(this).concat(Array.prototype.slice.call(arguments,1)));
	};
	var _ = function(){
		var f = arguments[arguments.length-1];
		var value = this.valueOf();
		arguments[0] = typeof value==='object'? this : value;
		return f.apply(this,[this].concat(Array.prototype.slice(arguments,arguments.length-1)));
	};
	if(Object.defineProperty){
		Object.defineProperty(Object.prototype,'callby',{
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
		Object.defineProperty(Object.prototype,'_',{
			writable:true,
			enumerable:false,
			configurable:true,
			value:_
		});
	}else{
		Object.prototype.callby = call;
		Object.prototype.applyby = apply;
		Object.prototype._ = _;
	}
})()
