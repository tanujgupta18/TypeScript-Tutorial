// ======================================
// TypeScript Enums
// ======================================

// 1. Numeric Enum

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 0
console.log(Direction.Right); // 3

// ======================================
// 2. Custom Numeric Enum

enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(StatusCode.Success);

// ======================================
// 3. String Enum

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

console.log(Role.Admin);

// ======================================
// 4. Using Enum in Function

enum PaymentStatus {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed = "FAILED",
}

function checkStatus(status: PaymentStatus): void {
  console.log(status);
}

checkStatus(PaymentStatus.Success);

// ======================================
// 5. Enum in Object

const employee = {
  name: "Tanuj",
  role: Role.Admin,
};

console.log(employee);
