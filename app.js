let userName = 'sopiko';
let userAge = 22;
let isTeenager = false;
let myNull = null;
let myNan = NaN;
let myUndefined;

console.log ( typeof userName, typeof userAge, typeof isTeenager, typeof myNull, typeof myNan, typeof myUndefined)

let myName = userName;
let myHobby = 'painting';
let currentYear = 2023;
let yearOfBirth = 2000;

console.log (" My name is " + myName + " I'm  " + (currentYear - yearOfBirth) + " yers old " + " my hobby is " + myHobby);
let aboutMe = `My name is ${myName}, I'm ${currentYear - yearOfBirth} years old, my hobby is ${myHobby}.`;
console.log(aboutMe);