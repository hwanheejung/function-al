export const isSafeInteger = <T>(input: T): input is T & number =>
  typeof input === "number" && Number.isSafeInteger(input);
