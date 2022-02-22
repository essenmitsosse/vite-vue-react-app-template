import { Child } from "../src/types";

const ChildComponent = (props: { child: Child }) => {
  return <div>{props.child.value}</div>;
};
export default ChildComponent;
