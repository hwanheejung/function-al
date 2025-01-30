# `partial`

## 💡 About

`partial(fn, ...presetArgs): Function`  
: Transforms a function into a partially applied function, fixing the first N arguments while leaving the remaining arguments to be provided later.

**Parameters**

- `fn: Function` — The function to be partially applied.
- `presetArgs: any[]` — The initial arguments to fix.

**Returns**

- A new function that takes the remaining arguments and executes `fn`.

<br />

## 💡 Usage

### 📌 Basic Example

```ts
import { partial } from "function-al";

const multiply = (a: number, b: number) => a * b;
const multiplyBy2 = partial(multiply, 2);

console.log(multiplyBy2(5)); // Output: 10
console.log(multiplyBy2(10)); // Output: 20
```

<br />

### 📌 Partially Applying a Function with Multiple Arguments

```ts
const greet = (greeting: string, name: string, age: number) =>
  `${greeting}, ${name}! You are ${age} years old.`;

// Fixing only the 'greeting' argument
const sayHello = partial(greet, "Hello");

console.log(sayHello("Zoey", 24));
// Output: "Hello, Zoey! You are 24 years old."
```

- Only `greeting` is fixed, while `name` and `age` remain dynamic.

<br />

### 📌 Fixing Multiple Arguments

```ts
const multiply = (a: number, b: number, c: number) => a * b * c;

// Fixing 'a' and 'b'
const multiplyBy2And3 = partial(multiply, 2, 3);

console.log(multiplyBy2And3(4)); // Output: 24  (2 * 3 * 4)
console.log(multiplyBy2And3(5)); // Output: 30  (2 * 3 * 5)
```

- Multiple arguments `(a = 2, b = 3)` are fixed, requiring only `c` when calling the function.

<br />

### 📌 Using partial with map

```ts
const add = (x: number, y: number) => x + y;

console.log([1, 2, 3, 4, 5].map(partial(add, 3)));
// Output: [4, 5, 6, 7, 8]
```
