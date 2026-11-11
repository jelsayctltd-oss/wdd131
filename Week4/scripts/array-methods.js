
/* WDD 131 - Week 4 Activity 4
   JavaScript Array Functions
*/

// Original array
let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];


// 1. FILTER: Select names beginning with B
let namesB = names.filter(name => name.charAt(0) === 'B');

console.log("FILTER RESULT:");
console.log(namesB);


// 2. MAP: Get the length of every name
let nameLengths = names.map(name => name.length);

console.log("MAP RESULT:");
console.log(nameLengths);

let averageLength = names.reduce(
  (total, name) => total + name.length,
  0
) / names.length;

console.log("AVERAGE NAME LENGTH:");
console.log(averageLength);