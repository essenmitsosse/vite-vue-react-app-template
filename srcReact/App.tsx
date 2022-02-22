import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo App-logo-react" alt="logo" />
      </header>
      <ParentComponent />
    </div>
  );
}

export default App;
