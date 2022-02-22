import { Parent } from "../src/types";
import ChildComponent from "./ChildComponent";

const ParentComponent = (props: { parent: Parent }) => {
  const size = props.parent.listChild.length;
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "1rem",
        padding: "1rem",
        background: "lightgrey",
      }}
    >
      Anzahl: {size}
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
