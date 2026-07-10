// ======================================
// TypeScript Type Alias
// ======================================

// 1. Basic Type Alias

type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Tanuj",
  age: 21,
};

const user2: User = {
  name: "Rahul",
  age: 23,
};

console.log(user1);
console.log(user2);

// ======================================
// 2. Optional Property

type Employee = {
  name: string;
  salary?: number;
};

const emp1: Employee = {
  name: "Aman",
};

console.log(emp1);

// ======================================
// 3. Readonly Property

type Product = {
  readonly id: number;
  name: string;
};

const product: Product = {
  id: 101,
  name: "Laptop",
};

// product.id = 102; // ❌ Error

console.log(product);

// ======================================
// 4. Type Alias with Function

type Student = {
  name: string;
  age: number;
};

function printStudent(student: Student): void {
  console.log(`${student.name} is ${student.age} years old.`);
}

printStudent({
  name: "Karan",
  age: 22,
});

// ======================================
// 5. Type Alias with Union

type ID = number | string;

let userId: ID;

userId = 101;
userId = "EMP101";

console.log(userId);

// ======================================
// 6. Type Alias for Function

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));
