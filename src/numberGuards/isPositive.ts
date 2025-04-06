export const isPositive = <T>(input: T): input is T & number =>
  typeof input === "number" && input > 0;
