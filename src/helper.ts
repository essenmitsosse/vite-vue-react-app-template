import { makeUnique } from "./helperIdUnique";
import { Child, Parent, Wrapper } from "./types";

const updateListChildOnParent = (
  parent: Parent,
  listChild: ReadonlyArray<Child>
): Parent => ({
  ...parent,
  listChild,
});

const updateListChild = (
  listChild: ReadonlyArray<Child>,
  index: number,
  childNew: Child
): ReadonlyArray<Child> => {
  const listChildNew = [...listChild];
  listChildNew[index] = childNew;
  return listChildNew;
};

const removeElementFromList = <T>(
  indexToRemove: number,
  list: ReadonlyArray<T>
): ReadonlyArray<T> => list.filter((_, index) => index !== indexToRemove);

export const updateParentOnWrapper =
  (parent: Parent) => (wrapper: Wrapper) => ({
    ...wrapper,
    parent,
  });

export const replaceChildInListChildOnParent =
  (parent: Parent) =>
  (index: number) =>
  (childNew: Child): Parent =>
    updateListChildOnParent(
      parent,
      updateListChild(parent.listChild, index, childNew)
    );

export const updateValueOnChild = (value: string) => (child: Child) => ({
  ...child,
  value,
});

export const addNewChildToParent = (parent: Parent): Parent =>
  updateListChildOnParent(parent, [
    ...parent.listChild,
    makeUnique({
      value: String.fromCharCode(
        parent.listChild.length + 65
      ).toLocaleLowerCase(),
    }),
  ]);

export const removeChildAtIndexFromParent =
  (index: number) =>
  (parent: Parent): Parent =>
    updateListChildOnParent(
      parent,
      removeElementFromList(index, parent.listChild)
    );
