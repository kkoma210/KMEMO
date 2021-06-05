import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </main>
    </BrowserRouter>
  );
}

export default App;
