// ======================================
// TypeScript Type Narrowing
// ======================================

// 1. typeof Narrowing

function print(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

print("Tanuj");
print(99.99);

// ======================================
// 2. instanceof Narrowing

function printDate(value: Date | string): void {
  if (value instanceof Date) {
    console.log(value.getFullYear());
  } else {
    console.log(value.toUpperCase());
  }
}

printDate(new Date());
printDate("TypeScript");

// ======================================
// 3. "in" Operator Narrowing

interface User {
  name: string;
}

interface Admin {
  name: string;
  permissions: string[];
}

function printPerson(person: User | Admin): void {
  if ("permissions" in person) {
    console.log(person.permissions);
  } else {
    console.log(person.name);
  }
}

printPerson({
  name: "Tanuj",
});

printPerson({
  name: "Rahul",
  permissions: ["Read", "Write"],
});

// ======================================
// 4. Truthiness Narrowing

function printMessage(message: string | null): void {
  if (message) {
    console.log(message.toUpperCase());
  } else {
    console.log("No Message");
  }
}

printMessage("Hello");
printMessage(null);
