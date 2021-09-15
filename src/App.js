import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/pages/welcome";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import RegSuccess from "./components/pages/regSuccess";
import Home from "./components/pages/home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/registration-success">
            <RegSuccess></RegSuccess>
          </Route>
          <Route path="/">
            <Welcome></Welcome>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
