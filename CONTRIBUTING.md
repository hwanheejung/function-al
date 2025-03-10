# 🤝 Contributing Guide

Thank you for considering contributing to **function-al**!  
Your contributions — whether it's new features, bug fixes, test cases, or even typo corrections — are always welcome 🙌

This guide outlines the ways you can help and how to do it effectively.

---

## 📌 Ways to Contribute

### ✨ Feature Requests

- Have an idea for a new utility function?
  - Please [open an issue](https://github.com/hwanheejung/function-al/issues) with:
    - Function name
    - Use case
    - Example usage
    - Expected behavior

### 🧪 Add Test Cases

- All utilities should be well-covered with **unit tests**.
- Add your test file inside the corresponding function directory (e.g., `compose/compose.test.ts`).
- Use [Vitest](https://vitest.dev/) for writing tests.
- Include edge cases, type coverage, and invalid inputs if relevant.

### ✍️ Fix Typos or Improve Documentation

- Found a typo? Better way to explain something?
- Feel free to directly edit Markdown docs (`README.md`, function docs, etc.)
- Make sure explanations stay clear, concise, and beginner-friendly.

### 🐛 Bug Fixes

- Found a bug? Please:
  1. [Open an issue](https://github.com/your-repo/function-al/issues/new?template=bug_report.md)
  2. Or submit a PR with:
     - Failing test case (first)
     - Then the fix

---

## 📝 Suggested Issue Title Format

Please use the following title prefixes when creating issues:

| Type               | Title Format Example                            |
| ------------------ | ----------------------------------------------- |
| ✨ Feature Request | `feat: Add support for compose function`        |
| 🐛 Bug Report      | `bug: curry function returns unexpected result` |
| 🧪 Test Case       | `test: Add edge case for gatherArgs`            |
| 📄 Docs Update     | `docs: Fix typo in unary README`                |
| 🔧 Refactor        | `refactor: Simplify spreadArgs implementation`  |
| 🧹 Chore / Infra   | `chore: Update npm scripts`                     |

This helps maintain a clean and searchable issue history 🙏

---

<br>

## 🚀 Pull Request Guidelines

- Create a **feature branch** from `main`, for example:

  ```bash
  git checkout -b feat/<function-name>
  ```

- Write clear and concise commit messages using conventional commit format:

  - `feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`

- Include:

  - ✅ Related test cases
  - 📄 Updated or added documentation (README.md inside function folder)
  - 🔍 Description of what changed and why

- Make sure all tests pass before submitting:

  ```bash
  npm run test
  ```

- Link related issues in the PR description if applicable
