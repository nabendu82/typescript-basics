//Types
type DeveloperNewType = {
    name: string;
    age: number;
    isDev: boolean;
}

const person5: DeveloperNewType = {
    name: 'Nabendu',
    age: 42,
    isDev: true
}

console.log(`${person5.name} is a ${person5.isDev}`)

type PersonNewName = string;
const person6: PersonNewName = 'Mousam';

console.log(`New Developer is ${person6}`)