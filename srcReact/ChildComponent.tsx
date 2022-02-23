import { Child } from "../src/types";
import { updateValueOnChild } from "../src/helper";
import { getGetEmit } from "../src/getGetEmit";

const ChildComponent = (props: {
  child: Child;
  setChild: (child: Child) => void;
  onRemove: () => void;
}) => {
  const getEmit = getGetEmit(props.setChild, () => props.child);
  const onInput = getEmit(updateValueOnChild);
  return (
    <div className="child">
      <input
        defaultValue={props.child.value}
        type="text"
        onInput={(event) => onInput(event.currentTarget.value)}
      />
      <button onClick={props.onRemove}>-</button>
    </div>
  );
};
export default ChildComponent;
