// let arrays = [12,"adinath",23.34, "student"];

// for(let value of arrays){
//     console.log(value);
// }

// let student = [ 'adinath chavan', 84.2, 8.9];

// student.push('dattawad');

// for(let value of student){
//     console.log(value);
// }

// let popValue = student.pop();
// console.log("popped value "+popValue);

let company = ["TCS", "Deloitee", "Infoysis", "Byjus"];

company.push("Amazon");

let index = company.indexOf("Infoysis");

company[index]="Uber";

company.shift();

console.log(company)