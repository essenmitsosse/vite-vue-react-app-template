import { Child } from "../src/types";
import { updateValueOnChild } from "../src/helper";
import { pipe } from "rambda";

const ChildComponent = (props: {
  child: Child;
  setChild: (child: Child) => void;
  onRemove: () => void;
}) => {
  const onInput = pipe(updateValueOnChild, props.setChild);
  return (
    <div className="child">
      <input
        defaultValue={props.child.value}
        type="text"
        onInput={(event) => onInput(props.child, event.currentTarget.value)}
      />
      <button onClick={props.onRemove}>-</button>
    </div>
  );
};
export default ChildComponent;
