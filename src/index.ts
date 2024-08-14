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

//Enum
enum Role { ADMIN, READ_ONLY, AUTHOR }

const myRole = Role.ADMIN;
const simpleRole: Role = Role.AUTHOR;

//Optionals
let opsObj: { name: string, age?: number } = {
    name: 'Nabendu'
}

//Interfaces
interface Developer {
    name: string;
    age: number;
    isDev: boolean;
}

const person1: Developer = {
    name: 'Nabendu',
    age: 42,
    isDev: true
}

const person2: Developer = {
    name: 'Shikha',
    age: 42,
    isDev: false
}

//Types
type DeveloperType = {
    name: string;
    age: number;
    isDev: boolean;
}

const person3: DeveloperType = {
    name: 'Parag',
    age: 42,
    isDev: false
}

type PersonName = string;
const person4: PersonName = 'Nabendu';

type CoderType = {
    name: string;
    category: 'frontend' | 'backend' | 'mobile';
    age: number;
}[]

const coders: CoderType = [
    { name: 'Nabendu', category: 'backend', age: 42 },
    { name: 'Mousam', category: 'frontend', age: 42}
]

//Classes
class CreateRoom {
    private family: string[] = [];
    readonly dobShikha: string = '1982-12-12';
    private readonly dobHriday: string = '2013-12-12';
    constructor(public room: string){}

    addFamilyMember(member: string){
        this.family.push(member);
    }

    showFamily(){
        console.log(this.family);
    }

    cleanRoom(soap: string){
        console.log(`Cleaning ${this.room} with ${soap}`)
    }
}

const nabendu = new CreateRoom('Nabendu');
const mousam = new CreateRoom('Mousam');
const hriday = new CreateRoom('Hriday');
const shikha = new CreateRoom('Shikha');
nabendu.family;
shikha.dobShikha;
shikha.dobShikha = '1982-10-12';
hriday.dobHriday;
nabendu.addFamilyMember('Nabendu');
mousam.addFamilyMember('Mousam');
hriday.addFamilyMember('Hriday');
shikha.addFamilyMember('Shikha');
mousam.cleanRoom('Lizol');
