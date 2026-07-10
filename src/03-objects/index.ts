// ======================================
// TypeScript Objects
// ======================================

// 1. Basic Object

const user: {
  name: string;
  age: number;
} = {
  name: "Tanuj",
  age: 21,
};

console.log(user);

// ======================================
// 2. Optional Property (?)

const employee: {
  name: string;
  salary?: number;
} = {
  name: "Rahul",
};

console.log(employee);

// ======================================
// 3. Readonly Property

const product: {
  readonly id: number;
  name: string;
} = {
  id: 101,
  name: "Laptop",
};

// product.id = 102; // ❌ Error

console.log(product);

// ======================================
// 4. Nested Object

const student: {
  name: string;
  address: {
    city: string;
    state: string;
  };
} = {
  name: "Tanuj",
  address: {
    city: "Pune",
    state: "Maharashtra",
  },
};

console.log(student);

// ======================================
// 5. Object as Function Parameter

function printUser(user: { name: string; age: number }): void {
  console.log(`${user.name} is ${user.age} years old.`);
}

printUser({
  name: "Aman",
  age: 22,
});

// ======================================
// 6. Object as Function Return Type

function createUser(): { name: string; age: number } {
  return {
    name: "Karan",
    age: 25,
  };
}

console.log(createUser());
