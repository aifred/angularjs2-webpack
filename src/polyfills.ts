import 'reflect-metadata';
import 'zone.js/dist/zone';
// Typescript emit helpers polyfill
import 'ts-helpers';


if(process.env.ENV === 'PROD') {
	// Production
} else {
	// Development
	console.log(process.env.ENV);
	Error['stackTraceLimit'] = Infinity;
	require('zone.js/dist/long-stack-trace-zone');
}
