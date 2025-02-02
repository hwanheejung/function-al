# `unary`

## 💡 About

`unary(fn): Function`

: Transforms a function so that it accepts only a single argument, ignoring any additional arguments.

**Parameters**

- `fn: Function` — The function to be transformed to accept only one argument.

**Returns**

- A new function that calls the original function with only its first argument, ignoring any additional arguments.

<br>

## 💡 Usage

### 📌 Basic Example

```ts
import { unary } from "@zoeykr/function-al";

const add = (a: number, b: number) => a + b;
const unaryAdd = unary(add);

console.log(unaryAdd(5)); // NaN because the second argument is undefined
```

<br>

### 📌 Practical Example

1️⃣ **Using with higher order functions**

- It blocks unnecessary arguments to prevent unintended behavior.

```ts
import { unary } from "@zoeykr/function-al";

const parse = (str) => parseInt(str); // // By default, `parseInt` accepts two arguments.

const numbers = ["10", "20", "30"];

// Problem : `map` passes the `index` as the second argument
console.log(numbers.map(parseInt)); // [10, NaN, NaN]

// Solution: use `unary` to allow only the first argument
console.log(numbers.map(unary(parseInt))); // [10, 20, 30]
```

2️⃣ **Combining Currying with Higher-Order Functions**

```ts
import { curry, unary } from "@zoeykr/function-al";

const multiply = (a: number, b: number) => a * b;
const curriedMultiply = curry(multiply);

console.log([1, 2, 3, 4, 5].map(unary(curriedMultiply(2)))); // Output: [2, 4, 6, 8, 10]
```
