export const isNumber = <T>(input: T): input is T & number =>
  typeof input === "number";
