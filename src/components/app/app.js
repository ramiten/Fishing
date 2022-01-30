import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./app.css";
import Header from "../header/header";
import About from "../pages/about/about";
import Home from "../pages/home/home";

const App = () => {
  const data = [
    {
      id: 1,
      firstName: "Паша",
      lastName: "Большаков",
      age: 26,
      login: "Ramiten",
      header: "Как я карпа ловил",
    },
    {
      id: 2,
      firstName: "Шикер",
      lastName: "Шикер",
      age: 26,
      login: "gapler",
      header: "Как я леща ловил",
    },
    {
      id: 3,
      firstName: "Гога",
      lastName: "Суворов",
      age: 26,
      login: "wild",
      header: "Как я в кс играл",
    },
  ];

  return (
    <div className="app">
      <Router>
        <Header />
        <div className="routes">
          <Switch>
            <Route path="/about" exact render={About} />
            <Route path="/" exact render={() => <Home data={data} />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
