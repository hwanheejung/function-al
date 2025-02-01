# function-al

: A `type-safe` utility library for `functional programming`.

<br>

## 📌 Installation

```sh
npm i @zoey_utils/function-al
```

<br>

## 📌 API Reference

| Function                                 | Description                                                                                                                                         |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [identity](./src/identity/README.md)     | Simply returns its input as-is                                                                                                                      |
| [spreadArgs](./src/spreadArgs/README.md) | Converts an array of arguments into separate function parameters.                                                                                   |
| [gatherArgs](./src/gatherArgs/README.md) | Transforms multiple arguments into an array                                                                                                         |
| [partial](./src/partial/README.md)       | Creates a function with preset initial arguments, returning a new function for remaining inputs.                                                    |
| [curry](./src/curry/README.md)           | Transforms a function into a curried version, allowing it to be called with arguments one at a time or in groups, until all arguments are provided. |

<!-- pipe, compose -->
