import "babel-polyfill";
import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');

if(process.env.ENV === 'PROD') {
	// Production
} else {
	// Development
	console.log(process.env.ENV);
	Error['stackTraceLimit'] = Infinity;
	require('zone.js/dist/long-stack-trace-zone');
}
