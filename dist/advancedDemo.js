"use strict";
const emp1 = {
    name: 'John',
    startDate: new Date(),
    skills: ['Cisco', 'Python'],
    access: ['admin', 'user']
};
console.log(emp1);
function moveMammal(mammal) {
    if ('walkingSpeed' in mammal)
        console.log(`Human walk at ${mammal.walkingSpeed} km/hr`);
    else
        console.log(`Horse run at ${mammal.runningSpeed} km/hr`);
}
moveMammal({ walkingSpeed: 10 });
moveMammal({ runningSpeed: 40 });
//Type Casting
const inputUser = document.getElementById('input-user');
inputUser === null || inputUser === void 0 ? void 0 : inputUser.addEventListener('input', e => {
    const target = e.target;
    console.log(target.value);
});
//Nullish Coalescing
const theInput = '';
const storedInput = theInput || 'Default';
console.log(storedInput);
const theInput2 = '';
const storedInput2 = theInput2 !== null && theInput2 !== void 0 ? theInput2 : 'Default 2';
console.log(storedInput2);
const theInput3 = null;
const storedInput3 = theInput3 !== null && theInput3 !== void 0 ? theInput3 : 'Default 3';
console.log(storedInput3);
