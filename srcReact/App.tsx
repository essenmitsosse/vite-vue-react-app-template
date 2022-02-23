import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./ParentComponent";
import { wrapperDefault } from "../src/wrapper";
import { useState } from "react";
import { Parent } from "../src/types";
import { updateParentOnWrapper } from "../src/helper";
function App() {
  const [wrapper, setValue] = useState(wrapperDefault);

  const setParent = (parent: Parent): void =>
    setValue(updateParentOnWrapper(parent)(wrapper));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo App-logo-react" alt="logo" />
      </header>
      <ParentComponent parent={wrapper.parent} setParent={setParent} />
      <pre className="pre">{JSON.stringify(wrapper, null, 2)}</pre>
    </div>
  );
}

export default App;
