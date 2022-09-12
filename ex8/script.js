const car = parseInt(prompt('Car Value: '));

const tax = parseInt(car * 45 / 100);
const distributor = parseInt(car * 28 / 100);
const TotalA = tax + distributor
const carN = TotalA + car

document.write('the value of the new car is: ' + carN)