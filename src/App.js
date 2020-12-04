import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
      </Switch>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
    </Router>
  );
}

export default App;
