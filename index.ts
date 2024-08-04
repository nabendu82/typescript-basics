//Numbers
let myNum = 10;
let anotherNum: number = 20;

myNum = 12;
myNum = '22';

anotherNum = 30;
anotherNum = false;

//String
let myStr: string = 'Hello';
let anotherStr = 'World';

myStr = true;
anotherStr = 45;

//Boolean
let myBool: boolean = true;
let anotherBool = false;

myBool = 'true';
anotherBool = 76;

//Objects
const developer = {
    firstName: 'Nabendu',
    age: 42,
    isDeveloper: true
}

const newDeveloper: { firstName: string; age: number; isDev: boolean} = {
    firstName: 'Nabendu',
    age: 42,
    isDev: true
}

newDeveloper.age = 'Fourty';
newDeveloper.lastName = 'Biswas';

//Arrays
const languages = ['React', 'Angular', 'Vue'];
languages.push(54);

const numbers: number[] = [54, 67, 78];
numbers.push(true);

//Functions
const addNums = (num1, num2) => {
    return num1 + num2;
}

addNums(10, 27);
addNums(10, '27');

const multiNums = (num1: number, num2: number) => {
    return num1 * num2;
}

multiNums(10, 27);
multiNums(10, '27');

const modNums = (num1: number, num2: number): number => {
    // return num1 % num2;
    return num1 > num2
}

// Number modNums(Number num1, Number num2) {
//     return num1 % num2;
// }

// void modNums(Number num1, Number num2) {
//     printf(num1 % num2);
// }

modNums(10, 27);
modNums(10, '27');

const printSum = (num1: number, num2: number): void => {
    console.log(num1 + num2);
}

printSum(10, 27);
printSum(10, '27');

//Union types
let numOrStr: number | string;
numOrStr = 10;
numOrStr = 'Ten';