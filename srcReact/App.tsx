import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./ParentComponent";
import { wrapper } from "../src/wrapper";
import { useState } from "react";
import { Parent } from "../src/types";

function App() {
  const [value, setValue] = useState(wrapper);

  const setParent = (parent: Parent): void => setValue({ parent });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo App-logo-react" alt="logo" />
      </header>
      <ParentComponent parent={value.parent} setParent={setParent} />
      <pre style={{ background: "lightgrey", padding: "1rem" }}>
        {JSON.stringify(value, null, 2)}
      </pre>
    </div>
  );
}

export default App;
