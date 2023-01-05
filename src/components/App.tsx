import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAnalytics } from "../providers/analytics/AnalyticsProvider";
import { Login } from "./Login";
import { Products } from "./Products";

function App() {
  const analytics = useAnalytics();
  analytics.page();

  return (
    <div className="App">
      {" "}
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/dashboard">Dashboard</Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
