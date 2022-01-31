//setting a variable of myAge to be my current age
let myAge = 34;

//setting an earlyyears variable to 2
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

//setting a variable of laterYears to subtract 2 years
let laterYears = myAge - 2;

//setting laterYears to mulitply by 4
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//setting varialbe of myAgeInDogYears to add early and later years
const myAgeInDogYears = earlyYears + laterYears;

//using the toLowerCase method to change my name to all lower case letters
const myName = 'Adam Mosher'.toLowerCase();

//console logging a string to tell my name and age in human years followed by my age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);