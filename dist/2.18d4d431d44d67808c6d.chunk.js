webpackJsonp([2],{319:function(e,t,i){"use strict";var n=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,s=3>r?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(3>r?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},o=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=i(7),s=i(280),a=i(176),c=i(320),l=function(){function e(e,t){this.titleService=t,this.links=e.getNavigations()}return e.prototype.setTitle=function(e){this.titleService.setTitle(e)},Object.defineProperty(e.prototype,"diagnostic",{get:function(){return JSON.stringify(this.links)},enumerable:!0,configurable:!0}),e=n([r.Component({selector:"main-nav",template:i(322),styles:[i(323).toString()],providers:[c.NavigationService],directives:[s.ROUTER_DIRECTIVES]}),o("design:paramtypes",[c.NavigationService,a.Title])],e)}();t.NavComponent=l},320:function(e,t,i){"use strict";var n=i(321),o=function(){function e(){}return e.prototype.getNavigations=function(){return n.LINKS},e}();t.NavigationService=o},321:function(e,t){"use strict";t.LINKS=[{name:"Dashboard",routerLink:"Dashboard",url:"http://google.com",isActive:!0,isVisited:!1},{name:"Boilerplate",routerLink:"Boilerplate",url:"http://google.com",isActive:!0,isVisited:!1},{name:"Link C",routerLink:"Dashboard",url:"http://google.com",isActive:!0,isVisited:!1},{name:"Link D",routerLink:"Dashboard",url:"http://google.com",isActive:!0,isVisited:!1}]},322:function(e,t){e.exports='<ul>\n	<li *ngFor="let link of links">\n		<a [routerLink]="[link.routerLink]" (click)="setTitle(link.name)" [ngClass]="{active:isActive, visited:isVisited}">\n			{{ link.name }}\n		</a>\n	</li>\n</ul>\n<!-- {{diagnostic}} -->'},323:function(e,t,i){var n=i(324);"string"==typeof n&&(n=[[e.id,n,""]]);i(317)(n,{});n.locals&&(e.exports=n.locals)},324:function(e,t,i){t=e.exports=i(316)(),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"nav.component.css",sourceRoot:"webpack://"}])},328:function(e,t,i){"use strict";var n=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,s=3>r?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(3>r?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},o=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=i(7),s=i(319),a=function(){function e(){}return e=n([r.Component({selector:"app-boilerplate",template:i(329),styles:[i(330).toString()],directives:[s.NavComponent]}),o("design:paramtypes",[])],e)}();t.BoilerplateComponent=a},329:function(e,t){e.exports='<div>\n	<h1 class="bg-danger">This is the boilerplate page</h1>\n	<main-nav></main-nav>\n</div>'},330:function(e,t,i){var n=i(331);"string"==typeof n&&(n=[[e.id,n,""]]);i(317)(n,{});n.locals&&(e.exports=n.locals)},331:function(e,t,i){t=e.exports=i(316)(),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"boilerplate.component.css",sourceRoot:"webpack://"}])}});
//# sourceMappingURL=2.18d4d431d44d67808c6d.chunk.js.map