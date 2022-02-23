import React from "react";
import { Child } from "../src/types";
import { updateValueOnChild } from "../src/helper";

const ChildComponent = (props: {
  child: Child;
  setChild: (child: Child) => void;
}) => {
  const onInput = (event: React.FormEvent<HTMLInputElement>) =>
    props.setChild(updateValueOnChild(event.currentTarget.value)(props.child));
  return (
    <div className="child">
      <input defaultValue={props.child.value} type="text" onInput={onInput} />
    </div>
  );
};
export default ChildComponent;
