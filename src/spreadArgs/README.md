# `spreadArgs`

## 💡 About

`spreadArgs(fn): Function`  
: Transforms an array of arguments into separate function parameters.

**Parameters**

- fn: Function — A function that expects multiple arguments.

**Returns**

- A new function that takes an array as input and applies it as separate arguments to fn.

<br />

## 💡 Usage

### 📌 Basic Example

```ts
import { spreadArgs } from "function-al";

const sum = (a: number, b: number) => a + b;
const spreadSum = spreadArgs(sum);

console.log(spreadSum([3, 9])); // Output: 12
```

- `spreadArgs(sum)` converts `[3, 9]` into `sum(3, 9)`

### 📌 Use Cases

1️⃣ Using with `map`

```ts
const sum = (a: number, b: number) => a + b;
const spreadSum = spreadArgs(sum);

const pairs = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(pairs.map(spreadSum)); // Output: [3, 7, 11]
```

2️⃣ Using with `Math.max`

```ts
const spreadMax = spreadArgs(Math.max);

console.log(spreadMax([10, 5, 20])); // Output: 20
```

- `Math.max([10, 5, 20])` would normally result in NaN,
- but `spreadArgs(Math.max)` correctly expands the array into separate parameters.
