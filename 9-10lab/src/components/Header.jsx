import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  function logOut() {
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    localStorage.removeItem("registered");
    window.location.reload();
  }
  return (
    <div className="header">
      <Link to="/">Главная</Link>
      <Link to="/profile">Мой Профиль</Link>
      {!localStorage.getItem("registered") ? (
        <Link to="/sign-in">Регистрация</Link>
      ) : (
        <button onClick={() => logOut()}>Выйти</button>
      )}
    </div>
  );
};

export default Header;
