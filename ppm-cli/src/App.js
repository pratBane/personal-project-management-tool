import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import HeaderComponent from "./components/layout/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProjectComponent from "./components/projects/AddProjectComponent";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderComponent />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add_project" component={AddProjectComponent} />
      </Router>
    </Provider>
  );
}

export default App;
