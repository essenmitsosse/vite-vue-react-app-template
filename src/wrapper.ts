import { makeUnique } from "./helperIdUnique";
import { Wrapper } from "./types";

export const wrapperDefault: Wrapper = makeUnique({
  parent: makeUnique({
    listChild: [makeUnique({ value: "a" }), makeUnique({ value: "b" })],
  }),
});
