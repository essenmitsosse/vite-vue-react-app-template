import { Parent } from "../src/types";
import ChildComponent from "./ChildComponent";
import { addNewChildToParent } from "../src/helper";

const ParentComponent = (props: {
  parent: Parent;
  setParent: (parent: Parent) => void;
}) => {
  const size = props.parent.listChild.length;
  const add = () => props.setParent(addNewChildToParent(props.parent));
  return (
    <div className="parent">
      Anzahl: {size} <button onClick={add}>+</button>
      <ul>
        {props.parent.listChild.map((child, index) => (
          <li key={index}>
            <ChildComponent child={child} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ParentComponent;
