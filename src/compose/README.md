# `compose`

## 💡 About

`compose(...fns): Function`

: Transforms a sequence of functions into a single function, where the output of one function becomes the input of the previous one.  
Supports type-safe function chaining with fixed-arity functions, applied from **right to left**.

**Parameters**

- `...fns: Function[]` — A list of functions to be executed in reverse order. Each function must accept a single argument, which is the return value of the next function in the sequence.

**Returns**

- A new function that, when called with an initial value, passes it through the provided functions in reverse order.

<br />

## 💡 Usage

### 📌 Basic Example

```ts
import { compose } from "@zoeykr/function-al";

const add1 = (x: number) => x + 1;
const double = (x: number) => x * 2;
const toString = (x: number) => `Result: ${x}`;

const composed = compose(toString, double, add1);

console.log(composed(3)); // Output: "Result: 8"
```

- The functions are applied right to left, ensuring that each function's output matches the input type of the previous function.
- TypeScript ensures that function chaining follows a valid type sequence.
- Any incorrect composition will result in a compile-time error.
