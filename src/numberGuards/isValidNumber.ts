export const isValidNumber = <T>(input: T): input is T & number =>
  typeof input === "number" && !Number.isNaN(input);
