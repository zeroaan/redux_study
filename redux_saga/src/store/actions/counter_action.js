import { MYNUMBER, ADD_NUMBER, MUL_NUMBER } from "./types";

export const myNumber = (setLoading) => {
  return { type: MYNUMBER, setLoading };
};
export const addNumber = (value) => {
  return { type: ADD_NUMBER, value };
};
export const mulNumber = (value) => {
  return { type: MUL_NUMBER, value };
};
