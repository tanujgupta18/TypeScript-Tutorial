// ========================================
// TypeScript Primitive Types
// ========================================

// String
let firstName: string = "Tanuj";
console.log(firstName);

// Number
let age: number = 21;
console.log(age);

// Boolean
let isStudent: boolean = true;
console.log(isStudent);

// Null
let emptyValue: null = null;
console.log(emptyValue);

// Undefined
let notAssigned: undefined = undefined;
console.log(notAssigned);

// BigInt
let bigNumber: bigint = 12345678901234567890n;
console.log(bigNumber);

// Symbol
let uniqueId: symbol = Symbol("id");
console.log(uniqueId);

// ========================================
// Type Inference
// ========================================

let city = "Delhi"; // inferred as string
let price = 999; // inferred as number
let isActive = false; // inferred as boolean

console.log(city);
console.log(price);
console.log(isActive);

// ========================================
// Explicit Type
// ========================================

let language: string = "TypeScript";
console.log(language);

// ========================================
// Any
// ========================================

let value: any = 100;

value = "Hello";
value = true;
value = [1, 2, 3];

console.log(value);

// ========================================
// Union Types
// ========================================

let userId: number | string;

userId = 101;
console.log(userId);

userId = "EMP101";
console.log(userId);

let marks: number | null;

marks = 95;
console.log(marks);

marks = null;
console.log(marks);
