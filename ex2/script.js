const ageDspring = prompt('Type your age in days: ');
let ageD = Number(ageDspring)
let ageM
let ageY

ageY = parseInt(ageD / 365)
ageM = parseInt((ageD % 365) / 30)
ageD = parseInt((ageD % 365) % 30)

document.write(`Your age is ${ageY} years, ${ageM} Months and ${ageD} days.`);