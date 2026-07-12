// ======================================
// TypeScript Arrays
// ======================================

// 1. Number Array

let numbers: number[] = [10, 20, 30];

console.log(numbers);

// ======================================
// 2. String Array

let names: string[] = ["Tanuj", "Rahul", "Aman"];

console.log(names);

// ======================================
// 3. Boolean Array

let isLoggedIn: boolean[] = [true, false, true];

console.log(isLoggedIn);

// ======================================
// 4. Mixed Array (Union)

let data: (string | number)[] = ["Tanuj", 21, "React", 100];

console.log(data);

// ======================================
// 5. Array of Objects

interface User {
  name: string;
  age: number;
}

let users: User[] = [
  {
    name: "Tanuj",
    age: 21,
  },
  {
    name: "Rahul",
    age: 22,
  },
];

console.log(users);

// ======================================
// 6. Readonly Array

let fruits: readonly string[] = ["Apple", "Banana", "Mango"];

// fruits.push("Orange"); // ❌ Error

console.log(fruits);

// ======================================
// 7. Multi-Dimensional Array

let matrix: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(matrix);
