// ======================================
// TypeScript Interfaces
// ======================================

// 1. Basic Interface

interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Tanuj",
  age: 21,
};

console.log(user1);

// ======================================
// 2. Optional Property

interface Employee {
  name: string;
  salary?: number;
}

const employee: Employee = {
  name: "Rahul",
};

console.log(employee);

// ======================================
// 3. Readonly Property

interface Product {
  readonly id: number;
  name: string;
}

const product: Product = {
  id: 101,
  name: "Laptop",
};

// product.id = 102; // ❌ Error

console.log(product);

// ======================================
// 4. Interface as Function Parameter

interface Student {
  name: string;
  age: number;
}

function printStudent(student: Student): void {
  console.log(`${student.name} is ${student.age} years old.`);
}

printStudent({
  name: "Aman",
  age: 22,
});

// ======================================
// 5. Interface with Function

interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;

console.log(add(10, 20));

// ======================================
// 6. Interface Extends

interface Person {
  name: string;
}

interface Developer extends Person {
  language: string;
}

const dev: Developer = {
  name: "Tanuj",
  language: "TypeScript",
};

console.log(dev);
