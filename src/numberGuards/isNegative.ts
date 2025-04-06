export const isNegative = <T>(input: T): input is T & number =>
  typeof input === "number" && input < 0;
