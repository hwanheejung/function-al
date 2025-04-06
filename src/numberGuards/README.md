# numberGuards

## Table of Contents

- [About](#about)
- [Functions](#functions)
  - [isNumber](#isnumber)
  - [isValidNumber](#isvalidnumber)
  - [isInteger](#isinteger)
  - [isSafeInteger](#issafeinteger)
  - [isFiniteNumber](#isfinitenumber)
  - [isPositive](#ispositive)
  - [isNegative](#isnegative)
  - [isZero](#iszero)

## About

The `numberGuards` module provides a suite of type guard functions that perform type-safe validations on numbers in JavaScript/TypeScript. These functions help ensure that values not only belong to the `number` type but also meet specific numeric criteria. They are especially useful in functional programming and in scenarios where strict type checking is required.

## Functions

### isNumber

**Signature:**

```ts
isNumber<T>(input: T): input is T & number
```

**Description:**  
Checks if the input is of type number.

- Note: In JavaScript, `NaN` is also considered a `number`, so `isNumber(NaN)` returns `true`.

**Usage Example:**

```ts
console.log(isNumber(42)); // true
console.log(isNumber(NaN)); // true
console.log(isNumber("42")); // false
```

<hr>

### isValidNumber

**Signature:**

```ts
isValidNumber<T>(input: T): input is T & number
```

**Description:**  
Validates that the input is a number and is not `NaN`. This is useful when you require a numeric value that is safe for computations.

**Usage Example:**

```ts
console.log(isValidNumber(42)); // true
console.log(isValidNumber(NaN)); // false
console.log(isValidNumber("42")); // false
```

<hr>

### isInteger

**Signature:**

```ts
isInteger<T>(input: T): input is T & number
```

**Description:**  
Determines whether the input is an integer.

**Usage Example:**

```ts
console.log(isInteger(42)); // true
console.log(isInteger(3.14)); // false
```

<hr>

### isSafeInteger

**Signature:**

```ts
isSafeInteger<T>(input: T): input is T & number
```

**Description:**  
Checks if the input is a safe integer — that is, an integer that can be accurately represented in JavaScript (using `Number.isSafeInteger`).

**Usage Example:**

```ts
console.log(isSafeInteger(42)); // true
console.log(isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(isSafeInteger(3.14)); // false
```

<hr>

### isFiniteNumber

**Signature:**

```ts
isFiniteNumber<T>(input: T): input is T & number
```

**Description:**  
Verifies that the input is a finite number, excluding `Infinity`, `-Infinity`, and `NaN`.

**Usage Example:**

```ts
console.log(isFiniteNumber(42)); // true
console.log(isFiniteNumber(Infinity)); // false
```

<hr>

### isPositive

**Signature:**

```ts
isPositive<T>(input: T): input is T & number
```

**Description:**  
Determines if the input is a positive number (greater than zero).

**Usage Example:**

```ts
console.log(isPositive(42)); // true
console.log(isPositive(-1)); // false
```

<hr>

### isNegative

**Signature:**

```ts
isNegative<T>(input: T): input is T & number
```

**Description:**  
Determines if the input is a negative number (less than zero).

**Usage Example:**

```ts
console.log(isNegative(-42)); // true
console.log(isNegative(1)); // false
```

<hr>

### isZero

**Signature:**

```ts
isZero<T>(input: T): input is T & number
```

**Description:**  
Checks whether the input is exactly zero. In JavaScript, `-0` is treated as equal to `0`.

**Usage Example:**

```ts
console.log(isZero(0)); // true
console.log(isZero(-0)); // true
console.log(isZero(1)); // false
```
