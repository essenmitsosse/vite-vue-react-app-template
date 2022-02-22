import { Child } from "../src/types";

const ChildComponent = (props: { child: Child }) => {
  return (
    <div
      style={{
        background: "grey",
        margin: "0.5rem",
        padding: "0.25rem",
      }}
    >
      {props.child.value}
    </div>
  );
};
export default ChildComponent;
