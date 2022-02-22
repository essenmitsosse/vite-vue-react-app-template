export interface Child {
  readonly value: string;
}

export interface Parent {
  readonly listChild: ReadonlyArray<Child>;
}

export interface Wrapper {
  readonly parent: Parent;
}
