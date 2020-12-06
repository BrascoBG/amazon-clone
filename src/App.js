import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Navbar />
          <Checkout />
        </Route>
      </Switch>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route exact path="/">
        <Navbar />
        <Header />
      </Route>
    </Router>
  );
}

export default App;
