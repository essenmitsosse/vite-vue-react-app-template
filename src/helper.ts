import { Child, Parent } from "./types";

const replaceListChildOnParent = (
  parent: Parent,
  listChild: ReadonlyArray<Child>
): Parent => ({
  ...parent,
  listChild,
});

export const addNewChildToParent = (parent: Parent): Parent =>
  replaceListChildOnParent(parent, [
    ...parent.listChild,
    {
      value: String.fromCharCode(
        parent.listChild.length + 65
      ).toLocaleLowerCase(),
    },
  ]);

const updateListChild = (
  listChild: ReadonlyArray<Child>,
  index: number,
  childNew: Child
): ReadonlyArray<Child> => {
  const listChildNew = [...listChild];
  listChildNew[index] = childNew;
  return listChildNew;
};

export const updateListChildOnParent =
  (parent: Parent) =>
  (index: number) =>
  (childNew: Child): Parent =>
    replaceListChildOnParent(
      parent,
      updateListChild(parent.listChild, index, childNew)
    );
