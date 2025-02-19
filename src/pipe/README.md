# `pipe`

## 💡 About

`pipe(...fns): Function`

: Transforms a sequence of functions into a single function, where the output of one function becomes the input of the next.  
Supports type-safe function chaining with fixed-arity functions.

**Parameters**

- `...fns: Function[]` — A list of functions to be executed in sequence. Each function must accept a single argument, which is the return value of the previous function.

**Returns**

- A new function that, when called with an initial value, passes it through the provided functions in order.

<br />

## 💡 Usage

### 📌 Basic Example

```ts
import { pipe } from "@zoeykr/function-al";

const add1 = (x: number) => x + 1;
const double = (x: number) => x * 2;
const toString = (x: number) => `Result: ${x}`;

const piped = pipe(add1, double, toString);

console.log(piped(3)); // Output: "Result: 8"
```

- The functions are applied left to right, ensuring that each function's output matches the next function's input.
- TypeScript ensures that function chaining follows a valid type sequence.
- Any incorrect composition will result in a compile-time error.
