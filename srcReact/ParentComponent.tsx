import { Parent } from "../src/types";
import ChildComponent from "./ChildComponent";
import {
  addNewChildToParent,
  removeChildAtIndexFromParent,
  replaceChildInListChildOnParent,
} from "../src/helper";
import { pipe } from "rambda";

const ParentComponent = (props: {
  parent: Parent;
  setParent: (parent: Parent) => void;
}) => {
  const size = props.parent.listChild.length;

  const onClickAdd = pipe(addNewChildToParent, props.setParent);
  const setChild = pipe(replaceChildInListChildOnParent, props.setParent);
  const getOnRemove = pipe(removeChildAtIndexFromParent, props.setParent);

  return (
    <div className="parent">
      Anzahl: {size} <button onClick={() => onClickAdd(props.parent)}>+</button>
      <ul>
        {props.parent.listChild.map((child, index) => (
          <li key={child.idUnique}>
            <ChildComponent
              child={child}
              setChild={(child) => setChild(props.parent, index, child)}
              onRemove={() => getOnRemove(props.parent, index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ParentComponent;
