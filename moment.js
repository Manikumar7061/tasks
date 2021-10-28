const moment = require('moment');
let m = moment();

console.log(m);
console.log(`local toString => ${m.toString()}`);
console.log(` UTC ISOString =>   ${m.toISOString()}`);