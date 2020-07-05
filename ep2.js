//ep2
// 2.1 Higher order functions
const persons = [
  { name: "John", age: 17 },
  { name: "Jone", age: 10 },
  { name: "Jim", age: 15 },
];

// filter
// const kids = [];
// for(let i = 0; i < persons.length; i++) {
//     const person = persons[i];
//     if(person.age <= 15) {
//         kids.push(person)
//     }
// }
// console.log('Kids: ', kids)
// const kids = persons.filter(person => person.age <= 15)
// console.log('Kids: ', kids)
// // map
// const olderPersons = [];
// for (let i = 0; i < persons.length; i++) {
//     const person = persons[i];
//     olderPersons.push({
//         ...person,
//         age: person.age * 2
//     })
// }
// console.log('Older persons: ', olderPersons)
const olderPersons = persons.map((person) => {
    return {
        ...person,
        age: person.age * 2
    }
})
console.log('Older persons: ', olderPersons)
// reduce
// let totleAge = 0;
// for(let i = 0; i < persons.length; i++) {
//     const person = persons[i];
//     totleAge += person.age;
// }
// console.log('Total age: ', totleAge)

const totalAge = persons.reduce((age, person) => {
    return age + person.age
}, 0);
console.log('TotalAge: ',totalAge)