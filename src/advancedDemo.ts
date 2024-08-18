type ITadmin = {
    access: string[];
}

type Employee = {
    name: string;
    startDate: Date;
    skills: string[];
}

type AdminEmployee = Employee & ITadmin;

const emp1: AdminEmployee = {
    name: 'John',
    startDate: new Date(),
    skills: ['Cisco', 'Python'],
    access: ['admin', 'user']
}

console.log(emp1);

interface Human {
    walkingSpeed: number;
}

interface Horse {
    runningSpeed: number;
}

type Mammal = Human | Horse;

function moveMammal(mammal: Mammal){
    if('walkingSpeed' in mammal) console.log(`Human walk at ${mammal.walkingSpeed} km/hr`)
    else console.log(`Horse run at ${mammal.runningSpeed} km/hr`)
}

moveMammal({ walkingSpeed: 10 })
moveMammal({ runningSpeed: 40 })

//Type Casting
const inputUser = document.getElementById('input-user')! as HTMLInputElement;

inputUser?.addEventListener('input', e => {
    const target = e.target as HTMLInputElement;
    console.log(target.value)
})

//Nullish Coalescing
const theInput = '';
const storedInput = theInput || 'Default';
console.log(storedInput);

const theInput2 = '';
const storedInput2 = theInput2 ?? 'Default 2';
console.log(storedInput2);

const theInput3 = null;
const storedInput3 = theInput3 ?? 'Default 3';
console.log(storedInput3);