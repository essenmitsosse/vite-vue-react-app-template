export interface Unique {
  idUnique: string;
}

export interface Child extends Unique {
  readonly value: string;
}

export interface Parent extends Unique {
  readonly listChild: ReadonlyArray<Child>;
}

export interface Wrapper extends Unique {
  readonly parent: Parent;
}
