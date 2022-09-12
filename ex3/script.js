let sec = parseInt(prompt('nTempo do evento em segundos: '));

const hour = parseInt((sec / 3600));
const min = parseInt((sec % 3600) / 60);
sec = parseInt((sec % 60) % 60);

document.write('\n'+ hour + `hours`);
document.write('\n'+ min + `minutes`);
document.write('\n'+ sec + `seconds`);
