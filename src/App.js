import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import CssBaseline from "@material-ui/core/CssBaseline";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Switch>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
