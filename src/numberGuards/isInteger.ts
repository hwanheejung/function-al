export const isInteger = <T>(input: T): input is T & number =>
  typeof input === "number" && Number.isInteger(input);
