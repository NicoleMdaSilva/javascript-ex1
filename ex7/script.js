const a = parseInt(prompt('Value a: '));
const b = parseInt(prompt('Value b: '));
const c = parseInt(prompt('Value c: '));
const d = parseInt(prompt('Value d: '));
const e = parseInt(prompt('Value e: '));
const f = parseInt(prompt('Value f: '));

const x = ((c * e) - (b * f)) / ((a * e) - (b * d));
const y = ((a * f) - (c * d)) / ((a * e) - (b * d));

document.write('The value of X is: ' +  x);
document.write('The value of Y is: ' + y)

