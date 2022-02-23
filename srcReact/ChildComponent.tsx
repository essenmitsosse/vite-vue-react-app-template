import React from "react";
import { Child } from "../src/types";

const ChildComponent = (props: {
  child: Child;
  setChild: (child: Child) => void;
}) => {
  const onInput = (event: React.FormEvent<HTMLInputElement>) =>
    props.setChild({ value: event.currentTarget.value });
  return (
    <div className="child">
      <input defaultValue={props.child.value} type="text" onInput={onInput} />
    </div>
  );
};
export default ChildComponent;
