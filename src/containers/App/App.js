import TextLogo from "../../components/Logos/TextLogo/TextLogo";
import logo from "../../assets/spacex-logo.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextLogo img={logo} />
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
