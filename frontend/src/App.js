import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Link to = '/'>
          <button>Home</button>
       </Link>
        <Link to = '/about'>
          <button>About</button>
        </Link>
      </Header>
      <hr />
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </main>
    </BrowserRouter>
  );
}

export default App;
