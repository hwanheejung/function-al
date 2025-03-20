# `noop`

## 💡 About

`noop(): void`

: No-operation function. Does absolutely nothing and returns undefined.
Although it might seem trivial, noop is often used in functional programming, event handling, and API defaults to explicitly represent an intentional no-operation.

<br />

## 💡 Usage

### 📌 Use Cases

**1️⃣ Providing a default callback**

```ts
import { noop } from "@zoeykr/function-al";

function onEvent(callback: () => void = noop) {
  // Safely call callback, even if none is provided
  callback();
}

onEvent(); // No error, does nothing
onEvent(() => console.log("event triggered")); // "event triggered"
```

<br />

**2️⃣ Avoiding conditional checks in code**

```ts
const logger = process.env.NODE_ENV === "production" ? noop : console.log;

logger("Debug mode active"); // Only logs in non-production
```

- Avoids unnecessary if checks
- Makes conditional logic cleaner and more declarative

<br />

**3️⃣ Placeholder function during development**

```ts
const button = {
  onClick: noop, // Placeholder for future logic
};
```

- Keeps code syntactically complete
- Useful when the logic is not yet implemented but the structure is ready
