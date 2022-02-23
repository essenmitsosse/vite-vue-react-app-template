import { getGetEmit } from "../src/getGetEmit";

export const getGetEmitVue = <T>(
  emit: (name: "input", valueNew: T) => void,
  getValue: () => T
) => getGetEmit((valueNew: T) => emit("input", valueNew), getValue);
