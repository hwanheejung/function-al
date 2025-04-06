export const isFiniteNumber = <T>(input: T): input is T & number =>
  typeof input === "number" && Number.isFinite(input);
