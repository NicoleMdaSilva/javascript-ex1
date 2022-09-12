
const ageYspring = prompt("type your age: ");
const  ageY = Number(ageYspring);
const ageMsprint = prompt("Months? ");
const ageM = Number(ageMsprint)
const ageDsprint = prompt("Days?" );
const ageD = Number(ageDsprint)

let ageT

ageT = ageD + (ageY * 365) + (ageM * 30);

document.write("Your age in days is: " + ageT);





