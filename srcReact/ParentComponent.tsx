import { Child, Parent } from "../src/types";
import ChildComponent from "./ChildComponent";
import {
  addNewChildToParent,
  removeChildAtIndexFromParent,
  replaceChildInListChildOnParent,
} from "../src/helper";

const ParentComponent = (props: {
  parent: Parent;
  setParent: (parent: Parent) => void;
}) => {
  const size = props.parent.listChild.length;
  const onClickAdd = () => props.setParent(addNewChildToParent(props.parent));
  const setChild = (index: number) => (child: Child) =>
    props.setParent(
      replaceChildInListChildOnParent(props.parent)(index)(child)
    );
  const getOnRemove = (index: number) => () => {
    props.setParent(removeChildAtIndexFromParent(index)(props.parent));
  };

  return (
    <div className="parent">
      Anzahl: {size} <button onClick={onClickAdd}>+</button>
      <ul>
        {props.parent.listChild.map((child, index) => (
          <li key={child.idUnique}>
            <ChildComponent
              child={child}
              setChild={setChild(index)}
              onRemove={getOnRemove(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ParentComponent;
