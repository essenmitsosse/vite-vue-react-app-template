import logo from './logo.svg'
import './App.css'

const message = 'Hello World!';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo App-logo-react" alt="logo" />
        <h1>{message}</h1>
      </header>
    </div>
  )
}

export default App
