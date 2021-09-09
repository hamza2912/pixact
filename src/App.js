import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
// import Home2 from './pages/home2';
import About from "./pages/about";
import Shop from "./pages/shop";
import Digital from './pages/digital';

function App() {
  return (
    <BrowserRouter>

    <Switch>

      <Route path="/digital" component={Digital} />
      <Route path="/shop" component={Shop} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
