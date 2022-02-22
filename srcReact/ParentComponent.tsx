import { Parent } from "../src/types";
import ChildComponent from "./ChildComponent";

const ParentComponent = (props: { parent: Parent }) => {
  return (
    <ul>
      {props.parent.listChild.map((child, index) => (
        <li key={index}>
          <ChildComponent child={child} />
        </li>
      ))}
    </ul>
  );
};
export default ParentComponent;
