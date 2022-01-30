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
import { useState } from "react";

const App = () => {
  const blogs = [
    {
      firstName: "Паша",
      lastName: "Большаков",
      age: 26,
      login: "Ramiten",
      header: "Как я леща ловил",
    },
    {
      firstName: "Шикер",
      lastName: "Шикер",
      age: 26,
      login: "gapler",
      header: "Как я карпа ловил",
    },
    {
      firstName: "Гога",
      lastName: "Суворов",
      age: 26,
      login: "wild",
      header: "Как я в кс играл",
    },
  ];

  const [state, setState] = useState(blogs);

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <div className="routes">
            <Route path="/about" exact render={About} />
            <Route path="/" exact render={() => <Home blogs={blogs} />} />
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
