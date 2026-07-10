// ======================================
// TypeScript Functions
// ======================================

// 1. Function with Parameter Types

function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

greet("Tanuj");

// ======================================
// 2. Function with Return Type

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

// ======================================
// 3. Optional Parameters (?)

function introduce(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`${name} is ${age} years old.`);
  } else {
    console.log(`Hello ${name}`);
  }
}

introduce("Tanuj");
introduce("Tanuj", 21);

// ======================================
// 4. Default Parameters

function welcome(name: string = "Guest"): void {
  console.log(`Welcome ${name}`);
}

welcome();
welcome("Tanuj");

// ======================================
// 5. Rest Parameters (...)

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20));
console.log(sum(1, 2, 3, 4, 5));

// ======================================
// 6. Arrow Function

const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(5, 6));

// ======================================
// 7. Function Type

let operation: (a: number, b: number) => number;

operation = (x, y) => x + y;

console.log(operation(50, 25));
