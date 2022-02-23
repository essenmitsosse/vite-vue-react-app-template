import { Unique } from "./types";

export const getIdUnique = (): string => {
  return window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
};

export const makeUnique = <T extends Record<string, unknown>>(
  obj: T
): T & Unique => ({ ...obj, idUnique: getIdUnique() });
