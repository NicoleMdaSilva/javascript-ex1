const n1 = parseInt(prompt('Type your note 1: '));
const n2 = parseInt(prompt('Type your note 2: '));
const n3 = parseInt(prompt('Type your note 3: '));

const media = Math.round((n1 + n2 + n3) / 3);

document.write('Your media is: ' + media)