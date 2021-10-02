import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Works from './pages/works';
import Approach from './pages/approach';
import Contact from './pages/contact';
import Services from './pages/services';

function App() {
  return (
    <BrowserRouter>

    <Switch>
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/approach" component={Approach} />
      <Route path="/works" component={Works} />
      <Route path="/" component={Home} />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
