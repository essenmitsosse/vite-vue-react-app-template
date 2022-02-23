import { Child, Parent } from "../src/types";
import ChildComponent from "./ChildComponent";
import {
  addNewChildToParent,
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
  return (
    <div className="parent">
      Anzahl: {size} <button onClick={onClickAdd}>+</button>
      <ul>
        {props.parent.listChild.map((child, index) => (
          <li key={index}>
            <ChildComponent child={child} setChild={setChild(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ParentComponent;
