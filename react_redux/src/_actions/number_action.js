import { WHAT_NUMBER, PLUS_NUMBER } from "./types";

export const whatNumber = (value) => {
  return {
    type: WHAT_NUMBER,
    number: Number(value),
  };
};

export const plusNumber = (value) => {
  return {
    type: PLUS_NUMBER,
    number: Number(value),
  };
};
