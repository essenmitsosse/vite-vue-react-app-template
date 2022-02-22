import { Parent } from "./types";

export const addNewChildToParent = (parent: Parent): Parent => ({
  ...parent,
  listChild: [
    ...parent.listChild,
    {
      value: String.fromCharCode(
        parent.listChild.length + 65
      ).toLocaleLowerCase(),
    },
  ],
});
