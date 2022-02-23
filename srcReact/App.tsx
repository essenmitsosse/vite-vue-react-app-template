import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./ParentComponent";
import { wrapperDefault } from "../src/wrapper";
import { useState } from "react";
import { updateParentOnWrapper } from "../src/helper";
import { getGetEmit } from "../src/getGetEmit";

function App() {
  const [wrapper, setValue] = useState(wrapperDefault);

  const getEmit = getGetEmit(setValue, () => wrapper);
  const setParent = getEmit(updateParentOnWrapper);

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
