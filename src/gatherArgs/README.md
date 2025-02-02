# `gatherArgs`

## 💡 About

`gatherArgs(fn): Function`  
: Transforms multiple arguments into an array before passing them to a function.

**Parameters**

- fn: Function — A function that expects an array as its argument.

**Returns**

- A new function that takes multiple arguments and applies them as an array to `fn`.

<br />

## 💡 Usage

### 📌 Basic Example

```ts
import { gatherArgs } from "@zoeykr/function-al";

const sum = (arr: number[]) => arr.reduce((acc, num) => acc + num, 0);
const gatheredSum = gatherArgs(sum);

console.log(gatheredSum(1, 2, 3)); // Output: 6
```

- `gatherArgs(sum)` converts `sum(1, 2, 3)` into `sum([1, 2, 3])`.

### 📌 Use Cases

1️⃣ Using with `reduce`

```ts
const sum = (arr: number[]) => arr.reduce((acc, num) => acc + num, 0);
const gatheredSum = gatherArgs(sum);

console.log(gatheredSum(1, 2, 3, 4, 5)); // Output: 15
```

2️⃣ Using with `join`

```ts
const concat = (arr: string[]) => arr.join(" ");
const gatheredConcat = gatherArgs(concat);

console.log(gatheredConcat("Hello", "World!")); // Output: "Hello World!"
```
