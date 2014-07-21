require.config({
	shim:{
		'dep/underscore': {
            exports: '_'
        },
        'dep/jquery' : {
        	exports: '$'	
        }
	}
});
define(['dep/jquery', 'dep/underscore'],function($, _){
	var yu = function(){};

	yu.version = '0.0.1';

	yu.model = function(){
		//this.autoFill = false;
		this.data = {}

		this.events = []

		this.template = ""

		this.css = ""

	}

	yu.model.factory = function(source){
		var me = new this
		//_this.storeage = {}
		for(var key in source){
			me[key] = source[key]
		}
		return me 
	}

	yu.model.prototype.setTemplate = function(template, container){
		
		var list = "<% _.each(template_source, function(data) { %> <li><%= data.name %></li><li><%= data.score %></li> <% }); %>"
		var tem = _.template(list, {template_source: this.data})
		$(container).append(tem)

		this.template = template

		this.container = container
	}

	yu.model.prototype.setCss = function(css){
		this.css = css
		$(this.container).append('<style>'+css+'</style>')
	}

	yu.model.prototype.setEvents = function(events){
		this.events = events
		for(var i = 0,l = events.length;i < l;i++){
			$(events[i].element).on(events[i].event,events[i].function)
		}
	}

	yu.model.prototype.setData = function(data){
		this.data = data
	}

/*
	yu.model.prototype = {
		get : function(prop){
			return this.storeage[prop]
		},
		set : function(prop, value){
			this.storeage[prop] = value
		}
	}

	yu.view = function(father, data){
		this.storeage = data
		this.container = ""
		this.template = ""
	}

	yu.view.factory = function(source){
		var tis = new this
		for(var key in source){
			tis[key] = source[key]
		}

		return tis
	}

	yu.view.prototype = {
		render : function(){
			var tt = _.template(this.template)
			$(this.container).append(tt(this.storeage))
			if(this.events){
				for(var key in this.events){
					$(key).on(this.events[key][0],this.events[key][1])
				}
			}
		}
	}

	yu.station = function(){

	}

	yu.station.train = function(from, to){
		for(var key in from.storeage){
			to.storeage[key] = from.storeage[key]
		}

		to.render()
	}
*/
	return yu
})