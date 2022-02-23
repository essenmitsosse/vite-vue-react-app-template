import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./ParentComponent";
import { wrapperDefault } from "../src/wrapper";
import { useState } from "react";
import { updateParentOnWrapper } from "../src/helper";
import { pipe } from "rambda";
function App() {
  const [wrapper, setValue] = useState(wrapperDefault);
  const setParent = pipe(updateParentOnWrapper, setValue);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo App-logo-react" alt="logo" />
      </header>
      <ParentComponent
        parent={wrapper.parent}
        setParent={(parent) => setParent(wrapper, parent)}
      />
      <pre className="pre">{JSON.stringify(wrapper, null, 2)}</pre>
    </div>
  );
}

export default App;
