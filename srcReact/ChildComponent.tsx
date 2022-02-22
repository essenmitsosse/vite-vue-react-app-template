import { Child } from "../src/types";

const ChildComponent = (props: { child: Child }) => {
  return <div className="child">{props.child.value}</div>;
};
export default ChildComponent;
