import RoundButton from "../../components/Buttons/RoundButton/RoundButton";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RoundButton title="Reload Data" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
