import { Parent } from "../src/types";
import ChildComponent from "./ChildComponent";
import {
  addNewChildToParent,
  removeChildAtIndexFromParent,
  replaceChildInListChildOnParent,
} from "../src/helper";
import { getGetEmit } from "../src/getGetEmit";

const ParentComponent = (props: {
  parent: Parent;
  setParent: (parent: Parent) => void;
}) => {
  const size = props.parent.listChild.length;

  const getEmit = getGetEmit(props.setParent, () => props.parent);

  const onClickAdd = getEmit(addNewChildToParent);
  const setChild = getEmit(replaceChildInListChildOnParent);
  const getOnRemove = getEmit(removeChildAtIndexFromParent);

  return (
    <div className="parent">
      Anzahl: {size} <button onClick={onClickAdd}>+</button>
      <ul>
        {props.parent.listChild.map((child, index) => (
          <li key={child.idUnique}>
            <ChildComponent
              child={child}
              setChild={(child) => setChild(index, child)}
              onRemove={() => getOnRemove(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ParentComponent;
