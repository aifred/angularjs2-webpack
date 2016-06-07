webpackJsonp([2],{

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(8);
	var router_deprecated_1 = __webpack_require__(281);
	var platform_browser_1 = __webpack_require__(177);
	var navigation_service_1 = __webpack_require__(321);
	var NavComponent = (function () {
	    function NavComponent(navigationService, titleService) {
	        this.titleService = titleService;
	        this.links = navigationService.getNavigations();
	    }
	    NavComponent.prototype.setTitle = function (newTitle) {
	        this.titleService.setTitle(newTitle);
	    };
	    Object.defineProperty(NavComponent.prototype, "diagnostic", {
	        // TODO: Remove this when we're done
	        get: function () {
	            return JSON.stringify(this.links);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NavComponent = __decorate([
	        core_1.Component({
	            selector: 'main-nav',
	            template: __webpack_require__(323),
	            styles: [__webpack_require__(324).toString()],
	            providers: [navigation_service_1.NavigationService],
	            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [navigation_service_1.NavigationService, platform_browser_1.Title])
	    ], NavComponent);
	    return NavComponent;
	}());
	exports.NavComponent = NavComponent;


/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// to be deleted
	var mock_navigationLink_1 = __webpack_require__(322);
	var NavigationService = (function () {
	    function NavigationService() {
	    }
	    NavigationService.prototype.getNavigations = function () { return mock_navigationLink_1.LINKS; };
	    return NavigationService;
	}());
	exports.NavigationService = NavigationService;


/***/ },

/***/ 322:
/***/ function(module, exports) {

	"use strict";
	exports.LINKS = [
	    { "name": "Dashboard", "routerLink": "Dashboard", "url": "http://google.com", "isActive": true, "isVisited": false },
	    { "name": "Boilerplate", "routerLink": "Boilerplate", "url": "http://google.com", "isActive": true, "isVisited": false },
	    { "name": "Link C", "routerLink": "Dashboard", "url": "http://google.com", "isActive": true, "isVisited": false },
	    { "name": "Link D", "routerLink": "Dashboard", "url": "http://google.com", "isActive": true, "isVisited": false }
	];


/***/ },

/***/ 323:
/***/ function(module, exports) {

	module.exports = "<ul>\n\t<li *ngFor=\"let link of links\">\n\t\t<a [routerLink]=\"[link.routerLink]\" (click)=\"setTitle(link.name)\" [ngClass]=\"{active:isActive, visited:isVisited}\">\n\t\t\t{{ link.name }}\n\t\t</a>\n\t</li>\n</ul>\n<!-- {{diagnostic}} -->";

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(325);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(318)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./nav.component.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./nav.component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(317)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"nav.component.css","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(8);
	var nav_component_1 = __webpack_require__(320);
	var BoilerplateComponent = (function () {
	    function BoilerplateComponent() {
	    }
	    BoilerplateComponent = __decorate([
	        core_1.Component({
	            selector: 'app-boilerplate',
	            template: __webpack_require__(330),
	            styles: [__webpack_require__(331).toString()],
	            directives: [nav_component_1.NavComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BoilerplateComponent);
	    return BoilerplateComponent;
	}());
	exports.BoilerplateComponent = BoilerplateComponent;


/***/ },

/***/ 330:
/***/ function(module, exports) {

	module.exports = "<div>\n\t<h1 class=\"bg-danger\">This is the boilerplate page</h1>\n\t<main-nav></main-nav>\n</div>";

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(332);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(318)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./boilerplate.component.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./boilerplate.component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(317)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"boilerplate.component.css","sourceRoot":"webpack://"}]);
	
	// exports


/***/ }

});
//# sourceMappingURL=2.chunk.js.map