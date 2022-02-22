import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./ParentComponent";
import { wrapper } from "../src/wrapper";

const value = wrapper;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo App-logo-react" alt="logo" />
      </header>
      <ParentComponent parent={value.parent} />
      <pre style={{ background: "lightgrey", padding: "1rem" }}>
        {JSON.stringify(value, null, 2)}
      </pre>
    </div>
  );
}

export default App;
