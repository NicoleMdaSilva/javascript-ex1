const a = parseInt(prompt('Valor A: '));
const b = parseInt(prompt('Valor B :'));
const c = parseInt(prompt('Valor C: '));

const r = Math.pow((a + b) ,2);
const s = Math.pow((b + c) ,2);
const d = (r + s) / 2

document.write(`The value of D is: ${d}`)