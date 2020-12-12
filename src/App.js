import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
    return () => {
      unsubscribe();
    }
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Navbar />
          <Checkout />
        </Route>
      </Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Navbar />
        <Header />
      </Route>
    </Router>
  );
}

export default App;
