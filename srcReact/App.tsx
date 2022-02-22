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
      {JSON.stringify(value)}
      <ParentComponent parent={value.parent} />
    </div>
  );
}

export default App;
