import React from "react";
import { Child } from "../src/types";
import { updateValueOnChild } from "../src/helper";

const ChildComponent = (props: {
  child: Child;
  setChild: (child: Child) => void;
  onRemove: () => void;
}) => {
  const onInput = (event: React.FormEvent<HTMLInputElement>) =>
    props.setChild(updateValueOnChild(event.currentTarget.value)(props.child));
  return (
    <div className="child">
      <input defaultValue={props.child.value} type="text" onInput={onInput} />
      <button onClick={props.onRemove}>-</button>
    </div>
  );
};
export default ChildComponent;
