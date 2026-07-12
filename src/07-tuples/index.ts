// ======================================
// TypeScript Tuples
// ======================================

// 1. Basic Tuple

let person: [string, number] = ["Tanuj", 21];

console.log(person);

// ======================================
// 2. Tuple with Multiple Types

let employee: [number, string, boolean] = [101, "Rahul", true];

console.log(employee);

// ======================================
// 3. Readonly Tuple

const user: readonly [number, string] = [1, "Aman"];

// user[0] = 2; // ❌ Error

console.log(user);

// ======================================
// 4. Array of Tuples

let students: [string, number][] = [
  ["Tanuj", 21],
  ["Rahul", 22],
  ["Aman", 20],
];

console.log(students);

// ======================================
// 5. Tuple as Function Return Type

function getUser(): [string, number] {
  return ["Karan", 25];
}

const [name, age] = getUser();

console.log(name);
console.log(age);
