# function-al

: A `type-safe` utility library for `functional programming`.

<br>

## 📌 Installation

```bash
npm i @zoeykr/function-al
```

<br>

## 📌 API Reference

| Function                                 | Description                                                                                                                                         |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [identity](./src/identity/README.md)     | Simply returns its input as-is                                                                                                                      |
| [unary](./src/unary/README.md)           | Transforms a function so that it accepts only a single argument                                                                                     |
| [noop](./src/noop/README.md)             | No operation function                                                                                                                               |
| [partial](./src/partial/README.md)       | Creates a function with preset initial arguments, returning a new function for remaining inputs.                                                    |
| [curry](./src/curry/README.md)           | Transforms a function into a curried version, allowing it to be called with arguments one at a time or in groups, until all arguments are provided. |
| [pipe](./src/pipe/README.md)             | Combines multiple functions into a single function, applying them sequentially from left to right.                                                  |
| [compose](./src/compose/README.md)       | Combines multiple functions into a single function, applying them sequentially from right to left.                                                  |
| [spreadArgs](./src/spreadArgs/README.md) | Converts an array of arguments into separate function parameters.                                                                                   |
| [gatherArgs](./src/gatherArgs/README.md) | Transforms multiple arguments into an array                                                                                                         |

<br>

## 🤝 Contributing

Contributions are welcome! 👋  
If you have ideas for new utilities, find a bug, or want to improve documentation, feel free to check out the [Contributing Guide](./CONTRIBUTING.md).

<br>

## 📜 License

This project is licensed under the `MIT License`.
