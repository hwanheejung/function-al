# `curry`

## 💡 About

`curry(fn): Function`

: Transforms a function into a curried version, allowing it to be called with arguments one at a time or in groups, until all arguments are provided. Supports both fixed-arity and variadic functions.

**Parameters**

- `fn: Function` — The function to be curried.
- `arity: number` _(optional)_ — The number of arguments required to complete the function. This is particularly useful for variadic functions.

**Returns**

- A new curried function that can be called with arguments in partial applications until all required arguments are supplied.

<br />

## 💡 Usage

### 📌 Basic Example

```ts
import { curry } from "@zoeykr/function-al";

const add = (a: number, b: number, c: number) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6
```

<br>

### 📌 Currying Variadic Functions

```ts
const sum = (...numbers: number[]) =>
  numbers.reduce((acc, num) => acc + num, 0);
const curriedSum = curry(sum, 3); // should specify arity

console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(1, 2)(3)); // Output: 6
console.log(curriedSum(1)(2, 3)); // Output: 6
console.log(curriedSum(1, 2, 3)); // Output: 6
```

- Works seamlessly with variadic functions **when an arity is specified.**

> [!IMPORTANT]  
> If no arity is specified for a variadic function, it will throw an error.

**Why?**

- Variadic functions can accept **any number of arguments**.
- **Without an arity**, the curry function defaults to **arity = 0**, assuming no arguments are needed to invoke the original function.
- This causes the curried function to **immediately execute**, even if no arguments are provided, leading to unexpected behavior or errors.

<br>

### 📌 Combining Currying with Higher-Order Functions

```ts
const multiply = (a: number, b: number) => a * b;
const curriedMultiply = curry(multiply);

console.log([1, 2, 3, 4, 5].map(curriedMultiply(2))); // Output: [2, 4, 6, 8, 10]
```

- Currying pairs well with higher-order functions like `map`
