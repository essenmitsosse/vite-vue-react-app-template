export interface Child {
  value: string;
}

export interface Parent {
  listChild: ReadonlyArray<Child>;
}

export interface Wrapper {
  parent: Parent;
}
