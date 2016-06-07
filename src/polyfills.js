"use strict";
require('core-js/es6');
require('reflect-metadata');
require('zone.js/dist/zone');
require('systemjs/dist/system-polyfills.src.js');
if (process.env.ENV === 'production') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map