export interface Child {
  value: number;
}

export interface Parent {
  listChild: ReadonlyArray<Child>;
}

export interface Wrapper {
  parent: Parent;
}
