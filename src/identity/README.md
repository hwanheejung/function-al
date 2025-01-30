# `identity`

## 💡 About

`identity(fn): Function`  
: Simply returns its input as-is. While it might seem trivial, it’s particularly useful in functional programming for simplifying operations and improving code readability.

<br />

## 💡 Usage

### 📌 Use Cases

1️⃣ **Filtering Falsy Values**

```ts
const values = [1, 2, 3, null, 4, undefined, "", false, 0, NaN];

console.log(values.filter(identity));
// Output: [1, 2, 3, 4]
```

```ts
const words = "    I am studying fp...    ".split(/\s|\b/);
// ["", "I", "am", "studying", "...", ""]

console.log(words.filter(identity));
// Output: ["I", "am", "studying", "..."]
```

- Removes `false`, `null`, `undefined`, `""`, `0`, and other falsy values from an array
- Equivalent to `.filter(Boolean)` but more explicit in functional programming.

<br />

2️⃣ **Ensuring Optional Values Flow Correctly in Pipelines**

```ts
const pipe =
  (...fns: Function[]) =>
  (x: any) =>
    fns.reduce((v, fn) => fn(v), x);

const processUser = pipe(
  (user: { name?: string }) => user.name,
  identity, // Ensures `undefined` propagates safely
  (name) => name?.toUpperCase()
);

console.log(processUser({ name: "zoey" })); // "ZOEY"
console.log(processUser({})); // undefined (instead of breaking)
```

- Avoids manually checking for `null` or `undefined` before transformations.
- Prevents errors like `"Cannot read property 'toUpperCase' of undefined"`.

<br />
