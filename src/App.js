import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={process.env.PUBLIC_URL + '/logo192.png'} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#why">Why CodersCompass</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  </div>
  );
}

export default App;
