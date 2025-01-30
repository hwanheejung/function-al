import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";

export default [
  // ESM + CJS 번들 생성
  {
    input: "src/index.ts",
    output: [
      { file: "dist/function-al.esm.js", format: "esm", sourcemap: true },
      { file: "dist/function-al.cjs.js", format: "cjs", sourcemap: true },
    ],
    plugins: [typescript({ tsconfig: "./tsconfig.json" }), terser()],
    external: [],
  },
  // d.ts 번들 생성
  {
    input: "src/index.ts",
    output: [{ file: "dist/function-al.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
