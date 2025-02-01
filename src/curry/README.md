# `curry`

## 💡 About

`curry(fn): Function`

: Transforms a function into a curried version, allowing it to be called with arguments one at a time or in groups, until all arguments are provided.

**Parameters**

- `fn: Function` — The function to be curried.

**Returns**

- A new curried function that can be called with arguments in partial applications until all required arguments are supplied.

<br />

## 💡 Usage

### 📌 Basic Example

```ts
import { curry } from "function-al";

const add = (a: number, b: number, c: number) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6
```
