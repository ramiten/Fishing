import { Link } from "react-router-dom";
import "../../services/open-weather-map-service";
import Weather from "../weather/weather";
import logo from "../images/header/logo1.png";

import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="Логотип" />
        </div>
        <div className="header-navigation">
          <Link className="header-link" to="/">
            Главная
          </Link>
          <Link className="header-link" to="/about">
            О нас
          </Link>
        </div>
        <div className="weather">
          <Weather />
        </div>
      </div>
      <div className="under-header-wave"></div>
    </>
  );
};

export default Header;
