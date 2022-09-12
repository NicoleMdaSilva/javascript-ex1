const x1 = parseInt(prompt('Valor x1'));
const x2 = parseInt(prompt('valor x2'));
const y1 = parseInt(prompt('Valor y1'));
const y2 = parseInt(prompt('Valor y2'));

const d = Math.round(Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1) , 2))));


document.write('Total is ' + d)